import {  StackNavigator, DrawerNavigator } from 'react-navigation';


import Teams from './scenes/Teams';
import Players from './scenes/Players';

    export const StackTeams = StackNavigator({
        TeamsScreen: { screen: Teams },
        PlayersScreen: {screen: Players},
    },
    {
      initialRouteName: 'TeamsScreen',
    });

    export const Drawer = DrawerNavigator({
        StackScren: { screen: StackTeams },
     
    });