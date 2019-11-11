import React from 'react';
import { Alert, Button, StyleSheet, Text,TextInput, View } from 'react-native';



export default function Header({ navigation }) {
    
  
    const [value, onChangeText] = React.useState('Useless Placeholder');
        return(
            <View>
                <View style={styles.container}>
                    <TextInput
                        style={styles.input}
                        onChangeText={text => onChangeText(text)}
                        value={value}
                    />
                    <View style={styles.button}> 
                        <Button
                            title="?"
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="Add"
                            onPress={() => navigation.navigate('CreateNote')}
                        />
                    </View>
                </View>
                
            </View>
        );
    }

const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: "#E50024",
        flexDirection: 'row',
        

    }, input: {
        fontSize: 20,
        backgroundColor: '#FFFFFF',
        margin: 10,
        flex: 4
       
    }, button:{
        margin: 10,
        alignContent: 'center',
        flex: 1
    }
  });
