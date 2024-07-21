import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Angle from 'react-native-vector-icons/AntDesign';
import Bar from 'react-native-vector-icons/Feather';
import Users from 'react-native-vector-icons/FontAwesome6'
import { useNavigation } from '@react-navigation/native';

const Search = () => {
    const [isFocused, setIsFocused] = useState(false);
    const [activeTab, setActiveTab] = useState(null);
    const navigation = useNavigation();

    const goBack = () => {
        navigation.navigate('Profile')
    };
    const handleTabPress = (tab) => {
        setActiveTab(tab);
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={goBack}>
                    <Angle style={styles.icon} size={30} name='leftcircleo' />
                </TouchableOpacity>
                <Text style={styles.head}>Search</Text>
            </View>

            <View style={[
                styles.searchContainer,
                isFocused && { borderColor: "#756ef3" }
            ]}>
                <Bar name="search" size={30} color="grey" style={styles.searchIcon} />
                <TextInput
                    placeholder="Search"
                    placeholderTextColor={'grey'}
                    style={styles.input}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />
            </View>

            <View style={styles.tabContainer}>
                <TouchableOpacity
                    style={[
                        styles.tab,
                        activeTab === 'Tasks' && styles.activeTab
                    ]}
                    onPress={() => handleTabPress('Tasks')}
                >
                    <Text style={[
                        styles.tabText,
                        activeTab === 'Tasks' && styles.activeTabText
                    ]}>Tasks</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.tab,
                        activeTab === 'File' && styles.activeTab
                    ]}
                    onPress={() => handleTabPress('File')}
                >
                    <Text style={[
                        styles.tabText,
                        activeTab === 'File' && styles.activeTabText
                    ]}>File</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <Text style={styles.cardTitle}>Dashboard Unity</Text>
                    <Text style={styles.progressText}>30/80</Text>
                </View>
                <Text style={styles.cardSubtitle}>Design</Text>
                <View style={styles.progress}>
                    <View style={styles.profile}>
                        <Users name='users' size={33} style={styles.users} />
                    </View>
                    <View style={styles.progressBarWrapper}>
                        <View style={styles.progressBarBackground}>
                            <View style={styles.progressBarFill} />
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <Text style={styles.cardTitle}>Dashboard Instagram</Text>
                    <Text style={styles.progressText1}>50/80</Text>
                </View>
                <Text style={styles.cardSubtitle}>Marketing</Text>
                <View style={styles.progress}>
                    <View style={styles.profile}>
                        <Users name='users' size={33} style={styles.users} />
                    </View>
                    <View style={styles.progressBarWrapper}>
                        <View style={styles.progressBarBackground}>
                            <View style={styles.progressBarFill1} />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
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
    searchContainer: {
        top: 40,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: "lightgrey",
        borderRadius: 20,
        paddingLeft: 10,
        width: "100%"
    },
    searchIcon: {
        padding: 10,
        color: "gray"
    },
    input: {
        fontSize: 21,
        color: 'black',
        padding: 10,
        flex: 1
    },
    tabContainer: {
        flexDirection: "row",
        marginTop: 70
    },
    tab: {
        padding: 10,
        borderWidth: 1,
        borderColor: "transparent",
        width: "25%",
        alignItems: "center"
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
    card: {
        backgroundColor: 'white',
        borderColor: "lightgrey",
        borderWidth: 1,
        borderRadius: 20,
        padding: 16,
        width: "100%",
        top: 30,
        marginBottom: 30
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    cardSubtitle: {
        fontSize: 16,
        marginBottom: 10,
        color: 'grey',
    },
    progress: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    progressBarWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    progressBarBackground: {
        backgroundColor: '#F2F2F2',
        height: 8,
        width: '80%',
        borderRadius: 4,
        overflow: 'hidden',
    },
    progressBarFill: {
        backgroundColor: '#99D869',
        height: '100%',
        width: '40%',
    },
    progressText: {
        fontSize: 15,
        color: 'black',
        borderColor: "#99D869",
        borderWidth: 1,
        borderRadius: 15,
        paddingHorizontal: 8
    },
    profile: {
        flexDirection: 'row',
        paddingRight: 10
    },
    profileImage: {
        width: 40,
        height: 40,
    },
    users: {
        color: "grey"
    },
    progressBarFill1: {
        backgroundColor: '#F7DC82',
        height: '100%',
        width: '55%',
    },
    progressText1: {
        fontSize: 15,
        color: 'black',
        borderColor: "#F7DC82",
        borderWidth: 1,
        borderRadius: 15,
        paddingHorizontal: 8
    },
});

export default Search;