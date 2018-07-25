import React from 'react';
import ReactDOM from 'react-dom';
import Lottie from 'lottie-web';

class LogoComponent extends React.Component {
	componentDidMount() {
		let logoNode = ReactDOM.findDOMNode(this.refs.logo);
		let animation = {
			container: logoNode,
			renderer: 'svg',
			loop: true,
			autoplay: true,
			animationData: require('../../Resources/Animations/hovering-logo.json')
		};
		Lottie.loadAnimation(animation);
	}

	render() {
		return (
			<div id="logo" ref="logo">
			</div>
		)
	}
}

export default LogoComponent;