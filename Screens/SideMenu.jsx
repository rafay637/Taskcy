import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert, ActivityIndicator } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Profile from '../assets/man.webp';
import { useNavigation } from '@react-navigation/native';

const SideMenu = () => {

    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    const handle = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigation.navigate('SignIn');
        }, 2000);
    };
    const goBack = () => {
        navigation.navigate('Settings')
    };
    const view = () => {
        navigation.navigate('Profile')
    };

    return (
        <View
            style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={goBack}>
                    <Entypo style={{ fontSize: 50, textAlign: 'left', color: 'black', left: 7 }} name="cross" />
                </TouchableOpacity>
            </View>
            <View style={styles.form}>
                <View
                    style={{ alignItems: 'center' }} >
                    <Image
                        style={{ width: 150, height: 150, borderRadius: 80 }}
                        source={Profile}
                    />
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ color: 'black', fontSize: 30, fontWeight: 800 }}>User Name</Text>
                        <Text style={{ color: 'grey', fontSize: 20 }}>user@mail.com</Text>
                        <TouchableOpacity onPress={view}>
                            <Text style={{
                                color: 'black',
                                padding: 8,
                                borderRadius: 10,
                                borderWidth: 1,
                                marginTop: 3,
                                borderColor: '#756EF3',
                                textAlign: 'center',
                                alignItems: 'center'
                            }}>
                                View Profile
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ width: "100%", top: 10 }}>
                    <Text style={{ fontSize: 25, fontWeight: 700, color: '#002055', marginLeft: 20, }}>Workspace</Text>
                    <View
                        style={styles.Input} >
                        <Text style={{ color: '#002055', fontSize: 20, fontWeight: 700, top: 4 }}>UI Design</Text>
                        <TouchableOpacity>
                            <Text style={{
                                padding: 8,
                                color: '#756EF3',
                                borderRadius: 10,
                                borderWidth: 1,
                                // marginTop: 3,
                                borderColor: '#756EF3',
                                textAlign: 'center',
                                width: 70
                                // alignItems: 'center'
                            }}>
                                Invite
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ top: 15 }}>
                        <View style={{}}>
                            <Text style={{ fontSize: 25, fontWeight: 700, color: '#002055', marginLeft: 20, }}>Manage</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <View
                                style={styles.Input2} >
                                <Text style={{ color: 'black', fontSize: 18, fontWeight: 700 }}>
                                    Team
                                </Text>
                                <Text style={styles.Number}>6</Text>
                            </View>
                            <View
                                style={styles.Input2} >
                                <Text style={{ color: '#002055', fontSize: 18, fontWeight: 700 }}>
                                    Label
                                </Text>
                                <Text style={styles.Number}>4</Text>

                            </View>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <View
                                style={styles.Input2} >
                                <Text style={{ color: '#002055', fontSize: 18, fontWeight: 700 }}>
                                    Task
                                </Text>
                                <Text style={styles.Number}>8</Text>
                            </View>
                            <View
                                style={styles.Input2} >
                                <Text style={{ color: 'black', fontSize: 18, fontWeight: 700 }}>
                                    Member
                                </Text>
                                <Text style={styles.Number}>7</Text>
                            </View>
                        </View>
                        <View style={{ alignItems: "center" }}>
                            <TouchableOpacity style={styles.button} onPress={handle}>
                                {loading ? (
                                    <ActivityIndicator color="#fff" size={35} />
                                ) : (
                                    <Text style={styles.buttonText}>Log Out</Text>
                                )}
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
        color: '#002055',
    },
    Text: {
        color: '#002055',
        fontSize: 40,
        fontWeight: '800',
        textAlign: 'center',
    },
    Input: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        marginTop: 15,
        fontSize: 20,
        margin: 10,
        width: '94%',
        borderWidth: 1,
        borderRadius: 20,
        borderColor: 'lightgrey'
    },
    Input2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        marginTop: 15,
        margin: 10,
        width: '45%',
        borderWidth: 1,
        borderRadius: 20,
        borderColor: 'lightgrey',
    },
    Number: {
        color: "black",
        borderColor: "lightgrey",
        borderWidth: 1,
        borderRadius: 8,
        width: 40,
        height: 25,
        textAlign: "center",
        paddingTop: 3
    },
    button: {
        top: 40,
        height: 55,
        width: 340,
        backgroundColor: '#7064EB',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        shadowColor: '#756EF3',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.95,
        shadowRadius: 4,
        elevation: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 23,
    },
});

export default SideMenu;