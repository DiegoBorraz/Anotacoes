import React from 'react';
import { ScrollView ,StyleSheet, Text, View } from 'react-native';



import List from './src/components/List'

export default class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <View>
              <List/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    


  });