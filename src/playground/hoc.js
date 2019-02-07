import React from 'react';
import ReactDOM from 'react-dom';
import { disconnect } from 'cluster';

const info = (props) => (
	<div>
		<h1>Info</h1>
		<p>this is info</p>
	</div>
);

const adminWarning = (wrappedComponent) => {
	return (props) => (
		<div>
			<p>This is private , please don't share it</p>
			<wrappedComponent />
		</div>
	);
};

const AdminInfo = adminWarning(info);

ReactDOM.render(<AdminInfo info="this is private shit" />, document.getElementById('root'));
