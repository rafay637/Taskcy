import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Angle from 'react-native-vector-icons/AntDesign';
import Bar from 'react-native-vector-icons/Feather';
import Users from 'react-native-vector-icons/FontAwesome6';
import Plus from 'react-native-vector-icons/AntDesign';

const Projects = () => {

    const [isFocused, setIsFocused] = useState(false);
    const [activeTab, setActiveTab] = useState(null);
    const handleTabPress = (tab) => {
        setActiveTab(tab);
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Angle style={styles.icon} size={30} name='leftcircleo' />
                <Text style={styles.head}>Projects</Text>
                <Plus name='pluscircleo' style={styles.icon} size={30} />
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
                        activeTab === 'Favourites' && styles.activeTab
                    ]}
                    onPress={() => handleTabPress('Favourites')}
                >
                    <Text style={[
                        styles.tabText,
                        activeTab === 'Favourites' && styles.activeTabText
                    ]}>Favourites</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                        styles.tab,
                        activeTab === 'Recents' && styles.activeTab
                    ]}
                    onPress={() => handleTabPress('Recents')}
                >
                    <Text style={[
                        styles.tabText,
                        activeTab === 'Recents' && styles.activeTabText
                    ]}>Recents</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                        styles.tab,
                        activeTab === 'All' && styles.activeTab
                    ]}
                    onPress={() => handleTabPress('All')}
                >
                    <Text style={[
                        styles.tabText,
                        activeTab === 'All' && styles.activeTabText
                    ]}>All</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <Text style={styles.cardTitle}>Unity Dashboard ☺</Text>
                    <Text style={styles.progressText}>45/80</Text>
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
                    <Text style={styles.cardTitle}>Ui8 Platfrom 🤠</Text>
                    <Text style={styles.progressText1}>50/80</Text>
                </View>
                <Text style={styles.cardSubtitle}>Architecture</Text>
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

            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <Text style={styles.cardTitle}>Cubbles 🤓</Text>
                    <Text style={styles.progressText2}>75/80</Text>
                </View>
                <Text style={styles.cardSubtitle}>Chilling</Text>
                <View style={styles.progress}>
                    <View style={styles.profile}>
                        <Users name='users' size={33} style={styles.users} />
                    </View>
                    <View style={styles.progressBarWrapper}>
                        <View style={styles.progressBarBackground}>
                            <View style={styles.progressBarFill2} />
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
        padding: 5,
        borderWidth: 1,
        borderColor: "transparent",
        width: "30%",
        alignItems: "center"
    },
    activeTab: {
        borderColor: "#756ef3",
        borderRadius: 20
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
        marginBottom: 20
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
        width: '45%',
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
        width: '50%',
    },
    progressText1: {
        fontSize: 15,
        color: 'black',
        borderColor: "#F7DC82",
        borderWidth: 1,
        borderRadius: 15,
        paddingHorizontal: 8
    },
    progressBarFill2: {
        backgroundColor: '#75A7FE',
        height: '100%',
        width: '75%',
    },
    progressText2: {
        fontSize: 15,
        color: 'black',
        borderColor: "#75A7FE",
        borderWidth: 1,
        borderRadius: 15,
        paddingHorizontal: 8
    },
});

export default Projects;