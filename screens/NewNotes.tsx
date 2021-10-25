import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import {Feather} from '@expo/vector-icons'
import {NavigationProp,RouteProp} from '@react-navigation/native'
import {RootStackParamList} from '../types'

interface NewNotesProp {
    navigation:NavigationProp<RootStackParamList,'Root'>
    route:RouteProp<RootStackParamList,'Root'>
}

const NewNotes:React.FC<NewNotesProp>=({route,navigation}) =>{
    
    const {title,datetime,img,text} = route.params;

    return (
        <ScrollView style={styles.container}>
            <View style={styles.appbar}>
                <TouchableOpacity onPress={() =>navigation.navigate("Home")}>
                    <Feather name="arrow-left" size={28} color={"black"}/>
                </TouchableOpacity>

                <Feather name="check" color={"blue"} size={28}/>
            </View>
            <View style={{marginVertical:20}}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.datetime}>{datetime}</Text>
            </View>
            <View style={{marginVertical:10}}>
                <Text style={styles.content}>{text}</Text>
            </View>
            <Image 
                resizeMode="cover"
                style={styles.image}
                source={{uri:img}}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"#fff",
        paddingHorizontal:25,
        paddingVertical:50,
    },
    appbar: {
       
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"space-between"
    },
    title: {
        fontSize:22,
        fontWeight: "bold",
    },
    datetime:{
        fontSize:16,
    },
    content: {
        fontSize:22,
        fontWeight:"500"
    },
    image:{
        width:"100%",
        height: 350,
        borderRadius:15
    }
});

export default NewNotes;