import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import AppBar from "../components/AppBar";
import FilterBox from "../components/FIlterBox";
import Notes from "../components/Notes";
import Reminder from "../components/Reminder";
import SearchBox from "../components/SearchBox";
import ActionButton from "react-native-action-button";
import {Feather} from '@expo/vector-icons'
import {NavigationProp} from '@react-navigation/native'

import {RootStackParamList} from '../types'

interface HomeProps {
  navigation:NavigationProp<RootStackParamList,'Home'>
}

const HomeScreen = ({navigation}:HomeProps) => {
  return (
    <View style={styles.container}>
     <AppBar/>
     <SearchBox/>
     <ScrollView showsVerticalScrollIndicator={false} >
     <FilterBox/>
        <Reminder/>
        <Notes/>
     </ScrollView>
     <ActionButton useNativeFeedback={true}>
       <ActionButton.Item title="new Notes" onPress={() =>navigation.navigate("Root",{
         title: "New Notes",
         datetime:"12 july 2021 ,07:23 PM",
         text:"write whatever you want",
         img:""
       })}>
          <Feather name="plus" size={24} color="white"/>
       </ActionButton.Item>
     </ActionButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal:25,
    paddingVertical:50
  },
});

export default HomeScreen;
