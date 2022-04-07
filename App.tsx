import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignInScreen from './src/screens/SignInScreen';

export default function App() {
  return (
    <View style={styles.root}>
        <SignInScreen />
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
     flex: 1,
     backgroundColor: '#b8d8d8', 
  },
});