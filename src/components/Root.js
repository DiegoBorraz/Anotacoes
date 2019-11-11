import React from 'react';


import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CreateNote from '../pages/CreateNote';
import Home from '../pages/Home'

const Root = createStackNavigator({
    Home: {
        screen: Home,
        
    },
    CreateNote: {
        screen: CreateNote,
    },
    },{
        initialRouteName: 'CreateNote',
        defaultNavigationOptions: {
            title: "Anotações",
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#E50024',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: 'white',
                fontSize: 30,
                flexGrow:1,
                textAlign: 'center',
              }
        } 
    }
);

const AppContainer = createAppContainer(Root);
export default AppContainer;