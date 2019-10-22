import React from 'react';
import Button from './components/Button';
import Message from './components/Message';

export default class App extends React.Component {
  state = {
    color: '#000'
  };

  onClick(color) {
    this.setState({ color });
  }

  render() {
    const styles = {
      'font-family': 'sans-serif',
      'text-align': 'center'
    };

    const colors = [
      { name: '赤', code: '#f00' },
      { name: '黒', code: '#000' },
      { name: '青', code: '#00f' }
    ];

    return (
      <div className="App" style={styles}>
        <Message color={this.state.color} />

        {colors.map(color => (
          <Button
            operator={color.name}
            handleClick={() => this.onClick(color.code)}
          />
        ))}
      </div>
    );
  }
}
