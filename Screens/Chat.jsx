import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Angle from 'react-native-vector-icons/AntDesign';
import Bar from 'react-native-vector-icons/Feather';
import User from 'react-native-vector-icons/FontAwesome';
import Camera from 'react-native-vector-icons/Feather';

const Chat = () => {
    const [isFocused, setIsFocused] = useState(false);

    const renderActiveStatus = (status) => {
        if (status === 'Active now') {
            return (
                <View style={styles.activeStatusContainer}>
                    <Text style={styles.activeStatus}>{status}</Text>
                    <View style={styles.activeDot} />
                </View>
            );
        } else {
            return <Text style={styles.activeStatus}>{status}</Text>;
        }
    };

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 30 }}>
                <Angle style={styles.icon} size={40} name='leftcircleo' />
                <Text style={styles.head}>Chat</Text>
                <Icon style={styles.icon} size={40} name='pluscircleo' />
            </View>

            <View style={[styles.searchContainer, isFocused && { borderColor: '#756ef3' }]}>
                <Bar name="search" size={30} color="grey" style={styles.searchIcon} />
                <TextInput
                    placeholder="Search"
                    placeholderTextColor={'grey'}
                    style={styles.input}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />
            </View>

            <View style={{ top: 20 }}>
                <View style={styles.hub}>
                    <User name='user-circle-o' size={37} style={styles.profileIcon} />
                    <View style={styles.textContainer}>
                        <Text style={styles.profileName}>Rafay</Text>
                        {renderActiveStatus('Active now')}
                    </View>
                    <Camera name='camera' size={30} style={styles.cameraIcon} />
                </View>
                <View style={styles.line} />

                <View style={styles.hub}>
                    <User name='user-circle-o' size={37} style={styles.profileIcon} />
                    <View style={styles.textContainer}>
                        <Text style={styles.profileName}>Sohaib</Text>
                        {renderActiveStatus('Active 1h ago')}
                    </View>
                    <Camera name='camera' size={30} style={styles.cameraIcon} />
                </View>
                <View style={styles.line} />

                <View style={styles.hub}>
                    <User name='user-circle-o' size={37} style={styles.profileIcon} />
                    <View style={styles.textContainer}>
                        <Text style={styles.profileName}>Usman</Text>
                        {renderActiveStatus('Active 3d ago')}
                    </View>
                    <Camera name='camera' size={30} style={styles.cameraIcon} />
                </View>
                <View style={styles.line} />

                <View style={styles.hub}>
                    <User name='user-circle-o' size={37} style={styles.profileIcon} />
                    <View style={styles.textContainer}>
                        <Text style={styles.profileName}>Taha</Text>
                        {renderActiveStatus('Active now')}
                    </View>
                    <Camera name='camera' size={30} style={styles.cameraIcon} />
                </View>
                <View style={styles.line} />

                <View style={styles.hub}>
                    <User name='user-circle-o' size={37} style={styles.profileIcon} />
                    <View style={styles.textContainer}>
                        <Text style={styles.profileName}>Zafeer</Text>
                        {renderActiveStatus('Active 1m ago')}
                    </View>
                    <Camera name='camera' size={30} style={styles.cameraIcon} />
                </View>
                <View style={styles.line} />

                <View style={styles.hub}>
                    <User name='user-circle-o' size={37} style={styles.profileIcon} />
                    <View style={styles.textContainer}>
                        <Text style={styles.profileName}>Awais</Text>
                        {renderActiveStatus('Active 59m ago')}
                    </View>
                    <Camera name='camera' size={30} style={styles.cameraIcon} />
                </View>
            </View>
        </View>
    );
};

export default Chat;

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "white"
    },
    head: {
        fontSize: 30,
        color: "black"
    },
    icon: {
        color: "grey",
    },
    searchContainer: {
        top: 20,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: "lightgrey",
        borderRadius: 20,
        margin: 20,
        paddingLeft: 10,
    },
    searchIcon: {
        padding: 10,
        color: "gray"
    },
    input: {
        flex: 1,
        fontSize: 21,
        color: 'black',
        padding: 10,
    },
    hub: {
        flexDirection: "row",
        alignItems: "center",
        margin: 20,
    },
    profileIcon: {
        marginRight: 10,
        color: "black"
    },
    textContainer: {
        flex: 1,
        justifyContent: "center",
    },
    profileName: {
        fontSize: 18,
        color: "black",
    },
    activeStatusContainer: {
        flexDirection: "row",
        // alignItems: "center",
    },
    activeStatus: {
        fontSize: 14,
        color: "grey",
    },
    activeDot: {
        top:4,
        width: 10,
        height: 10,
        borderRadius: 8,
        backgroundColor: 'green',
        marginLeft: -83,
    },
    cameraIcon: {
        marginLeft: 10,
        color: "grey"
    },
    line: {
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 1,
        marginHorizontal: 20,
    },
});