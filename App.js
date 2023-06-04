import * as React from 'react'; 
import { useState } from 'react';
import { Button, View, ImageBackground, StyleSheet, TouchableHighlight, Text, TextInput}
 from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import bg1 from './assets/bg2.jpg';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ImageBackground source={bg1} style={styles.bg1}>
        <Text style={styles.titlee}>College Management System</Text>

      <TouchableHighlight 
                 style ={{
                     borderRadius:5,
                     backgroundColor : "skyblue",
                     justifyContent: "center",
                     marginLeft :500,
                     marginRight:500,
                     marginTop :200,
                     marginBottom: 20,
                     shadowColor: "skyblue",
                     shadowOpacity: 5,
                     shadowRadius: 5,
                     shadowOffset:{
                       height: 5,
                       width: 5,
                     },
                     padding: 10,
                    
                 }}>
             <Button style={{backgroundColor: 'yellow', justifyContent: 'center'}}
             onPress={() => navigation.navigate('Login' ,{ data: 'Initial data' })}            
            title="Get Started"
            
           /> 
           </TouchableHighlight> 
          
      </ImageBackground>
    </View>
  );
}


function LoginScreen({ navigation, route }) {
  const [firstName, setFirstName] = useState('');
  const [password, setPassword] = useState('');
  const { data } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ImageBackground source={bg1} style={styles.bg1}>

      <Text style={styles.h1}>LOGIN</Text>
      <Text style={styles.h3}>T O  C O N T I N U E</Text>

      <TextInput style={styles.input}
      placeholder='UserName'
        value={firstName}
        onChangeText={(text) => setFirstName(text)}  />

<TextInput style={styles.input}
      placeholder='Enter password'
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />

      <TouchableHighlight 
                 style ={{
                     borderRadius:5,
                     backgroundColor : "skyblue",
                     justifyContent: "center",
                     marginLeft :500,
                     marginRight:500,
                    marginTop :10,
                    //  marginBottom: 100,
                     shadowColor: "skyblue",
                     shadowOpacity: 5,
                     shadowRadius: 5,
                     shadowOffset:{
                       height: 5,
                       width: 5,
                     },
                     padding: 10,
                    
                 }}>
             <Button style={{backgroundColor: 'yellow', justifyContent: 'center'}}
             onPress={() => navigation.navigate('LoggedIn')}            
            title="LOGIN"
            
           /> 
           </TouchableHighlight>

           <TouchableHighlight 
                 style ={{
                     borderRadius:5,
                     backgroundColor : "skyblue",
                     justifyContent: "center",
                     marginLeft :500,
                     marginRight:500,
                     marginTop :20,
                     marginBottom: 100,
                     shadowColor: "skyblue",
                     shadowOpacity: 5,
                     shadowRadius: 5,
                     shadowOffset:{
                       height: 5,
                       width: 5,
                     },
                     padding: 10,
                    
                 }}>
             <Button style={{backgroundColor: 'yellow', justifyContent: 'center'}}
             onPress={() => navigation.navigate('SignUp')}            
            title="SignUp"
            
           /> 
           </TouchableHighlight>
      {/* <Button onPress={() => navigation.goBack()} title="Go back home" /> */}
      </ImageBackground>
    </View>
  );
}


function SignUpScreen({ navigation }) {
  const [firstName, setFirstName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ImageBackground source={bg1} style={styles.bg1}>

      <Text style={styles.h1}>SignUp</Text>
      <Text style={styles.h2}>F O R  Y O U R  A C C O U N T </Text>

      <TextInput style={styles.input1}
      placeholder='UserName'
        value={firstName}
        onChangeText={(text) => setFirstName(text)}  />

<TextInput style={styles.input1}
      placeholder='Enter password'
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />

      <TextInput style={styles.input1}
      placeholder='confirm your password'
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
        secureTextEntry
      />

      <TouchableHighlight 
                 style ={{
                     borderRadius:5,
                     backgroundColor : "skyblue",
                     justifyContent: "center",
                     marginLeft :500,
                     marginRight:500,
                     marginTop :100,
                     marginBottom: 50,
                     shadowColor: "skyblue",
                     shadowOpacity: 5,
                     shadowRadius: 5,
                     shadowOffset:{
                       height: 5,
                       width: 5,
                     },
                     padding: 10,
                    
                 }}>
             <Button style={{backgroundColor: 'yellow', justifyContent: 'center'}}
             onPress={() => navigation.navigate('SignedIn')}            
            title="SignUp"
            
           /> 
           </TouchableHighlight>
          
      {/* <Button onPress={() => navigation.goBack()} title="Go back home" /> */}
      </ImageBackground>
    </View>
  );
}

