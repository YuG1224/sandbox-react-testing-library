import React from 'react';

class Button extends React.Component {
  render() {
    const { operator, handleClick } = this.props;
    return (
      <button className="Button" onClick={handleClick}>
        {operator}
      </button>
    );
  }
}

export default Button;
