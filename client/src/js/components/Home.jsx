import React from 'react';
import {connect} from 'react-redux';

import {getMessages} from '../actions/homeActions';

export class Home extends React.Component {
	componentDidMount() {
		this.props.getMessages();
	}

  renderMessages() {
    return this.props.messages.map((message, i) => {
      return (
        <div className="message" key={i}>
          {message}
        </div>
      )
    });
  } 

  render() {
    return (
      <div>
        Home
        {this.renderMessages()}
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    messages: state.home.messages
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMessages: () => { dispatch(getMessages()); }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)