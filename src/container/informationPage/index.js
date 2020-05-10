import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';
import { styles } from './style'
import { Actions } from 'react-native-router-flux';

export default class Information extends Component {
    constructor(props){
        super(props);
        this.state ={
            text: '',
            index: 0
        }
    }

    // onSubmit = () =>{
    //     const { text } = this.state;
    //     fetch(`https://restcountries.eu/rest/v2/name/${text}`, { method: 'GET'})
    //     .then((response) => response.json())
    //     .then((responseData)=>{
    //         Actions.informationPage({data: responseData})
    //     })
    // }

    searchWeatherInfo = (city, index) =>{
        fetch(`http://api.weatherstack.com/current?access_key=cfc7b81881037645e27aaeae717247cb&query=${city}`, { method: 'GET'})
        .then((response) => response.json())
        .then((responseData)=>{
            debugger
            this.setState({
                currentIndex: index,
                searchData: responseData.current
            })
        })
    }

    render(){
        const { text, searchData, currentIndex } = this.state;
        return(
            <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <View>
                    <TouchableOpacity
                        style={styles.backButton}
                        activeOpacity={0.8}
                        onPress={()=> Actions.home()}
                    >
                        <Text style={styles.buttonText}>
                            Back
                        </Text>
                    </TouchableOpacity>
                    <FlatList
                        data={this.props.data}
                        renderItem={({item, index})=>{
                            debugger
                            return(
                                <View style={styles.card} key={index}>
                                    <View style={styles.rowView}>
                                        <Text style={styles.title}>
                                            Capital:
                                        </Text>
                                        <Text style={styles.titleValue}>
                                            {item.capital}
                                        </Text>
                                    </View>
                                    <View style={styles.rowView}>
                                        <Text style={styles.title}>
                                            Population:
                                        </Text>
                                        <Text style={styles.titleValue}>
                                            {item.population}
                                        </Text>
                                    </View>
                                    <View style={styles.rowView}>
                                        <Text style={styles.title}>
                                            Lat:
                                        </Text>
                                        <Text style={styles.titleValue}>
                                            {item.latlng[0]}
                                        </Text>
                                    </View>
                                    <View style={styles.rowView}>
                                        <Text style={styles.title}>
                                            Long:
                                        </Text>
                                        <Text style={styles.titleValue}>
                                            {item.latlng[1]}
                                        </Text>
                                    </View>
                                    
                                    <View style={styles.imgView}>
                                        <Image
                                            source={{uri: item.flag}}
                                            resizeMode='contain'
                                            style={styles.img}
                                        />
                                    </View>
                                    {
                                        searchData && currentIndex == index &&
                                            <View style={styles.searchView}>
                                                <View style={styles.imgView}>
                                                    <Image
                                                        source={{uri: searchData.weather_icons[0]}}
                                                        style={styles.img}
                                                    />
                                                </View>
                                                <View style={styles.rowView}>
                                                    <Text style={styles.title}>
                                                        Temperature:
                                                    </Text>
                                                    <Text style={styles.titleValue}>
                                                        {searchData.temperature}
                                                    </Text>
                                                </View>
                                                <View style={styles.rowView}>
                                                    <Text style={styles.title}>
                                                        Wind Speed:
                                                    </Text>
                                                    <Text style={styles.titleValue}>
                                                        {searchData.wind_speed}
                                                    </Text>
                                                </View>
                                                <View style={styles.rowView}>
                                                    <Text style={styles.title}>
                                                        Precip:
                                                    </Text>
                                                    <Text style={styles.titleValue}>
                                                        {searchData.precip}
                                                    </Text>
                                                </View>
                                            </View>
                                    }
                                    
                                    {
                                        currentIndex != index &&
                                            <TouchableOpacity
                                                style={styles.button}
                                                activeOpacity={0.8}
                                                onPress={()=> 
                                                    this.searchWeatherInfo(item.capital, index)
                                                }
                                            >
                                                <Text style={styles.buttonText}>
                                                    Capital Weather
                                                </Text>
                                            </TouchableOpacity>
                                        }
                                </View>
                            )
                        }}
                    />
                </View>
            </SafeAreaView>
            </View>
        )
    }
}


