import React from 'react';
import { View,StyleSheet,Text, TouchableOpacity,Image } from 'react-native'

const AppBar =() =>{
    return (
        <View style={styles.appBar}>
            <Text style={styles.text}>My notes</Text>
            <TouchableOpacity>
                <Image 
                style={styles.image}
                    resizeMode="contain"
                    source={{uri:"https://images.pexels.com/photos/8683447/pexels-photo-8683447.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}}
                />
            </TouchableOpacity>
        </View>
    )

}
const styles = StyleSheet.create({
    appBar:{
        display: "flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems: 'center',
    },
    text:{
        fontSize:23,
        fontWeight:"bold",
    },
    image:{
        width: 50,
        height: 50,
        borderRadius:15
    }
})


export default AppBar