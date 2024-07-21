import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Right from 'react-native-vector-icons/AntDesign';
import Angle from 'react-native-vector-icons/AntDesign';
import Time from 'react-native-vector-icons/Octicons';
import Square from 'react-native-vector-icons/AntDesign';
import Profiles from '../assets/man.webp';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {

    const navigation = useNavigation();
    const search = () => {
        navigation.navigate('Search')
    };
    const team = () => {
        navigation.navigate('CreateTeam')
    };
    const Task = () => {
        navigation.navigate('TodayTask')
    };
    const edit = () => {
        navigation.navigate('EditProfile')
    };
    const set = () => {
        navigation.navigate('Settings')
    };

    return (
        <View style={styles.main}>
            <View style={styles.headerContainer}>
                <TouchableOpacity>
                    <Angle style={styles.icon} size={36} name='leftcircleo' />
                </TouchableOpacity>
                <Text style={styles.head}>Profile</Text>
            </View>

            <View style={styles.profileContainer}>
                <Image style={styles.profileImage} source={Profiles} />
                <View style={styles.profileTextContainer}>
                    <Text style={styles.userName}>User Name</Text>
                    <Text style={styles.userEmail}>user@mail.com</Text>
                    <TouchableOpacity onPress={edit}>
                        <Text style={styles.edit}>Edit</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.point}>
                <View style={styles.subpoint}>
                    <Time name='clock' size={25} color="black" />
                    <Text style={{ color: "black", fontSize: 25 }}>5</Text>
                    <Text style={{ color: "grey" }}>On Going</Text>
                </View>

                <View style={styles.verticalLine} />

                <View style={styles.subpoint}>
                    <Square name='checksquareo' size={25} color="black" />
                    <Text style={{ color: "black", fontSize: 25 }}>25</Text>
                    <Text style={{ color: "grey" }}>Total Complete</Text>
                </View>
            </View>

            <TouchableOpacity onPress={search}>
                <View style={styles.inputContainer}>
                    <Text style={styles.languageText}>Search</Text>
                    <Right style={styles.icon} size={20} name='right' />
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={team}>
                <View style={styles.inputContainer}>
                    <Text style={styles.languageText}>Create Team</Text>
                    <Right style={styles.icon} size={20} name='right' />
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={set}>
                <View style={styles.inputContainer}>
                    <Text style={styles.languageText}>Settings</Text>
                    <Right style={styles.icon} size={20} name='right' />
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={Task}>
                <View style={styles.inputContainer}>
                    <Text style={styles.languageText}>My Task</Text>
                    <Right style={styles.icon} size={20} name='right' />
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default Profile;

const styles = StyleSheet.create({
    main: {
        height: "100%",
        backgroundColor: "white",
        padding: 20
    },
    headerContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },
    head: {
        fontSize: 31,
        color: "black",
        marginLeft: 20,
        left: 70
    },
    icon: {
        color: "grey",
        top: 3
    },
    profileContainer: {
        alignItems: 'center',
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 80
    },
    profileTextContainer: {
        alignItems: 'center'
    },
    userName: {
        color: 'black',
        fontSize: 25,
        fontWeight: '800'
    },
    userEmail: {
        color: 'grey',
        fontSize: 20
    },
    edit: {
        top: 5,
        width: 60,
        color: 'black',
        padding: 5,
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 3,
        borderColor: '#756EF3',
        textAlign: 'center',
        alignItems: 'center',
        fontSize: 15
    },
    point: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    subpoint: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    verticalLine: {
        borderWidth: 1,
        borderColor: "grey",
        borderStyle: "dashed",
        height: '100%',
    },
    inputContainer: {
        marginBottom: 15,
        height: 60,
        top: 25,
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
        fontWeight: "700",
        color: "black",
    },
});