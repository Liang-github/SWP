
import React from 'react';
import { connect } from 'react-redux';
import FoodInfo from '../pages/FoodInfo';

class FoodInfoContainer extends React.Component {
	render() {
		return
	}
}

export default connect((state) =>{
	const {FoodInfo} = state;
	return { FoodInfo };
})(FoodInfoContainer);