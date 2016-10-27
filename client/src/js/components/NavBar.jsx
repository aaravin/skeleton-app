import React from 'react';

export default class NavBar extends React.Component {
  render() {
    return (
      <div>
        <div>
          <div>Welcome</div>
        </div>

        {this.props.children}
      </div>
    );
  }
};