import React from "react";
import { StyleSheet, View,Image,Text } from 'react-native'
import InfoCard from "./InfoCard";


const Reminder =() =>{
    return (
        <View style={styles.container}>
            <InfoCard/>
            <Image resizeMode="cover"  style={styles.img} source={{uri:"https://images.pexels.com/photos/7444975/pexels-photo-7444975.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}}/>
            <Text style={styles.content}>
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. 
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor:"#fff",
        padding: 15,
    },
    content:{
        marginTop:5,
        fontSize:18,
        fontWeight:"bold"
    },
    img:{
        width: '100%',
        height: 200,
        borderRadius:15
    }
})

export default Reminder;