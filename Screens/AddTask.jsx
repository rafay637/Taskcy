import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Angle from 'react-native-vector-icons/AntDesign';
import User from 'react-native-vector-icons/FontAwesome';
import Plus from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const AddTask = () => {
    const [name, setName] = useState('');
    const [isFocused, setIsFocused] = useState({});
    const [activeTab, setActiveTab] = useState(null);
    const navigation = useNavigation();

    const goBack = () => {
        navigation.navigate('Settings')
    }

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

    const handleTabPress = (tab) => {
        setActiveTab(tab);
    };

    return (
        <View style={styles.main}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={goBack}>
                    <Angle style={styles.icon} size={36} name='leftcircleo' />
                </TouchableOpacity>
                <Text style={styles.head}>Add Task</Text>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Task Name</Text>
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
                <Text style={styles.label}>Team Member</Text>

                <View style={styles.userHandle}>
                    <View style={styles.userContainer}>
                        <User name='user-circle-o' size={40} style={styles.userIcon} />
                        <Text style={styles.userName}>Rafay</Text>
                    </View>

                    <View style={styles.userContainer}>
                        <User name='user-circle-o' size={40} style={styles.userIcon} />
                        <Text style={styles.userName}>Yasir</Text>
                    </View>

                    <View style={styles.userContainer}>
                        <User name='user-circle-o' size={40} style={styles.userIcon} />
                        <Text style={styles.userName}>Raheel</Text>
                    </View>

                    <View style={styles.userContainer}>
                        <User name='user-circle-o' size={40} style={styles.userIcon} />
                        <Text style={styles.userName}>Hunain</Text>
                    </View>

                    <View style={styles.userContainer}>
                        <Plus name='pluscircleo' size={45} style={{ color: "#756EF3" }} />
                        <Text style={styles.userName1}>add</Text>
                    </View>
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Date</Text>
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

                <View style={styles.inputContainer1}>
                    <View style={styles.inputVerticalContainer}>
                        <Text style={styles.label}>Start Time</Text>
                        <TextInput
                            style={[
                                styles.input1,
                                { borderColor: isFocused.name ? "#756EF3" : "lightgrey" }
                            ]}
                            onFocus={() => handleFocus('name')}
                            onBlur={() => handleBlur('name')}
                            onChangeText={handleNameChange}
                            value={name}
                        />
                    </View>

                    <View style={styles.inputVerticalContainer}>
                        <Text style={styles.label}>End Time</Text>
                        <TextInput
                            style={[
                                styles.input1,
                                { borderColor: isFocused.name ? "#756EF3" : "lightgrey" }
                            ]}
                            onFocus={() => handleFocus('name')}
                            onBlur={() => handleBlur('name')}
                            onChangeText={handleNameChange}
                            value={name}
                        />
                    </View>
                </View>

                <Text style={styles.label}>Board</Text>
            </View>


            <View style={styles.tabContainer}>
                <TouchableOpacity
                    style={[
                        styles.tab,
                        activeTab === 'Urgent' && styles.activeTab
                    ]}
                    onPress={() => handleTabPress('Urgent')}
                >
                    <Text style={[
                        styles.tabText,
                        activeTab === 'Urgent' && styles.activeTabText
                    ]}>Urgent</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                        styles.tab,
                        activeTab === 'Running' && styles.activeTab
                    ]}
                    onPress={() => handleTabPress('Running')}
                >
                    <Text style={[
                        styles.tabText,
                        activeTab === 'Running' && styles.activeTabText
                    ]}>Running</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                        styles.tab,
                        activeTab === 'ongoing' && styles.activeTab
                    ]}
                    onPress={() => handleTabPress('ongoing')}
                >
                    <Text style={[
                        styles.tabText,
                        activeTab === 'ongoing' && styles.activeTabText
                    ]}>ongoing</Text>
                </TouchableOpacity>
            </View>

            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        height: "100%",
        backgroundColor: "white",
        padding: 20,
    },
    headerContainer: {
        marginTop: 15,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 30,
    },
    head: {
        fontSize: 31,
        color: "black",
        left: 80
    },
    icon: {
        color: "grey",
        top: 3
    },
    userName: {
        color: 'black',
        fontSize: 16,
        marginTop: 5,
        textAlign: 'center'
    },
    userName1: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center'
    },
    userEmail: {
        color: 'grey',
        fontSize: 20
    },
    inputContainer: {
        marginTop: 30,
    },
    inputContainer1: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 30,
        marginBottom: 30,
    },
    inputVerticalContainer: {
        flexDirection: "column",
        alignItems: "flex-start"
    },
    label: {
        left: 3,
        fontSize: 18,
        color: "grey",
        marginBottom: 10,
    },
    input: {
        height: 45,
        borderWidth: 1,
        borderRadius: 15,
        paddingHorizontal: 10,
        color: "black",
        width: "100%"
    },
    input1: {
        height: 45,
        borderWidth: 1,
        borderRadius: 15,
        paddingHorizontal: 10,
        color: "black",
        width: 150
    },
    userHandle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    userContainer: {
        alignItems: 'center'
    },
    userIcon: {
        color: "black",
    },
    tabContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    tab: {
        padding: 7,
        borderWidth: 1,
        borderColor: "lightgrey",
        borderRadius: 10,
        width: "30%",
        alignItems: "center",
    },
    activeTab: {
        borderColor: "#756ef3",
        borderRadius: 10
    },
    tabText: {
        color: "grey",
        fontSize: 17
    },
    activeTabText: {
        color: "black",
        fontWeight: "900"
    },
    button: {
        marginTop: 40,
        height: 60,
        width: 250,
        backgroundColor: '#7064EB',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 17,
        shadowColor: '#756EF3',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 9,
    },
    buttonText: {
        color: 'white',
        fontSize: 22,
        fontWeight: "900",
        textAlign: 'center',
    },
});

export default AddTask;