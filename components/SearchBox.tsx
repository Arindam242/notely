import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import {Feather} from '@expo/vector-icons'

const SearchBox = () =>{
    return (
         <View style={styles.container}>
             <Feather style={{marginRight:10}} name="search" size={24} color={"#a1a1a1"}/>
             <TextInput placeholderTextColor="#a1a1a1"  placeholder="Search anything"/>
         </View>   
    )
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        borderRadius:10,
        marginVertical:10,
        backgroundColor:"#f1f1f1",
        display: "flex",
        flexDirection:"row",
        alignItems: "center",
        paddingHorizontal:20
    }
})

export default  SearchBox