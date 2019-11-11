import React from 'react';
import { View } from 'react-native';

import Header from '../components/Header';
import ListNote from '../components/ListNote';

export default class Home extends React.Component {
    render(){
        return(
            <View>
                <Header navigation={this.props.navigation} />
                <ListNote/>
            </View>
        );
    }
}