import {  StackNavigator, DrawerNavigator } from 'react-navigation';


import Teams from './scenes/Teams';

    export const StackTeams = StackNavigator({
        TeamsScreen: { screen: Teams },
    },
    {
      initialRouteName: 'TeamsScreen',
    });

    export const Drawer = DrawerNavigator({
        StackScren: { screen: StackTeams },
     
    });