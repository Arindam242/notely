import React from 'react'
import { FlatList, StyleSheet, Text,  Pressable,TouchableWithoutFeedback, View } from 'react-native'


const Data =[
    {
        id:"0",
        text:"All Notes"
    },
    {
        id:"1",
        text:"Reminder"
    },
    {
        id:"2",
        text:"Audio"
    },
    {
        id:"4",
        text:"Images"
    }
]

const FilterBox =() =>{
    return (
       <FlatList
            style={{
                marginVertical:10
            }}
            keyExtractor={item=>item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={Data}
            renderItem={({item}) => (
                <Filter text={item.text}/>
            )}
       />
    )
}


const Filter =({text}) =>{
    return (
        <TouchableWithoutFeedback>
            <View style={styles.box}>
                <Text style={styles.text}>{text}</Text>
            </View>
        </TouchableWithoutFeedback>
        
    )
}

const styles = StyleSheet.create({
    box: {
        width: 100,
        height: 50,
        borderRadius:8,
        backgroundColor:"#f1f1f1",
        marginHorizontal:10,
        display: "flex",
        alignItems:"center",
        justifyContent:"center",
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0,
        shadowRadius: 3.29,

        elevation: 5,
    },
    text:{
        fontSize:16,
        // color: "#fff",
        color:"#000",
        fontWeight:"600"
    },
    purple:{
        color:"#6273ed"
    }
})

export default FilterBox