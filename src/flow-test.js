//@flow

import * as React from 'react';

type Props = {
  foo: number,
  bar: string,
  doesNotExist?: boolean
};

type State = {
  count: number
};

class MyComponent extends React.Component<Props, State> {
  state = {
    count: 0
  };

  componentDidMount() {
    setInterval(() => {
      this.setState(prevState => ({
        count: prevState.count + 1
      }));
    }, 1000);
  }

  render() {
    this.props.doesNotExist; // Error! You did not define a `doesNotExist` prop.

    return (
      <div>
        {this.props.bar}--{this.state.count}
      </div>
    );
  }
}

<MyComponent foo={1} />;
