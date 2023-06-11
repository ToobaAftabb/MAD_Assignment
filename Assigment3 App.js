
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
                     marginBottom: 10,
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
           <Text style={styles.h4}>Don't have an account?
            <Text style={{color: "blue" }}> Sign Up</Text></Text>
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

  h4:{
    fontSize: 20,
     color: 'white',
     fontWeight: "normal",
     marginLeft: 500,
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


  




