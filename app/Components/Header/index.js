import React from 'react';
import { Link } from 'react-router-dom';

import Styles from './styles.less';
import Logo from '../../Resources/Graphics/logo.svg';

class Header extends React.Component {
	render() {
		return (
			<header 
				id="header"
			>
				<img 
					src={Logo}
					alt="Matthew Brubaker Smith's Logo"
				/>
				<div>
					<h1>
						Matthew Brubaker Smith
					</h1>
					<p>
						Hi. I make stuff. Blah blah
					</p>
					<ul
						id="main-nav"
					>
						<li>
							Web
						</li>
						<li>
							Art
						</li>
						<li>
							Code
						</li>
					</ul>
				</div>
			</header>
		)
	}
}

export default Header;