function LoggedInScreen({ navigation }){
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ImageBackground source={bg1} style={styles.bg1}>
        <Text style={styles.title}>Successfully Logged In</Text>
        <TouchableHighlight
        style ={{
          borderRadius:5,
          backgroundColor : "skyblue",
          justifyContent: "center",
          marginLeft :500,
          marginRight:500,
          marginTop :100,
          marginBottom: 50,
          shadowColor: "skyblue",
          shadowOpacity: 5,
          shadowRadius: 5,
          shadowOffset:{
            height: 5,
            width: 5,
          },
          padding: 10,
         
      }}
         onPress={()=> navigation.navigate("SignedIn",{
        Name: "Tooba" , Reg_No: 25, }
        )}>
          <Text>See Details</Text>
          
        </TouchableHighlight>
        {/* <Text>Received Parameter: {route.params?.data}</Text> */}
        </ImageBackground>
        </View>
  )

}

function SignedInScreen({ route }){
  const{Name, Reg_No} = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ImageBackground source={bg1} style={styles.bg1}>
        <Text style={styles.title}>Successfully Logged In</Text>
        <Text style={styles.h2}>Name: {JSON.stringify(Name)}</Text>
        <Text style={styles.h2}>Reg_No: {JSON.stringify(Reg_No)}</Text>
        </ImageBackground>
        </View>
  )

}

