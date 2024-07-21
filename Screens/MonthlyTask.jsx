import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import Angle from 'react-native-vector-icons/AntDesign';
import Pencil from 'react-native-vector-icons/MaterialCommunityIcons';
import Calendar from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const MonthlyTask = () => {

    const navigation = useNavigation();
    const goBack = () => {
        navigation.navigate('TodayTask')
    };

    return (
        <View style={styles.main}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={goBack}>
                    <Angle style={styles.icon} size={30} name='leftcircleo' />
                </TouchableOpacity>
                <Text style={styles.head}>Monthly Task</Text>
                <Pencil name='pencil-circle-outline' style={styles.icon} size={37} />
            </View>

            <View style={styles.headerContainer1}>
                <Text style={styles.head1}>July, 14 ✍</Text>
                <Calendar name='calendar-alt' style={styles.icon1} size={20} />
            </View>

            <View style={styles.t5}>
                <Text style={styles.tt}>15 tasks today</Text>
            </View>

            <ScrollView horizontal={true} style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
                <View style={styles.wow}>
                    <Text style={styles.text1}>11</Text>
                    <Text style={styles.text2}>Thu</Text>
                </View>

                <View style={styles.wow}>
                    <Text style={styles.text1}>12</Text>
                    <Text style={styles.text2}>Fri</Text>
                </View>

                <View style={[styles.wow1, styles.oBackground]}>
                    <Text style={[styles.text1, styles.tcolor]}>13</Text>
                    <Text style={[styles.text2, styles.tcolor]}>Sat</Text>
                </View>

                <View style={styles.wow}>
                    <Text style={styles.text1}>14</Text>
                    <Text style={styles.text2}>Sun</Text>
                </View>

                <View style={styles.wow}>
                    <Text style={styles.text1}>15</Text>
                    <Text style={styles.text2}>Mon</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        height: "100%",
        backgroundColor: "white",
        padding: 20,
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
    headerContainer1: {
        marginTop: 40,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
        justifyContent: "space-between"
    },
    head1: {
        fontSize: 30,
        fontWeight: "900",
        color: "black",
    },
    icon1: {
        backgroundColor: "#756ef3",
        color: "white",
        top: 3,
        padding: 15,
        borderRadius: 30
    },
    t5: {
        marginTop: -10
    },
    tt: {
        color: "grey",
        fontSize: 20
    },
    scrollView: {
        marginTop: 30,
    },
    scrollContent: {
        flexDirection: 'row',
    },
    wow: {
        borderColor: "lightgrey",
        borderWidth: 1,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        width: 80,
        height: "25%",
        marginRight: 10,
    },
    text1: {
        color: "grey",
        fontSize: 40
    },
    text2: {
        color: "grey",
        fontSize: 20
    },
    oBackground: {
        backgroundColor: "#756ef3",
    },
    tcolor: {
        color: "white"
    },
    wow1: {
        borderColor: "#756ef3",
        borderWidth: 1,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        width: 80,
        height: "25%",
        marginRight: 10,
    },
});

export default MonthlyTask;