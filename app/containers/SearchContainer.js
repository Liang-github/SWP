
import React from 'react';
import {connect} from 'react-redux';
import Search from '../pages/Search';

class SearchContainer extends React.Component {
	render() {
		return (
			return (
				<Search {...this.props}/>
				)
			)
	}
}
export default connect((state) => {
	const {Search} = state;
	return {
		Search
	}
})(SearchContainer);