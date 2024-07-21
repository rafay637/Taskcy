import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, ActivityIndicator, Alert } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
    const [inputFocused, setInputFocused] = useState({ name: false, email: false, password: false });
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    // if (name === '' || email === '' || password === '') {
    //     Alert.alert('Error', 'All fields are required.');
    //     return;
    // }

    // setLoading(true);

    const userData = {
        name,
        email,
        password,
    };

    axios
        .post("http://192.168.1.133:2000/register", userData)
        .then(res => {
            setLoading(false);
            console.log(res.data);
            navigation.navigate('Home');
        })
        .catch(error => {
            setLoading(false);
            if (error.response) {
                console.error('Server responded with non-2xx status:', error.response.data);
            } else if (error.request) {
                console.error('No response received:', error.request);
            } else {
                console.error('Error setting up the request:', error.message);
            }
        });

    const handleSubmit = () => {
        if (name && email && password) {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                navigation.navigate('Main');
            }, 2000);
        } else {
            Alert.alert('Error', 'Please fill in all fields.');
        }
    };

    const goBack = () => {
        navigation.navigate('SignIn');
    };

    return (
        <View style={styles.main}>
            <View>
                <Text style={styles.sign}>Sign Up</Text>
                <TouchableOpacity onPress={goBack}>
                    <Icon name="leftcircleo" size={33} style={styles.arrow} />
                </TouchableOpacity>
            </View>

            <View>
                <Text style={styles.back}>Create Account</Text>
            </View>

            <View>
                <Text style={styles.text}>Please Enter your Information and</Text>
            </View>

            <View>
                <Text style={styles.text}>create your account</Text>
            </View>

            <View>
                <TextInput
                    placeholder="Syed Rafay"
                    placeholderTextColor={'grey'}
                    style={[
                        styles.input,
                        { borderColor: inputFocused.name ? '#756EF3' : 'lightgrey' },
                    ]}
                    onFocus={() => setInputFocused({ ...inputFocused, name: true })}
                    onBlur={() => setInputFocused({ ...inputFocused, name: false })}
                    onChangeText={setName}
                    value={name}
                />
            </View>

            <View style={{ top: 10 }}>
                <TextInput
                    placeholder="Enter your mail"
                    placeholderTextColor={'grey'}
                    style={[
                        styles.input,
                        { borderColor: inputFocused.email ? '#756EF3' : 'lightgrey' },
                    ]}
                    onFocus={() => setInputFocused({ ...inputFocused, email: true })}
                    onBlur={() => setInputFocused({ ...inputFocused, email: false })}
                    onChangeText={setEmail}
                    value={email}
                />
            </View>

            <View style={{ top: 10 }}>
                <TextInput
                    placeholder="Enter your password"
                    placeholderTextColor={'grey'}
                    style={[
                        styles.input,
                        { borderColor: inputFocused.password ? '#756EF3' : 'lightgrey' },
                    ]}
                    onFocus={() => setInputFocused({ ...inputFocused, password: true })}
                    onBlur={() => setInputFocused({ ...inputFocused, password: false })}
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry
                />
            </View>

            <View style={{ alignItems: "center" }}>
                <TouchableOpacity style={styles.button} onPress={handleSubmit} disabled={loading}>
                    {loading ? (<ActivityIndicator color="white" size={35} />
                    ) : (
                        <Text style={styles.buttonText}>Sign Up</Text>
                    )}
                </TouchableOpacity>
            </View>

            <View style={{ top: 150, alignItems: "center" }}>
                <Text style={styles.pass}>Signup With</Text>
            </View>

            <View style={styles.socialIcons}>
                <Image source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/mac-os.png' }} style={styles.icon} />
                <Image source={{ uri: 'https://img.icons8.com/color/48/000000/google-logo.png' }} style={styles.icon} />
            </View>

            <View style={{ top: 200, left: 90, flexDirection: "row" }}>
                <Text style={styles.pass3}>Have an Account?</Text>
                <TouchableOpacity onPress={goBack}>
                    <Text style={styles.pass2}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SignUp;

const styles = StyleSheet.create({
    main: {
        backgroundColor: "white",
        height: "100%",
    },
    sign: {
        textAlign: "center",
        top: 50,
        fontSize: 30,
        color: "black",
    },
    arrow: {
        color: "grey",
        left: 20,
        top: 20,
    },
    back: {
        fontSize: 35,
        top: 60,
        left: 20,
        color: "black",
        fontWeight: "800",
    },
    text: {
        fontSize: 20,
        top: 75,
        left: 20,
        color: "grey",
    },
    input: {
        paddingLeft: 10,
        top: 96,
        fontSize: 20,
        left: 8,
        margin: 10,
        width: '90%',
        color: 'black',
        borderWidth: 1,
        borderRadius: 20,
    },
    pass: {
        color: "black",
        top: 9,
        fontSize: 20,
    },
    pass2: {
        color: "#756EF3",
        fontSize: 20,
        marginLeft: 5,
    },
    pass3: {
        color: "black",
        fontSize: 20,
        marginRight: 5,
    },
    button: {
        top: 115,
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
    socialIcons: {
        flexDirection: 'row',
        top: 180,
        justifyContent: "center"
    },
    icon: {
        width: 50,
        height: 50,
        marginHorizontal: 20
    },
});