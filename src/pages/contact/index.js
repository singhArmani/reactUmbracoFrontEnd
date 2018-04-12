//@flow
import React, { Component } from 'react';
import _ from 'lodash';

import Header from '../../components/header/index';
import ContentApi from '../../api/contentApi';

type State = {
  isLoading: boolean,
  isLoadingError: boolean,
  properties: any
};

class Contact extends Component<void, State> {
  state = {
    isLoading: true,
    isLoadingError: false,
    properties: {}
  };
  componentDidMount = async () => {
    try {
      const response = await ContentApi.contact.getFullContent();
      if (_.has(response.data, 'properties')) {
        this.setState({
          isLoading: false,
          properties: response.data.properties
        });
      }
    } catch (err) {
      this.setState({
        isLoading: false,
        isLoadingError: true
      });
    }
  };

  createMarkup = (stringMarkup: string) => {
    return { __html: stringMarkup };
  };

  render() {
    return (
      <div>
        <Header pageTitle={this.state.properties.pageTitle} />
        <div id="main-container">
          <div id="main" className="wrapper clearfix">
            <section>
              <h2
                dangerouslySetInnerHTML={this.createMarkup(
                  this.state.properties.pageTitle
                )}
              />
              <p
                dangerouslySetInnerHTML={this.createMarkup(
                  this.state.properties.bodyText
                )}
              />
            </section>
          </div>
        </div>
      </div>
    );
  }
}

Contact.propTypes = {};

export default Contact;
