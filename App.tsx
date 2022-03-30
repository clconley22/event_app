import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import EventCards from './EventCards'
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
      <View style={styles.container}>
        <EventCards/>
      </View>
      
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App