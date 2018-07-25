import React from 'react';
import LogoComponent from './Components/LogoComponent';

import GlobalStyles from './Styles/global.less';
import LogoStyles from './Components/LogoComponent/styles.less';

class App extends React.Component {
	render() {
		return (
			<React.Fragment>
				<main>
					<div id="logo-container">
						<LogoComponent />
						<hgroup>
							<h1>Matthew Brubaker Smith</h1>
							<h2>Web Developer • Graphic Designer</h2>
							<h4>Animator • 3D Modeler • Game Designer • Delight</h4>
						</hgroup>
					</div>
				</main>
			</React.Fragment>
		)
	}
}

export default App;