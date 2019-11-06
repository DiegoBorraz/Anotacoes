import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/components/Header' 
import List from './src/components/List'


export default class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <View style={styles.container}> 
              <Header  />
              <List/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      height: '100%',
      backgroundColor:'#EB5B14'
    }


  });

  /*
#F7E401
#EB5B14
#70DB00
#EA171D
#309EE9

*/