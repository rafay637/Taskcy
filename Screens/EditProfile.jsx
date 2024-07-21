import { Image, StyleSheet, Text, TouchableOpacity, View, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';
import Angle from 'react-native-vector-icons/AntDesign';
import Profile from '../assets/man.webp';
import Cam from 'react-native-vector-icons/EvilIcons';
import { useNavigation } from '@react-navigation/native';

const EditProfile = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [number, setNumber] = useState('');
    const [isFocused, setIsFocused] = useState({});
    const navigation = useNavigation();

    const handleFocus = (field) => {
        setIsFocused({ ...isFocused, [field]: true });
    };
    const handleBlur = (field) => {
        setIsFocused({ ...isFocused, [field]: false });
    };
    const handleNameChange = (text) => {
        if (/^[a-zA-Z\s]*$/.test(text)) {
            setName(text);
        } else {
            Alert.alert('Invalid Name', 'Name should contain only letters and spaces.');
        }
    };
    const handleEmailChange = (text) => {
        if (text.includes('@')) {
            setEmail(text);
        } else {
            Alert.alert('Invalid Email', 'Email should contain "@" symbol.');
        }
    };
    const handleUsernameChange = (text) => {
        if (/^[a-zA-Z0-9_]*$/.test(text)) {
            setUsername(text);
        } else {
            Alert.alert('Invalid Username', 'Username should contain only letters, numbers, and underscores.');
        }
    };
    const handleNumberChange = (text) => {
        if (/^\d*$/.test(text)) {
            setNumber(text);
        } else {
            Alert.alert('Invalid Number', 'Number should contain only digits.');
        }
    };
    const goBack = () => {
        navigation.navigate('Profile')
    };

    return (
        <View style={styles.main}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={goBack}>
                    <Angle style={styles.icon} size={35} name='leftcircleo' />
                </TouchableOpacity>
                <Text style={styles.head}>Edit Profile</Text>
                <TouchableOpacity onPress={goBack}>
                    <Text style={styles.btnText}>Save</Text>
                </TouchableOpacity>
            </View>

            <View style={{ alignItems: "center", marginTop: 40 }}>
                <Image style={{ width: 170, height: 170, borderRadius: 85 }} source={Profile} />
                <View style={styles.cameraContainer}>
                    <Cam name='camera' size={30} style={styles.camera} />
                </View>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Name</Text>
                <TextInput
                    style={[
                        styles.input,
                        { borderColor: isFocused.name ? "#756EF3" : "lightgrey" }
                    ]}
                    onFocus={() => handleFocus('name')}
                    onBlur={() => handleBlur('name')}
                    onChangeText={handleNameChange}
                    value={name}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={[
                        styles.input,
                        { borderColor: isFocused.email ? "#756EF3" : "lightgrey" }
                    ]}
                    onFocus={() => handleFocus('email')}
                    onBlur={() => handleBlur('email')}
                    onChangeText={handleEmailChange}
                    value={email}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>User Name</Text>
                <TextInput
                    style={[
                        styles.input,
                        { borderColor: isFocused.username ? "#756EF3" : "lightgrey" }
                    ]}
                    onFocus={() => handleFocus('username')}
                    onBlur={() => handleBlur('username')}
                    onChangeText={handleUsernameChange}
                    value={username}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Number</Text>
                <TextInput
                    style={[
                        styles.input,
                        { borderColor: isFocused.number ? "#756EF3" : "lightgrey" }
                    ]}
                    onFocus={() => handleFocus('number')}
                    onBlur={() => handleBlur('number')}
                    onChangeText={handleNumberChange}
                    value={number}
                    keyboardType="numeric"
                />
            </View>
        </View>
    );
}

export default EditProfile;

const styles = StyleSheet.create({
    main: {
        height: "100%",
        backgroundColor: "white",
        padding: 30
    },
    headerContainer: {
        top: 10,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
        justifyContent: "space-between"
    },
    head: {
        fontSize: 30,
        color: "black",
    },
    icon: {
        color: "grey",
        top: 3
    },
    btnText: {
        color: "#756EF3",
        fontSize: 22,
        fontWeight: "800",
        backgroundColor: "white"
    },
    cameraContainer: {
        position: 'absolute',
        bottom: 10,
        right: 75,
        backgroundColor: 'black',
        borderRadius: 25,
        borderColor: "white",
        borderWidth: 1,
        padding: 8
    },
    camera: {
        color: "white"
    },
    inputContainer: {
        marginTop: 20,
    },
    label: {
        fontSize: 18,
        color: "grey",
        marginBottom: 10,
    },
    input: {
        height: 45,
        borderWidth: 1,
        borderRadius: 15,
        paddingHorizontal: 10,
        color: "black"
    },
});