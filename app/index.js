import React from 'react';
import ReactDOM from 'react-dom';

import App from './app.js'

const app = document.getElementById('app');

const render = (App) => {
	ReactDOM.render(
		<App />,
		app
	);
};

render(App);