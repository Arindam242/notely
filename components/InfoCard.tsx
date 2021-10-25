import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

interface props{
    color: string;
    title: string;
    datetime: string;
}

const InfoCard =(props:props) =>{
    const {color,title,datetime} = props;
    return (
        <View style={styles.info}>
            <View style={[styles.circle,{backgroundColor:color,}]}>
                <Ionicons name="notifications" size={24} color="white" />
            </View>
            <View>
                <Text style={styles.maintext}>{title}</Text>
                <Text style={styles.text}>{datetime}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    info:{
        display: "flex",
        flexDirection:"row",
        alignItems: "center",
        borderBottomWidth:1,
        borderBottomColor:"#f1f1f1",
        paddingVertical:10
    },
    circle: {
        width: 50,
        height: 50,
        display: "flex",
        alignItems: "center",
        justifyContent:"center",
        borderRadius:50,
        
        marginRight:10
    },
    maintext:{
        fontSize:20,
        fontWeight:"bold"
    },
    text:{
        fontWeight:"400",
        fontSize:13
    }
})

export default InfoCard