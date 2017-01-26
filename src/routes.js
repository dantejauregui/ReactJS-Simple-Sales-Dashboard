import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import ListIndex from './components/list_index';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={ListIndex} />
	</Route>
);