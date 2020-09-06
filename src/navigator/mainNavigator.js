import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings98095Navigator from '../features/Settings98095/navigator';
import UserProfile98088Navigator from '../features/UserProfile98088/navigator';
import Settings98087Navigator from '../features/Settings98087/navigator';
import Settings98085Navigator from '../features/Settings98085/navigator';
import SignIn298083Navigator from '../features/SignIn298083/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings98095: { screen: Settings98095Navigator },
UserProfile98088: { screen: UserProfile98088Navigator },
Settings98087: { screen: Settings98087Navigator },
Settings98085: { screen: Settings98085Navigator },
SignIn298083: { screen: SignIn298083Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
