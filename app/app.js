import React from 'react';
import { Provider } from '@ant-design/react-native';
import { Provider as ProviderRedux } from 'react-redux';

import Router from './router';
import store from './store/index';

// import NoInternet from '@components/NoInternet';
// import NoRoot from '@components/NoRoot';

const App = () => {

	return (
		<ProviderRedux store={store} >
			<Provider>
				{/* <NoInternet/>
				<NoRoot/> */}
				<Router/>
			</Provider>
		</ProviderRedux>
	);
};

export default App;
