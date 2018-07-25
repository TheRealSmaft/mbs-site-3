import React from 'react';
import Lottie from 'lottie-web';

import Styles from './styles.less';
import Logo from '../../Resources/Graphics/logo.svg';

class Header extends React.Component {
	render() {
		return (
			<header 
				id="header"
			>
				<div
					className="logo-container"
				>
					<img 
						src={Logo}
						alt="Matthew Brubaker Smith's Logo"
					/>
				</div>
			</header>
		)
	}
}

export default Header;