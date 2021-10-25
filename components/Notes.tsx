import React from 'react';
import { StyleSheet, View ,Text} from 'react-native'
import InfoCard from './InfoCard';

const Notes =() =>{
    return (
        <View style={styles.container}>
            <InfoCard title={"My Exam"} datetime={"1 july 2021 , 07:23 AM "} color="#6273ED"/>
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
})

export default Notes