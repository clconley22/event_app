import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react'
import { StyleSheet, Text, View, Platform } from 'react-native';
import Tabs from './Tabs'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading';

const getFonts = () => Font.loadAsync({
  'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
  'poppins-bold': require('./assets/fonts/Poppins-Bold.ttf'),
});


const  App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false)
  if(fontsLoaded){
    return (
      <>
       <View style={styles.header}>
        <Text style={styles.text}>events</Text>
      </View>
        <Tabs/>
      </>
     
      
    );
  } else {
    return (
    <AppLoading
      startAsync={getFonts}
      onFinish={()=>setFontsLoaded(true) }
      onError={()=> console.log('error')}
      />
    )
  }
  
};

const styles = StyleSheet.create({
  header: {
    height:'10%',
    backgroundColor: '#b8d8d8',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontFamily: 'poppins-regular',
    top: 25,
    margin: 3,
    fontSize: 30,
    color: '#4f6367',
    fontWeight: 'bold'
  },
});

export default App