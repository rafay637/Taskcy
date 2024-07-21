import { StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import Angle from 'react-native-vector-icons/AntDesign';
import Pencil from 'react-native-vector-icons/MaterialCommunityIcons';
import Calendar from 'react-native-vector-icons/FontAwesome5';
import User from 'react-native-vector-icons/FontAwesome6';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const TodayTask = () => {

    const navigation = useNavigation();
    const goBack = () => {
        navigation.navigate('Profile')
    };
    const Mtask = () => {
        navigation.navigate('MonthlyTask')
    };

    return (
        <View style={styles.main}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={goBack}>
                    <Angle style={styles.icon} size={30} name='leftcircleo' />
                </TouchableOpacity>
                <Text style={styles.head}>Today Task</Text>
                <TouchableOpacity onPress={Mtask}>
                    <Pencil name='pencil-circle-outline' style={styles.icon} size={37} />
                </TouchableOpacity>
            </View>

            <View style={styles.headerContainer1}>
                <Text style={styles.head1}>August, 29 ✍</Text>
                <Calendar name='calendar-alt' style={styles.icon1} size={20} />
            </View>

            <View style={styles.t5}>
                <Text style={styles.tt}>15 tasks today</Text>
            </View>

            <View>
                <ScrollView horizontal={true} style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
                    <View style={styles.wow}>
                        <Text style={styles.text1}>28</Text>
                        <Text style={styles.text2}>Sat</Text>
                    </View>

                    <View style={[styles.wow1, styles.oBackground]}>
                        <Text style={[styles.text1, styles.tcolor]}>29</Text>
                        <Text style={[styles.text2, styles.tcolor]}>Sun</Text>
                    </View>

                    <View style={styles.wow}>
                        <Text style={styles.text1}>30</Text>
                        <Text style={styles.text2}>Mon</Text>
                    </View>

                    <View style={styles.wow}>
                        <Text style={styles.text1}>31</Text>
                        <Text style={styles.text2}>Tue</Text>
                    </View>

                    <View style={styles.wow}>
                        <Text style={styles.text1}>01</Text>
                        <Text style={styles.text2}>Wed</Text>
                    </View>
                </ScrollView>
            </View>

            <View style={styles.container}>
                <View style={styles.line} />
                <Text style={styles.lineText}>10 am</Text>

                <View style={styles.line} />
                <Text style={styles.lineText}>11 am</Text>

                <View style={styles.line} />
                <Text style={styles.lineText}>12 pm</Text>

                <View style={styles.line} />
                <Text style={styles.lineText}>01 pm</Text>

                <View style={styles.line} />
                <Text style={styles.lineText}>02 pm</Text>
            </View>

            <View style={styles.crhub}>
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Wareframe elements ☺</Text>
                    <View style={styles.profileTextime}>
                        <User name='users' size={35} color="white" />
                        <Text style={styles.textime}>10am - 11am</Text>
                    </View>
                </View>
            </View>

            <View style={styles.crhub1}>
                <View style={styles.card1}>
                    <Text style={styles.cardTitle}>Mobile app Design 😍</Text>
                    <View style={styles.profileTextime}>
                        <User name='users' size={35} color="white" />
                        <Text style={styles.textime}>11:40am - 12:40pm</Text>
                    </View>
                </View>
            </View>

            <View style={styles.crhub2}>
                <View style={styles.card2}>
                    <Text style={styles.cardTitle}>Design Team call 🤗</Text>
                    <View style={styles.profileTextime}>
                        <User name='users' size={35} color="white" />
                        <Text style={styles.textime}>01:20pm - 02:20pm</Text>
                    </View>
                </View>
            </View>
        </View>
    )
};

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
        color: "black",
        top: 3,
        padding: 15,
        borderRadius: 30,
        borderColor: "lightgrey",
        borderWidth: 1
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
        height: 150,
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
        height: 150,
        marginRight: 10,
    },
    line: {
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 1,
        marginVertical: 20,
    },
    lineText: {
        fontSize: 20,
        fontWeight: "900",
        color: 'black',
        textAlign: 'left',
        marginBottom: 10,
    },
    crhub: {
        top: -320
    },
    card: {
        backgroundColor: '#45A8FE',
        borderRadius: 20,
        padding: 10,
        marginLeft: 70,
        width: width * 0.7,
        height: "33%"
    },
    cardTitle: {
        fontSize: width * 0.045,
        fontWeight: 'bold',
        marginBottom: 8,
        color: 'white',
    },
    profileTextime: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textime: {
        marginLeft: 10,
        color: 'white',
        fontSize: width * 0.04,
    },
    crhub1: {
        top: -465
    },
    card1: {
        backgroundColor: '#9BB762',
        borderRadius: 20,
        padding: 10,
        marginLeft: 110,
        width: width * 0.7,
        height: "33%"
    },
    crhub2: {
        top: -615
    },
    card2: {
        backgroundColor: '#F4AF7A',
        borderRadius: 20,
        padding: 16,
        marginLeft: 70,
        width: width * 0.7,
        height: "35%"
    },
});

export default TodayTask;