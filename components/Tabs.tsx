import React from 'react';
import { Tab, Text, TabView} from 'react-native-elements';
import EventCards from './EventCards'
import { StyleSheet, View } from 'react-native';

const Tabs = () => {
const [index, setIndex] = React.useState(0);

return (
  <>
    <Tab
      value={index}
      onChange={(e) => setIndex(e)}
      indicatorStyle={{
        backgroundColor: '#7A9E9F',
        height: 2,
      }}
      variant='primary'
    >
      <Tab.Item
        title="all"
        titleStyle={styles.tabLabel}
        buttonStyle={{
            backgroundColor:'#b8d8d8'
          }}
      />
      <Tab.Item
        title="I'm Hosting"
        titleStyle={styles.tabLabel}
        buttonStyle={{
            backgroundColor:'#b8d8d8'
          }}
      />
      <Tab.Item
        title="upcoming"
        titleStyle={styles.tabLabel}
        buttonStyle={{
            backgroundColor:'#b8d8d8'
          }}
      />
      <Tab.Item
        title="past"
        titleStyle={styles.tabLabel}
        buttonStyle={{
            backgroundColor:'#b8d8d8'
          }}
      />
    </Tab>

    <TabView value={index} onChange={setIndex} animationType="spring">
      <TabView.Item style={styles.container}>
        <View >
            <EventCards/> 
        </View>
      </TabView.Item>
      <TabView.Item style={styles.container} >
        <Text h1>hosting</Text>
      </TabView.Item>
      <TabView.Item style={styles.container} >
        <Text h1>upcoming</Text>
      </TabView.Item>
      <TabView.Item style={styles.container} >
        <Text h1>past</Text>
      </TabView.Item>
    </TabView>
  </>
);
};

const styles = StyleSheet.create({
    container: {
    //   flex: 1,
      backgroundColor: '#b8d8d8',
      alignItems: 'center',
      justifyContent: 'center',
      width:'100%'
    },
    text: {
      fontFamily: 'poppins-regular',
      top: 25,
      margin: 3,
      fontSize: 30
    },
    tabLabel: { paddingHorizontal: 0, paddingVertical: 0, fontSize: 14, color: '#7A9E9F', fontWeight: 'bold', textTransform: 'lowercase' }

  });

export default Tabs