//@flow
import * as React from 'react';

class MyComponent extends React.Component<{}, {count: number}> {

    handleClick = (event: SyntheticEvent<HTMLButtonElement>) =>  {

      (event.currentTarget: HTMLButtonElement);
      this.setState(prevState => ({
        count: prevState.count + 1,
      }));
    }

    render()
   

    {
      return (
        <div>
          <p>Count: {this.state.count}</p>
          <button onClick={this.handleClick}>
              Increment
          </button>
        </div>
      );
    }
}

<MyComponent />;
