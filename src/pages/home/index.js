//@flow
import React from 'react';
import _ from 'lodash';

import Header from '../../components/header';
import ContentApi from '../../api/contentApi';
type State = {
  isLoading: boolean,
  isErrorLoading: boolean,
  content: any
};

class Home extends React.PureComponent<void, State> {
  state = {
    isLoading: true,
    isErrorLoading: false,
    content: {}
  };

  isComponentMounted = true;

  componentDidMount = async () => {
    // making call to umbraco Rest api
    try {
      const response = await ContentApi.home.getFullContent();
      if (
        _.has(response.data, '_embedded.content') &&
        _.isArray(response.data._embedded.content)
      ) {
        if (this.isComponentMounted) {
          this.setState({
            isLoading: false,
            content: response.data._embedded.content
          });
        }
      }
    } catch (error) {
      if (this.isComponentMounted) {
        this.setState({
          isLoading: false,
          isErrorLoading: true
        });
        // TODO: Handle Error
      }
    }
  };

  componentWillUnmount() {
    // keep track if component has been unmounted
    this.isComponentMounted = false;
  }

  createMarkup = (stringMarkup: string) => {
    return { __html: stringMarkup };
  };

  render() {
    if (this.state.isLoading) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    }

    if (this.state.isErrorLoading) {
      return (
        <div className="alert alert-danger">
          <strong>Error occured </strong>
        </div>
      );
    }
    const properties = this.state.content[0].properties;
    return (
      <div>
        <Header pageTitle={properties.pageTitle} />
        <div id="main-container">
          <div id="main" className="wrapper clearfix">
            <article>
              <section>
                <h2>{properties.articleTitle1}</h2>
                <p
                  dangerouslySetInnerHTML={this.createMarkup(
                    properties.articleBodyText1
                  )}
                />
              </section>
              <section>
                <h2>{properties.articleTitle2}</h2>
                <p
                  dangerouslySetInnerHTML={this.createMarkup(
                    properties.articleBodyText2
                  )}
                />
              </section>
            </article>

            <aside>
              <h3>{properties.asideTitle}</h3>
              <div
                dangerouslySetInnerHTML={this.createMarkup(
                  properties.asideText
                )}
              />
            </aside>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
