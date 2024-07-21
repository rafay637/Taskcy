import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const SecondPage = () => {

    const navigation = useNavigation();
    const handleSkip = () => {
        navigation.navigate('SignIn');
    };
    const handleNext = () => {
        navigation.navigate('ThirdPage');
    };

    return (
        <View>
            <View>
                <Image source={require('../assets/image2.jpeg')} style={styles.img} />
            </View>

            <View style={styles.container}>
                <View style={{ top: 15 }}>
                    <Text style={styles.heading01}>Task Management</Text>
                </View>

                <View style={{ top: 20 }}>
                    <Text style={styles.heading02}>Lets create a <Text style={{ color: '#6756FF' }}>Space</Text> for your workflows</Text>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
                        <Text style={styles.buttonText}>Skip</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
                        <Text style={styles.nextButtonText}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        width: '100%',
        height: 420
    },
    container: {
        backgroundColor: 'white',
        height: '100%',
    },
    heading01: {
        top: 9,
        color: '#6756FF',
        fontSize: 23,
        fontWeight: '600',
        marginLeft: '7%',
        marginBottom: 5,
    },
    heading02: {
        color: 'black',
        fontWeight: '500',
        fontSize: 45,
        textAlign: 'left',
        marginLeft: 29
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 120,
        marginHorizontal: 35,
    },
    skipButton: {
        alignItems: 'flex-start',
        marginTop: 8
    },
    nextButton: {
        backgroundColor: "#756EF3",
        width: 150,
        borderRadius: 100,
        height: 50,
        justifyContent: 'center',
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '400',
        color: 'black'
    },
    nextButtonText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '400',
        color: 'white'
    }
});

export default SecondPage;
