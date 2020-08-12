import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Colors from "../constants/colors";
import Header from '../components/Header';
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import NormalSearchScreen from "./NormalSearchScreen";
import {useSelector} from "react-redux";

const HomepageScreen = props => {
    const loginState = useSelector(state => state.login);
    console.log(loginState);
    return (
        <View style={styles.header}>
            <Header title = {"Homepage"}/>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
      flex: 1
    },
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default HomepageScreen;
