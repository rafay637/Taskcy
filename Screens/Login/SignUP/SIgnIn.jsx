import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, ActivityIndicator, Alert } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const SignIn = () => {
    const [inputFocused, setInputFocused] = useState({ email: false, password: false });
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    const handleSignIn = () => {
        if (!email || !password) {
            Alert.alert('Error', 'Please fill in all fields');
        } else {
            setLoading(true);
            // Simulate a network request
            setTimeout(() => {
                setLoading(false);
                navigation.navigate('Main');
            }, 2000);
        }
    };

    const goBack = () => {
        navigation.navigate('FourthPage');
    }

    const signUp = () => {
        navigation.navigate('SignUp');
    }

    // for go back screen

    return (
        <View style={styles.main}>
            <View>
                <Text style={styles.sign}>Sign In</Text>
                <TouchableOpacity onPress={goBack}>
                    <Icon name="leftcircleo" size={33} style={styles.arrow} />
                </TouchableOpacity>
            </View>

            <View>
                <Text style={styles.back}>Welcome Back</Text>
            </View>

            <View>
                <Text style={styles.text}>Please Enter your email address</Text>
            </View>

            <View>
                <Text style={styles.text}>and password for Login</Text>
            </View>

            <View>
                <TextInput
                    placeholder="abc@mail.com"
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
                    placeholder="Enter Password"
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

            <TouchableOpacity>
                <View style={{ top: 100, alignItems: "flex-end", right: 25 }}>
                    <Text style={styles.pass}>Forgot Password?</Text>
                </View>
            </TouchableOpacity>

            <View style={{ alignItems: "center" }}>
                <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                    {loading ? (
                        <ActivityIndicator color="#fff" size={35} />
                    ) : (
                        <Text style={styles.buttonText}>Sign In</Text>
                    )}
                </TouchableOpacity>
            </View>

            <View style={{ top: 170, alignItems: "center" }}>
                <Text style={styles.pass}>Signin With</Text>
            </View>

            <View style={styles.socialIcons}>
                <Image source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/mac-os.png' }} style={styles.icon} />
                <Image source={{ uri: 'https://img.icons8.com/color/48/000000/google-logo.png' }} style={styles.icon} />
            </View>

            <View style={{ top: 220, left: 90, flexDirection: "row" }}>
                <Text style={styles.pass3}>Not register yet?</Text>
                <TouchableOpacity onPress={signUp}>
                    <Text style={styles.pass2}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SignIn;

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
        fontWeight: "700"
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
        top: 140,
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
        top: 200,
        justifyContent: "center",
    },
    icon: {
        width: 50,
        height: 50,
        marginHorizontal: 20
    },
});
