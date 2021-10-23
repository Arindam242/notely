import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import AppBar from "../components/AppBar";
import FilterBox from "../components/FIlterBox";
import Notes from "../components/Notes";
import Reminder from "../components/Reminder";
import SearchBox from "../components/SearchBox";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
     <AppBar/>
     <SearchBox/>
     
     <ScrollView showsVerticalScrollIndicator={false} >
     <FilterBox/>
        <Reminder/>
        <Notes/>
     </ScrollView>
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
