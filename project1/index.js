import {AppRegistry} from 'react-native';
// Loading the app
import App from './App';
//brings the name from app.json file
import {name as appName} from './app.json';

//running the app file
AppRegistry.registerComponent(appName, () => App);
