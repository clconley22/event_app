import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Button, Icon } from 'react-native-elements';


type CardsComponentsProps = {};
type CardsContentProps = {
  eventName: string,
  eventDate:string,
  eventImgSrc?:string,
  defaultColor?:string
  eventAttendenceStatus:string
};

const cardContents = [
  {
    eventName: 'Turnt n Burnt',
    eventDate: 'FRI, JUN 17 - SUN, JUN 19',
    eventImgSrc: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
    eventAttendenceStatus: 'Going'
  },
  {
    eventName: '4th of July',
    eventDate: 'SAT JUL 2',
    defaultColor: '#FE5F55',
    // eventImgSrc: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
    eventAttendenceStatus: 'Going'
  },
  {
    eventName: "Con and Joe's Birthday",
    eventDate: 'SAT AUG 13',
    defaultColor: '#4f6367',
    // eventImgSrc: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
    eventAttendenceStatus: 'Going'
  }
]

const EventCards: React.FunctionComponent<CardsComponentsProps> = () => {
return (
  <>
    <ScrollView>
      <View style={styles.container}>
      {cardContents.map((content: CardsContentProps)=> (
        <Card containerStyle = {styles.card}>
          { content.eventImgSrc 
            ? 
            (<Card.Image
              style={{ padding: 0, borderBottomLeftRadius: 0,
                borderBottomRightRadius:0,
                borderTopLeftRadius: 25,
                borderTopRightRadius: 25 }}
              source={{
              uri:
                content.eventImgSrc,
              }}
            />) 
            : (<View style={{
              backgroundColor: content.defaultColor,
              width: '100%',
              height: 150,
              borderBottomLeftRadius: 0,
              borderBottomRightRadius:0,
              borderTopLeftRadius: 25,
              borderTopRightRadius: 25
            }}/>)
          }
          <Text style={{ margin: 3 }}>
            {content.eventDate}
          </Text>
          <Text style={{ margin: 3 }}>
            {content.eventName}
          </Text>
          <View style={{width:'50%', padding:5, display: 'flex', justifyContent: 'flex-end' }} >
          <Button
            // icon={
            //   <Icon
            //     name="code"
            //     color="#ffffff"
            //     iconStyle={{ marginRight: 10 }}
            //   />
            // }
            buttonStyle={{
              borderRadius: 10,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="Going"
          />
          </View>
        </Card>
      ))}
        
      </View>
    </ScrollView>
  </>
);
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  minWidth: '100%'
},
fonts: {
  marginBottom: 8,
},
user: {
  flexDirection: 'row',
  marginBottom: 6,
},
image: {
  width: 30,
  height: 30,
  marginRight: 10,
},
name: {
  fontSize: 16,
  marginTop: 5,
},
defaultColorDiv: {
  backgroundColor: '#FE5F55',
  width: '100%',
  height: 150,
  borderBottomLeftRadius: 0,
 borderBottomRightRadius:0,
 borderTopLeftRadius: 25,
 borderTopRightRadius: 25
},
card: {
borderRadius: 25,
padding: 0
}
});

export default EventCards;