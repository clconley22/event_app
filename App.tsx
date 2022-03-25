import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import EventCards from './EventCards'
export default function App() {
  return (
    <View style={styles.container}>
      <Text>YESSSS Got this shit running!</Text>
      <EventCards/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
