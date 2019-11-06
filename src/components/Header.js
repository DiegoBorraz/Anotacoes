import React from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';


const  Header = props =>  {
    
        return(
            <View>
                <View style={styles.container}>
                    <Text style={styles.title}>HEADER</Text>
                    <Button title="Add" onPress={() => Alert.alert('ADD Anotação')}/>
                </View>
                
            </View>
        );
    }

const styles = StyleSheet.create({
    container: {
        height: 100,
        backgroundColor: "#70DB00",
        marginBottom: 10

    }, title: {
        marginTop: 30,
        fontSize: 30,
        textAlign: 'center',
       
    }
  });

  export default Header;