import React from 'react';

class Message extends React.Component {
  render() {
    const { color } = this.props;
    const styles = {
      color
    };

    return <h1 style={styles}>Hello, World!</h1>;
  }
}

export default Message;
