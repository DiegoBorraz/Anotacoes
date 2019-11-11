import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';


export default class CreateNote extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: "",
            description: ""
        }
    }
    

    render(){
        
        return(
            <View>
                <TextInput
                Outlined="focused"
                    onChangeText={ title => this.setState({title})}
                    value={this.state.title}
                />
                <TextInput
                    onChangeText={description => this.setState({description})}
                    value={this.state.description}
                />
                <View > 
                    <Button
                        title="Salve"
                    />
                </View>
            </View>
        )
    }


}