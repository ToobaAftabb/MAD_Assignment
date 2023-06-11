import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Text, TouchableHighlight, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import bg1 from './assets/bg1.jpg';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ImageBackground source={bg1} style={styles.bg}>
        <Text style={{marginLeft: 70, marginTop: 250, fontSize: 20}}>College Management System</Text>

      <TouchableHighlight  style={{marginTop: 10,marginBottom:10, marginLeft: 80, marginRight: 80,
      shadowColor: "navy",
                     shadowOpacity: 5,
                     shadowRadius: 5,
                     shadowOffset:{
                       height: 5,
                       width: 5,
                     },}}
      >
             <Button style={{backgroundColor: 'yellow', justifyContent: 'center'}}
             onPress={() => navigation.navigate('SignUp')}            
            title="Get Started"
            
           /> 
           </TouchableHighlight> 
          
      </ImageBackground>
    </View>
  );
}

function SignUpScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  // const [getValue, setGetValue] = useState('');


   const handleRegister = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    // Check if email already exists
    const savedEmail = await AsyncStorage.getItem(email);
    if (savedEmail) {
      Alert.alert('Error', 'Email already exists');
      return;
    }

    // Save user data in AsyncStorage
    await AsyncStorage.setItem(
      email,
      JSON.stringify({ name, email, password })
    );
    Alert.alert('Success', 'Registration successful');
  };

  const saveValueFunction = () => {
 if (email) {
 AsyncStorage.setItem('any_key_here', email);
 setEmail('');
 alert('Data Saved');
 } else {
 alert('Please fill data');
 }
 };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <ImageBackground source={bg1} style={styles.bg} >
      

      <Text style={{marginLeft: 170, color:'black'}}>SignUp</Text>
      <Text style={{marginLeft: 110, color:'black'}}>F O R  Y O U R  A C C O U N T </Text>

      <TextInput style={styles.textInputStyle}
      placeholder='UserName'
        value={name}
        onChangeText={(text) => setName(text)}  />

      <TextInput style={styles.textInputStyle}
      placeholder='Email'
        value={email}
        onChangeText={(text) => setEmail(text)}  />

<TextInput style={styles.textInputStyle}
      placeholder='Enter password'
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />

      <TextInput style={styles.textInputStyle}
      placeholder='confirm your password'
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
        secureTextEntry
      />

      <TouchableHighlight
      style={{marginTop: 10,marginBottom:10, marginLeft: 80, marginRight: 80}}
      >

       <Button title="Create account"  onPress={handleRegister} /></TouchableHighlight>
       <TouchableHighlight
       style={{marginBottom:10, marginLeft: 80, marginRight: 80}}
       >
      <Button title="Save value" onPress={saveValueFunction} >
 
 </Button>
 </TouchableHighlight>


    
         
           <Text style={{marginLeft: 90, color:'black'}}>Already got an account? <Text style={{color: 'blue'}} onPress= {() => navigation.navigate('Login')}> 
            Log In</Text></Text>
            </ImageBackground>
          
    </View>
  );
}

function SignedInScreen(){
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     <ImageBackground source={bg1} style={styles.bg} >
      <Text>You're Sign In Successfully</Text>
      </ImageBackground>
        </View>
  )

}
  
function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [getValue, setGetValue] = useState('');
 

  const handleLogin = async () => {
    // Check if email exists
    const savedUser = await AsyncStorage.getItem(email);
    if (!savedUser) {
      Alert.alert('Error', 'Incorrect email or password');
      return;
    }

    const { email: savedEmail, password: savedPassword } =
      JSON.parse(savedUser);
    if (password !== savedPassword) {
      Alert.alert('Error', 'Incorrect email or password');
      return;
    }

    Alert.alert('Success', 'Login successful');
  };

  const getValueFunction = () => {

 AsyncStorage.getItem('any_key_here').then(
 (value) =>
 setGetValue(value)
 );}

  

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <ImageBackground source={bg1} style={styles.bg} >
    <Text style={{marginLeft: 180}}>Login</Text>
    <Text style={{marginLeft: 135}}>T O  C O N T I N U E</Text>
     
      <TextInput style={styles.textInputStyle}
      placeholder="Email" value={email} onChangeText={setEmail} />

      <TextInput style={styles.textInputStyle}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableHighlight style={{marginBottom: 10,
      marginLeft:80,
         marginRight: 80,}}>
      <Button title="Login" style={{marginBottom:10}} onPress={() =>navigation.navigate('LoggedIn') } /></TouchableHighlight>

       
       <TouchableHighlight style={{
         marginLeft:80,
         marginRight: 80,
       }}>
      <Button title="Show value" style={{marginTop:20}}onPress={getValueFunction} >
 <Text > GET VALUE </Text>
 </Button>
 </TouchableHighlight>
 <Text> {getValue} </Text>
      

      <Text style={{marginLeft: 90, color:'black'}}>Don't have an account?<Text style={{color: 'blue'}} onPress= {() => navigation.navigate('SignUp')}> Sign Up</Text></Text>
      </ImageBackground>
    </View>
  );
}

function LoggedInScreen({ navigation }){
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <ImageBackground source={bg1} style={styles.bg} >
        <Text style={{marginTop: 300, marginLeft: 130}}>Successfully Logged In</Text>
    </ImageBackground>
        </View>
  )

}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignedIn" component={SignedInScreen} />
      <Stack.Screen name="LoggedIn" component={LoggedInScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  textInputStyle: {
 textAlign: 'center',
 height: 40,
 width: '100%',
 borderWidth: 1,
 borderColor: 'black',
 marginLeft: 10,
 marginRight: 10,
 marginBottom: 10,
 marginTop: 10,
 paddingRight: 30,
 color: 'black',
 },

 bg: {
      width: '100%',
      height: '100%',
    },

       title: {
     fontSize: 20,
     color: 'white',
     fontWeight: "bold",
     marginLeft: 50,
     marginTop: 150,
  },


});

export default App;
