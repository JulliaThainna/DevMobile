import { registerRootComponent } from 'expo';

//import App from './src/views/App';
//import routes from './src/routes'
import FormLogin from './src/views/FormLogin';
import App2 from './App2';
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
//registerRootComponent(routes);
registerRootComponent(App2);