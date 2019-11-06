import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Card } from 'react-native-elements';

export default class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <View style={styles.container}>
                <Card title="Titulo" style={styles.card}>
                <Text style={styles.item}>DesriçãoDesriçãoaaaaaaaaaaaaaaaaaaaawwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwaaaaaaaa/n aaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaa
                    /n 
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaDesriçãoaaaaaaaaaaaaaaaaaaaaaaaaaaaa/n aaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaa
                    /n 
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
                </Card>
                <Card title="Titulo" style={styles.card}>
                <Text style={styles.item}>DesriçãoDesriçãoaaaaaaaaaaaaaaaaaaaaaaaaaaaa/n aaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaa
                    /n 
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
                </Card>
                <Card title="Titulo" style={styles.card}>
                <Text style={styles.item}>Desriçãoaaaaaaaaaaaaaaaaaaaaaaaaaaaa/n aaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaa
                    /n 
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                </Text>
                </Card>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        
        
        backgroundColor: '#fff',
        maxWidth: '30%',
        maxHeight: '30%'
    },
    card: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        margin: 2,
        maxWidth: '40%',
        maxHeight: '30%'
    },
    item: {
        maxWidth: '40%',
        maxHeight: '30%'
    }


  });