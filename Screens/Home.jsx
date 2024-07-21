import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Rarrow from 'react-native-vector-icons/AntDesign';

const Google = require('../assets/image5.png');
const { width } = Dimensions.get('window');

export const Home = () => {
  return (
    <ScrollView style={styles.hack}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.gridIcon}>
            <Text style={styles.gridIconText}>
              <AntDesign name="appstore-o" color="black" size={30} />
            </Text>
          </View>
          <View style={styles.date}>
            <Text style={styles.dateText}>Friday, 26</Text>
          </View>
          <TouchableOpacity style={styles.notificationIcon}>
            <Feather name="bell" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <View>
            <Text style={styles.titleText}>Let's make a Habits together 🙌</Text>
          </View>
          {/* Main Card One */}
          <ScrollView horizontal style={styles.cardContainer} showsHorizontalScrollIndicator={false}>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Application Design</Text>
              <Text style={styles.cardSubtitle}>UI Design Kit</Text>
              <View style={styles.progress}>
                <View style={styles.profile}>
                  <Image source={Google} style={styles.profileImage} />
                  <Image source={Google} style={styles.profileImage} />
                </View>
                <View style={{ width: '60%', flexDirection: 'column', alignItems: 'center' }}>
                  <Text style={styles.progressWord}>Progress</Text>
                  <View style={styles.progressBarWrapper}>
                    <View style={styles.progressBar} />
                    <Text style={styles.progressText}>50/80</Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.card1}>
              <Text style={styles.cardTitle1}>Overload Design</Text>
              <Text style={styles.cardSubtitle1}>UI Design Kit</Text>
              <View style={styles.progress1}>
                <View style={styles.profile1}>
                  <Image source={Google} style={styles.profileImage1} />
                  <Image source={Google} style={styles.profileImage1} />
                </View>
                <View style={{ width: '60%', flexDirection: 'column', alignItems: 'center' }}>
                  <Text style={styles.progressWord1}>Progress</Text>
                  <View style={styles.progressBarWrapper1}>
                    <View style={styles.progressBar1} />
                    <Text style={styles.progressText1}>40/90</Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.card}>
              <Text style={styles.cardTitle}>Demo Design</Text>
              <Text style={styles.cardSubtitle}>Dema Data Kit</Text>
              <View style={styles.progress}>
                <View style={styles.profile}>
                  <Image source={Google} style={styles.profileImage} />
                  <Image source={Google} style={styles.profileImage} />
                </View>
                <View style={{ width: '60%', flexDirection: 'column', alignItems: 'center' }}>
                  <Text style={styles.progressWord}>Progress</Text>
                  <View style={styles.progressBarWrapper}>
                    <View style={styles.progressBar} />
                    <Text style={styles.progressText}>70/100</Text>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
          {/* Progress Card Section */}
          <View style={styles.inProgress}>
            <View style={styles.rarrow}>
              <Text style={styles.inProgressTitle}>In Progress</Text>
              <TouchableOpacity>
                <Rarrow name='right' size={30} color='#756EF3' />
              </TouchableOpacity>
            </View>
            <View style={styles.inProgressItems}>
              {/* Progress percent one */}
              <View style={styles.inProgressItem}>
                <View>
                  <Text style={styles.inProgressItemSubtitle}>Create Detail Booking</Text>
                  <Text style={styles.inProgressItemTitle}>Productivity Mobile App</Text>
                  <Text style={styles.inProgressItemTime}>2 min ago</Text>
                </View>
                <View style={styles.inProgressItemProgress}>
                  <Text style={styles.inProgressItemProgressText}>60%</Text>
                </View>
              </View>
              {/* Progress percent two */}
              <View style={styles.inProgressItem}>
                <View>
                  <Text style={styles.inProgressItemSubtitle}>Revision Home Page</Text>
                  <Text style={styles.inProgressItemTitle}>Banking Mobile App</Text>
                  <Text style={styles.inProgressItemTime}>5 min ago</Text>
                </View>
                <View style={styles.inProgressItemProgress}>
                  <Text style={styles.inProgressItemProgressText}>70%</Text>
                </View>
              </View>
              {/* Progress percent three */}
              <View style={styles.inProgressItem}>
                <View>
                  <Text style={styles.inProgressItemSubtitle}>Online Course</Text>
                  <Text style={styles.inProgressItemTitle}>Working On Landing Page</Text>
                  <Text style={styles.inProgressItemTime}>7 min ago</Text>
                </View>
                <View style={styles.inProgressItemProgress}>
                  <Text style={styles.inProgressItemProgressText}>80%</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  hack: {
    height: '100%',
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  gridIcon: {
    backgroundColor: 'lightgray',
    borderRadius: 8,
    padding: 8,
  },
  gridIconText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  date: {
    backgroundColor: '#F2F2F2',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  dateText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  notificationIcon: {
    backgroundColor: 'lightgray',
    borderRadius: 8,
    padding: 8,
  },
  content: {
    padding: 16,
  },
  titleText: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    marginVertical: 8,
    marginRight: width * 0.2,
    color: '#000',
    left: 5
  },
  cardContainer: {
    marginTop: 20,
    flexDirection: 'row',
  },
  card: {
    backgroundColor: '#756ef3',
    borderRadius: 20,
    padding: 16,
    marginRight: 16,
    width: width * 0.8,
  },
  cardTitle: {
    fontSize: width * 0.045,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'white',
  },
  cardSubtitle: {
    fontSize: width * 0.035,
    marginBottom: 16,
    color: 'white',
  },
  progress: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  progressWord: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
    right: 18
  },
  progressBarWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  progressBar: {
    backgroundColor: '#F2F2F2',
    height: 8,
    width: '70%',
    borderRadius: 4,
  },
  progressText: {
    fontSize: width * 0.035,
    marginLeft: 8,
    color: 'white',
    bottom: 22
  },
  profile: {
    flexDirection: 'row',
    top: 8,
  },
  profileImage: {
    width: width * 0.1,
    height: width * 0.1,
    borderRadius: width * 0.05,
    marginRight: 0,
  },
  card1: {
    backgroundColor: 'white',
    borderColor: 'lightgrey',
    borderWidth: 1,
    borderRadius: 20,
    padding: 16,
    marginRight: 16,
    width: width * 0.8,
  },
  cardTitle1: {
    fontSize: width * 0.045,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'black',
  },
  cardSubtitle1: {
    fontSize: width * 0.035,
    marginBottom: 16,
    color: 'black',
  },
  progress1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  progressWord1: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
    color: 'grey',
    marginBottom: 4,
    right: 18
  },
  progressBarWrapper1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  progressBar1: {
    backgroundColor: '#756ef3',
    height: 8,
    width: '70%',
    borderRadius: 4,
  },
  progressText1: {
    fontSize: width * 0.035,
    marginLeft: 8,
    color: 'black',
    bottom: 22
  },
  profile1: {
    flexDirection: 'row',
    top: 8,
  },
  profileImage1: {
    width: width * 0.1,
    height: width * 0.1,
    borderRadius: width * 0.05,
    marginRight: 0,
  },
  inProgress: {
    paddingVertical: 30,
    marginTop: 16,
  },
  rarrow: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  inProgressTitle: {
    fontSize: width * 0.055,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#000',
    left: 13
  },
  inProgressItems: {
    gap: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
  },
  inProgressItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#babdc3',
    borderRadius: 15,
    padding: 10,
  },
  inProgressItemTitle: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
    color: '#000',
  },
  inProgressItemSubtitle: {
    fontSize: width * 0.035,
    color: '#777',
  },
  inProgressItemTime: {
    fontSize: width * 0.03,
    color: '#777',
  },
  inProgressItemProgress: {
    backgroundColor: '#F2F2F2',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: 'row',
  },
  inProgressItemProgressText: {
    fontSize: width * 0.035,
    color: '#000',
  },
});