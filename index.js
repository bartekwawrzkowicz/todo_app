import 'react-native-gesture-handler';

import App from './src/containers/App';
import { registerRootComponent } from 'expo';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './src/reducers';

const store = createStore(rootReducer);


// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(() => {
    return (
        <Provider store={store} >
            <App />
        </Provider>
    )
});
