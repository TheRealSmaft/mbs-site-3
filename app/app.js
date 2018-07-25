import React from 'react';

import Header from './Components/Header';
import Footer from './Components/Footer';

import GlobalStyles from './Styles/global.less';

class App extends React.Component {
	render() {
		return (
			<React.Fragment>
				<main>
					<Header />
				</main>
				<Footer />
			</React.Fragment>
		)
	}
}

export default App;