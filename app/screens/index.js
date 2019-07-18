import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from './Home';
import Profile from './Profile';

const MainNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    Profile: { screen: Profile }
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

const App = createAppContainer(MainNavigator);

export default App;
