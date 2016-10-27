import React from 'react';
import {connect} from 'react-redux';
import {getMessages} from '../actions/homeActions.js';

export class Home extends React.Component {
	componentDidMount() {
		this.props.getMessages();
	}

  render() {
    return (
      <div>
        Home
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