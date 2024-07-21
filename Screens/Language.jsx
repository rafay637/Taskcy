import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import Angle from 'react-native-vector-icons/AntDesign';
import Circle from 'react-native-vector-icons/Entypo';
import Hircle from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const Language = () => {
    
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const languages = ['English', 'Spanish', 'German', 'Dutch', 'Chinese'];
    const navigation = useNavigation();

    const goBack = () => {
        navigation.navigate('Settings')
    };

    return (
        <View style={styles.main}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={goBack}>
                    <Angle style={styles.icon} size={30} name='leftcircleo' />
                </TouchableOpacity>
                <Text style={styles.head}>Language</Text>
            </View>

            {languages.map(language => (
                <TouchableOpacity
                    key={language}
                    style={styles.inputContainer}
                    onPress={() => setSelectedLanguage(language)}
                >
                    <View style={styles.languageContainer}>
                        <Text style={styles.languageText}>{language}</Text>
                        {selectedLanguage === language ? (
                            <Hircle name='checkcircle' style={styles.icon} size={20} />
                        ) : (
                            <Circle name='circle' style={styles.icon} size={20} />
                        )}
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default Language;

const styles = StyleSheet.create({
    main: {
        backgroundColor: "white",
        padding: 30,
        height: "100%",
    },
    headerContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 70,
        top: 20
    },
    head: {
        fontSize: 30,
        color: "black",
        marginLeft: 75,
    },
    icon: {
        color: "grey",
    },
    inputContainer: {
        marginBottom: 30,
        padding: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderWidth: 1,
        borderColor: "lightgrey",
        borderRadius: 15,
        backgroundColor: "white",
    },
    languageContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
    },
    languageText: {
        fontSize: 20,
        color: "black",
    },
});