// const CustomHeaderButton = (props, navigation) => (
//      <HeaderButtons {...props}>
//        <Item title="CustomButton" iconName="web-options" onPress={() => {navigation.navigate("Home")}} />
//      </HeaderButtons>
//    );


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home"
       screenOptions={{
               headerStyle: {
                backgroundColor: "skyblue",
               }
             }}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Login" component={LoginScreen}
         options={{
                   title: 'Login',
                   headerRight: () => (
                     <HeaderButtons>
                       <Item title="Back" iconName="web-back" onPress={() =>
                         {navigation.navigate("Home")}}
                         color='black' />
                     </HeaderButtons>
                   ),
                 }}
         />
        <Drawer.Screen name="SignUp" component={SignUpScreen}
        options={{
          title: 'SignUp',
          headerRight: () => (
            <HeaderButtons>
              <Item title="Back" iconName="web-back" onPress={() =>
                {navigation.navigate("Home")}}
                color='black' />
            </HeaderButtons>
          ),
        }} 
        />
        <Drawer.Screen name="LoggedIn" component={LoggedInScreen} />
        <Drawer.Screen name="SignedIn" component={SignedInScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

 const  styles = StyleSheet.create({
    bg: {
      width: '100%',
      height: '100%',
    },

    bg1: {
      width: '100%',
      height: '100%',
    },
       titlee: {
     fontSize: 50,
     color: 'white',
     fontWeight: "bold",
     marginLeft: 320,
     marginTop: 150,
  },
       title: {
     fontSize: 50,
     color: 'white',
     fontWeight: "bold",
     marginLeft: 360,
     marginTop: 150,
  },
  h1:{
    fontSize: 30,
     color: 'white',
     fontWeight: "bold",
     marginLeft: 600,
     marginTop: 150,
  },

  h2:{
    fontSize: 20,
     color: 'white',
     fontWeight: "normal",
     marginLeft: 520,
    //  marginTop: 150,
  },

  h3:{
    fontSize: 20,
     color: 'white',
     fontWeight: "normal",
     marginLeft: 550,
    //  marginTop: 150,
  },
  input: {
    height: '8%',
    color: 'white',
    width: '50%',
    borderWidth: 1,
    marginLeft: 320,
    borderColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 10,
    // paddingVertical: 10,
    marginBottom: 10,
},    

input1: {
  height: '50%',
  color: 'white',
  width: '50%',
  borderWidth: 1,
  marginLeft: 320,
  borderColor: 'white',
  borderRadius: 10,
  paddingHorizontal: 10,
  marginBottom: 10,
},    


  })




// import React from 'react';
// import { View, Text, Button } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';
// import { HeaderButtons, Item } from 'react-navigation-header-buttons';
// import { ActionSheetIOS } from 'react-native';

// import 'react-native-gesture-handler';

// // Screen components
// const HomeScreen = ({ navigation }) => (
//   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//     <Text>Home Screen</Text>
//     <Button
//       title="Go to Details"
//       onPress={() => navigation.navigate('Details')}
//     />
//   </View>
// );

// const DetailsScreen = ({ navigation }) => (
//   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//     <Text>Details Screen</Text>
//     <Button
//       title="Go to Nested Details"
//       onPress={() => navigation.navigate('NestedDetails')}
//     />
//   </View>
// );

// const NestedDetailsScreen = ({ route }) => (
//   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//     <Text>Nested Details Screen</Text>
//     <Text>Received Parameter: {route.params?.data}</Text>
//   </View>
// );

// // Header button components
// const CustomHeaderButton = (props) => (
//   <HeaderButtons {...props}>
//     <Item title="CustomButton" iconName="ios-options" onPress={() => {}} />
//   </HeaderButtons>
// );

// // Stack navigator
// const Stack = createStackNavigator();
// const StackNavigator = () => (
//   <Stack.Navigator
//     screenOptions={{
//       headerRight: () => <CustomHeaderButton />,
//     }}
//   >
//     <Stack.Screen
//       name="Home"
//       component={HomeScreen}
//       options={{
//         title: 'Home',
//         headerLeft: () => (
//           <HeaderButtons>
//             <Item title="Menu" iconName="ios-menu" onPress={() => {}} />
//           </HeaderButtons>
//         ),
//       }}
//     />
//     <Stack.Screen
//       name="Details"
//       component={DetailsScreen}
//       options={{
//         title: 'Details',
//         headerRight: () => (
//           <HeaderButtons>
//             <Item title="Save" iconName="ios-save" onPress={() => {}} />
//           </HeaderButtons>
//         ),
//       }}
//     />
//     <Stack.Screen
//       name="NestedDetails"
//       component={NestedDetailsScreen}
//       options={{ title: 'Nested Details' }}
//     />
//   </Stack.Navigator>
// );

// // Tab navigator
// const Tab = createBottomTabNavigator();
// const TabNavigator = () => (
//   <Tab.Navigator>
//     <Tab.Screen name="Home" component={StackNavigator} />
//     <Tab.Screen name="Settings" component={SettingsScreen} />
//   </Tab.Navigator>
// );

// // Drawer navigator
// const Drawer = createDrawerNavigator();
// const DrawerNavigator = () => (
//   <Drawer.Navigator>
//     <Drawer.Screen name="Home" component={TabNavigator} />
//     <Drawer.Screen name="About" component={AboutScreen} />
//   </Drawer.Navigator>
// );

// // App component
// const App = () => {
//   return (
//     <NavigationContainer>
//       <DrawerNavigator />
//     </NavigationContainer>
//   );
// };

// export default App;



// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';
// import { Text, View, Button } from 'react-native';
// import 'react-native-gesture-handler';

// // Define your screens/components for each navigator
// const HomeScreen = ({ navigation }) => (
//   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//      <Text>Home Screen</Text>
//      <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')} />
//    </View>
// );

// const DetailsScreen = ({ navigation }) => (
//   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//     <Text>Detail Screen</Text>
//          <Button onPress={() => navigation.goBack()} title="Go back home" />
//        </View>
// );

// const ProfileScreen = ({ navigation }) => (
//   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//      <Text>Profile Screen</Text>
//      <Button title="Go to Settings" onPress={() => navigation.navigate('Settings')} />
//    </View>
// );

// const SettingsScreen = ({ navigation }) => (
//   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//        <Text>Settings Screen</Text>
//        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
//      </View>
// );

// // Define your header buttons
// const HeaderButton = ({ title, onPress }) => (
//   <Item title="Menu" iconName="ios-menu" onPress={() => navigation.toggleDrawer()} />
// );

// // Create the tab navigator
// const Tab = createBottomTabNavigator();
// const TabNavigator = () => (
//   <Tab.Navigator>
//     <Tab.Screen name="Home" component={HomeScreen} />
//     <Tab.Screen name="Details" component={DetailsScreen} />
//   </Tab.Navigator>
// );

// // Create the stack navigator
// const Stack = createStackNavigator();
// const StackNavigator = () => (
//   <Stack.Navigator>
//     <Stack.Screen
//       name="Tabs"
//       component={TabNavigator}
//       options={({ navigation }) => ({
//         headerLeft: () => (
//           <HeaderButton
//             title="Menu"
//             onPress={() => navigation.openDrawer()}
//           />
//         ),
//       })}
//     />
//     <Stack.Screen
//       name="Profile"
//       component={ProfileScreen}
//       options={({ navigation }) => ({
//         headerRight: () => (
//           <HeaderButton
//             title="Settings"
//             onPress={() => navigation.navigate('Settings')}
//           />
//         ),
//       })}
//     />
//     <Stack.Screen name="Settings" component={SettingsScreen} />
//   </Stack.Navigator>
// );

// // Create the drawer navigator
// const Drawer = createDrawerNavigator();
// const DrawerNavigator = () => (
//   <Drawer.Navigator>
//     <Drawer.Screen name="Home" component={StackNavigator} />
//   </Drawer.Navigator>
// );

// // Wrap the app with NavigationContainer
// const App = () => (
//   <NavigationContainer>
//     <DrawerNavigator />
//   </NavigationContainer>
// );

// export default App;


// import * as React from 'react';
// import { Text, View, Button } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// // import { HeaderButtons, HeaderButton, Item } from 'react-navigation-header-buttons';
// import 'react-native-gesture-handler';

// // Custom header button component
// const CustomHeaderButton = (props) => (
//   <Button {...props} IconComponent={Ionicons} iconSize={23} color="white" />
// );

// // Create a stack navigator for each tab
// const HomeStack = createNativeStackNavigator();
// const ProfileStack = createNativeStackNavigator();
// const SettingsStack = createNativeStackNavigator();

// // Home screen
// const HomeScreen = ({ navigation }) => (
//   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//     <Text>Home Screen</Text>
//     <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')} />
//   </View>
// );

// // Profile screen
// const ProfileScreen = ({ navigation }) => (
//   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//     <Text>Profile Screen</Text>
//     <Button title="Go to Settings" onPress={() => navigation.navigate('Settings')} />
//   </View>
// );

// // Settings screen
// const SettingsScreen = ({ navigation }) => (
//   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//     <Text>Settings Screen</Text>
//     <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
//   </View>
// );

// // Configure stack navigator options with custom header buttons
// const stackNavigatorOptions = {
//   headerStyle: {
//     backgroundColor: 'blue',
//   },
//   headerTintColor: 'white',
//   headerTitleStyle: {
//     fontWeight: 'bold',
//   },
//   headerRight: () => (
//     <Buttons HeaderButtonComponent={CustomHeaderButton}>
//       <Item title="Menu" iconName="ios-menu" onPress={() => navigation.toggleDrawer()} />
//     </Buttons>
//   ),
// };

// // Configure the home stack navigator
// const HomeStackScreen = () => (
//   <HomeStack.Navigator screenOptions={stackNavigatorOptions}>
//     <HomeStack.Screen name="Home" component={HomeScreen} />
//   </HomeStack.Navigator>
// );

// // Configure the profile stack navigator
// const ProfileStackScreen = () => (
//   <ProfileStack.Navigator screenOptions={stackNavigatorOptions}>
//     <ProfileStack.Screen name="Profile" component={ProfileScreen} />
//   </ProfileStack.Navigator>
// );

// // Configure the settings stack navigator
// const SettingsStackScreen = () => (
//   <SettingsStack.Navigator screenOptions={stackNavigatorOptions}>
//     <SettingsStack.Screen name="Settings" component={SettingsScreen} />
//   </SettingsStack.Navigator>
// );

// // Configure the tab navigator
// const Tab = createBottomTabNavigator();
// const TabNavigator = () => (
//   <Tab.Navigator>
//     <Tab.Screen name="Home" component={HomeStackScreen} />
//     <Tab.Screen name="Profile" component={ProfileStackScreen} />
//   </Tab.Navigator>
// );

// // Configure the drawer navigator
// const Drawer = createDrawerNavigator();
// const DrawerNavigator = () => (
//   <Drawer.Navigator>
//     <Drawer.Screen name="Home" component={TabNavigator} />
//     <Drawer.Screen name="Settings" component={SettingsStackScreen} />
//   </Drawer.Navigator>
// );

// // Main component
// export default function App() {
//   return (
//     <NavigationContainer>
//       <DrawerNavigator />
//     </NavigationContainer>
//   );
// }






