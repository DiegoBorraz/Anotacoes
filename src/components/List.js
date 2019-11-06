import React from 'react';
import { ScrollView, StyleSheet,Text, View } from 'react-native';

import { Card } from 'react-native-elements';

const List = props => {
        
    return (
        <ScrollView >
            <View style={styles.list}>
                <View style={styles.container}>
                    <Card  
                    title="Titulo1" 
                    containerStyle={{
                        backgroundColor: '#F7E401'
                    }} >
                        <Text style={styles.item}>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
                    </Card>
                </View>
            </View>
        </ScrollView>
    )
};
const styles = StyleSheet.create({
    list: {
        display: 'flex',
        margin:10,
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignContent: 'center',
        marginTop: 20,
        
      },
      container: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        alignContent: 'space-between',
        width: '50%',
      },
      item: {
        height: 1,
  
      }
    
});
export default List;