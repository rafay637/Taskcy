import Angle from 'react-native-vector-icons/AntDesign';
import Right from 'react-native-vector-icons/AntDesign';
import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Settings = () => {
    const [isPermissionEnabled, setIsPermissionEnabled] = useState(false);
    const [isPushNotificationEnabled, setIsPushNotificationEnabled] = useState(false);
    const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);
    const navigation = useNavigation();

    const customSwitchStyles = (value) => ({
        trackColor: { false: 'lightgrey', true: '#C8B5E9' },
        thumbColor: value ? '#756EF3' : '#A1A1A2',
    });

    const goBack = () => {
        navigation.navigate('Profile')
    };
    const Lang = () => {
        navigation.navigate('Language')
    };
    const add = () => {
        navigation.navigate('AddTask')
    };
    const side = () => {
        navigation.navigate('SideMenu')
    };

    return (
        <View style={styles.main}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={goBack}>
                    <Angle style={styles.icon} size={30} name='leftcircleo' />
                </TouchableOpacity>
                <Text style={styles.head}>Settings</Text>
            </View>

            <View>
                <View style={styles.inputContainer}>
                    <Text style={styles.languageText}>Permission</Text>
                    <Switch
                        style={styles.switch}
                        value={isPermissionEnabled}
                        onValueChange={(value) => setIsPermissionEnabled(value)}
                        trackColor={customSwitchStyles(isPermissionEnabled).trackColor}
                        thumbColor={customSwitchStyles(isPermissionEnabled).thumbColor}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.languageText}>Push Notification</Text>
                    <Switch
                        style={styles.switch}
                        value={isPushNotificationEnabled}
                        onValueChange={(value) => setIsPushNotificationEnabled(value)}
                        trackColor={customSwitchStyles(isPushNotificationEnabled).trackColor}
                        thumbColor={customSwitchStyles(isPushNotificationEnabled).thumbColor}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.languageText}>Dark Mode</Text>
                    <Switch
                        style={styles.switch}
                        value={isDarkModeEnabled}
                        onValueChange={(value) => setIsDarkModeEnabled(value)}
                        trackColor={customSwitchStyles(isDarkModeEnabled).trackColor}
                        thumbColor={customSwitchStyles(isDarkModeEnabled).thumbColor}
                    />
                </View>
            </View>

            <TouchableOpacity onPress={add}>
                <View style={styles.inputContainer}>
                    <Text style={styles.languageText}>Add Task</Text>
                    <Right style={styles.icon} size={20} name='right' />
                </View></TouchableOpacity>

            <TouchableOpacity onPress={side}>
                <View style={styles.inputContainer}>
                    <Text style={styles.languageText}>Side Menu</Text>
                    <Right style={styles.icon} size={20} name='right' />
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={Lang}>
                <View style={styles.inputContainer}>
                    <Text style={styles.languageText}>Language</Text>
                    <Right style={styles.icon} size={20} name='right' />
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.inputContainer}>
                    <Text style={styles.languageText}>About Application</Text>
                    <Right style={styles.icon} size={20} name='right' />
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default Settings;

const styles = StyleSheet.create({
    main: {
        backgroundColor: "white",
        padding: 30,
        height: "100%"
    },
    headerContainer: {
        top: 10,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    head: {
        fontSize: 30,
        color: "black",
        marginLeft: 20,
        left: 70
    },
    icon: {
        color: "grey",
        top: 3
    },
    inputContainer: {
        marginBottom: 30,
        height: 60,
        top: 40,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderWidth: 1,
        borderColor: "lightgrey",
        borderRadius: 15,
        padding: 10,
        backgroundColor: "white",
    },
    languageText: {
        fontSize: 18,
        color: "black",
    },
});