import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StatusBar,
  TouchableOpacity,
  Button
} from 'react-native';
import { styles } from './style'
import { Actions } from 'react-native-router-flux';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state ={
            text: ''
        }
    }

    onSubmit = () =>{
        const { text } = this.state;
        fetch(`https://restcountries.eu/rest/v2/name/${text}`, { method: 'GET'})
        .then((response) => response.json())
        .then((responseData)=>{
            Actions.informationPage({data: responseData})
        })
    }

    render(){
        const { text } = this.state;
        return(
            <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <View>
                    <TextInput
                        onChangeText={(text) => this.setState({text})}
                        value={text}
                        placeholder='Enter Country'
                        style={styles.inputStyle}
                    />
                    <TouchableOpacity
                        style={styles.submitButton}
                        activeOpacity={0.8}
                        disabled={text.length > 0 ? false : true}
                        onPress={()=> this.onSubmit()}
                    >
                       <Text style={styles.submitText}>
                           Submit
                       </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
            </View>
        )
    }
}


