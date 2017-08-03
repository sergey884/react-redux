import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Page from '../components/Page';
import * as actions from '../actions/actions';

class App extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount(){
		console.log("componentDidMount");;
		this.props.actions.getItems();
	}
	render() {

		const {page : { items } } = this.props;
		return (<div>
					<Page items={items} />
				</div>);
		}
}

const mapStateToProps = (state) => {
	return {
		page : state.page
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		actions : bindActionCreators(actions, dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);