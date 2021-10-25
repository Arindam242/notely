import React from "react";
import { StyleSheet, View,Image,Text, TouchableOpacity } from 'react-native'
import InfoCard from "./InfoCard";
import {useNavigation} from '@react-navigation/native'

const Reminder = () =>{

    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={()=>navigation.navigate("Root",{
            title:"Summer Vacation",
            datetime:"12 july 2021 ,07:23 PM",
            img:"https://images.pexels.com/photos/7444975/pexels-photo-7444975.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            text:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. "
        })}>
            <View style={styles.container}>
                <InfoCard color="#4DC992" title="Summer Vacation" datetime="12 july 2021 ,07:23 PM"/>
                <Image resizeMode="cover"  style={styles.img} source={{uri:"https://images.pexels.com/photos/7444975/pexels-photo-7444975.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}}/>
                <Text style={styles.content}>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. 
                </Text>
            </View>
        </TouchableOpacity>
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