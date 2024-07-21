import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Start from '../Pages/Start';
import SecondPage from '../Pages/SecondPage';
import ThirdPage from '../Pages/ThirdPage';
import FourthPage from '../Pages/FourthPage';
import SignIn from '../Screens/Login/SignUP/SIgnIn';
import SignUp from '../Screens/Login/SignUP/SignUp';
import Projects from '../Screens/Projects';
import Chat from '../Screens/Chat';
import Profile from '../Screens/Profile';
import { Home } from '../Screens/Home';
import TodayTask from '../Screens/TodayTask';
import MonthlyTask from '../Screens/MonthlyTask';
import Language from '../Screens/Language';
import Settings from '../Screens/Settings';
import EditProfile from '../Screens/EditProfile';
import Search from '../Screens/Search';
import AddTask from '../Screens/AddTask';
import CreateTeam from '../Screens/CreateTeam';
import CreateTask from '../Screens/CreateTask';
import SideMenu from '../Screens/SideMenu';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const tabConfig = [
    {
        name: "Home",
        component: Home,
        focusedIcon: 'home',
        unfocusedIcon: 'home-outline',
        iconComponent: Ionicons,
    },
    {
        name: "Projects",
        component: Projects,
        focusedIcon: 'folder',
        unfocusedIcon: 'folder-open',
        iconComponent: MaterialIcons,
    },
    {
        name: "CreateTask",
        component: CreateTask,
        focusedIcon: 'pluscircle',
        unfocusedIcon: 'pluscircleo',
        iconComponent: AntDesign,
    },
    {
        name: "Chats",
        component: Chat,
        focusedIcon: 'chatbubble-ellipses-sharp',
        unfocusedIcon: 'chatbubble-ellipses-outline',
        iconComponent: Ionicons,
    },
    {
        name: "Profile",
        component: Profile,
        focusedIcon: 'user',
        unfocusedIcon: 'user-o',
        iconComponent: FontAwesome,
    },
];

const screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused, color }) => {
        const routeConfig = tabConfig.find(config => config.name == route.name);
        const iconName = focused ? routeConfig.focusedIcon : routeConfig.unfocusedIcon;
        const IconComponent = routeConfig.iconComponent;

        return <IconComponent name={iconName} size={25} color={color} />;
    },
    headerShown: false,
    tabBarActiveTintColor: "#756EF3",
    tabBarInactiveTintColor: "grey",
    tabBarLabelStyle: {
        display: "none",
        justifyContent: "space-around"
    },
    tabBarStyle: {
        height: 50,
    }
});

const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={screenOptions}>
            {tabConfig.map(routeConfig => (
                <Tab.Screen
                    key={routeConfig.name}
                    name={routeConfig.name}
                    component={routeConfig.component}
                />
            ))}
        </Tab.Navigator>
    );
};

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Start" component={Start} />
                <Stack.Screen name="SecondPage" component={SecondPage} />
                <Stack.Screen name="ThirdPage" component={ThirdPage} />
                <Stack.Screen name="FourthPage" component={FourthPage} />
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="Main" component={TabNavigator} />
                <Stack.Screen name="TodayTask" component={TodayTask} />
                <Stack.Screen name="MonthlyTask" component={MonthlyTask} />
                <Stack.Screen name="Language" component={Language} />
                <Stack.Screen name="Settings" component={Settings} />
                <Stack.Screen name="EditProfile" component={EditProfile} />
                <Stack.Screen name="Search" component={Search} />
                <Stack.Screen name="AddTask" component={AddTask} />
                <Stack.Screen name="CreateTeam" component={CreateTeam} />
                <Stack.Screen name="SideMenu" component={SideMenu} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;