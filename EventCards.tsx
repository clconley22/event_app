import React, {useState} from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Button, Icon } from 'react-native-elements';
import { SelectCountry as StatusDropdown } from 'react-native-element-dropdown';
import * as TNB from './assets/tnb.jpeg'
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
    id:1,
    eventName: 'Turnt n Burnt',
    eventDate: 'FRI, JUN 17 - SUN, JUN 19',
    eventImgSrc: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
    eventAttendenceStatus: 'Going'
  },
  {
    id:2,
    eventName: '4th of July',
    eventDate: 'SAT JUL 2',
    defaultColor: '#FE5F55',
    // eventImgSrc: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
    eventAttendenceStatus: 'Going'
  },
  {
    id: 3,
    eventName: "Con and Joe's Birthday",
    eventDate: 'SAT AUG 13',
    defaultColor: '#4f6367',
    // eventImgSrc: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
    eventAttendenceStatus: 'Going'
  }
]

const options = [{
  value: '1',
  lable: 'Going'
},
{
  value: '2',
  lable: 'Maybe'
},
{
  value: '3',
  lable: 'Not Going'
}]


const EventCards: React.FunctionComponent<CardsComponentsProps> = (props) => {

  const [response, setResponse] = useState('Respond');

return (
  <>
    <ScrollView>
      <View style={styles.container}>
      {cardContents.map((content: CardsContentProps, index: number)=> (
        <Card key={index} containerStyle = {styles.card}>
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
          <Text style={styles.text}>
            {content.eventDate}
          </Text>
          <Text style={styles.text}>
            {content.eventName}
          </Text>
          <View style={{width:'50%', padding:5, display: 'flex', justifyContent: 'flex-end' }} >
          <StatusDropdown
            style={styles.dropdown}
            selectedTextStyle={styles.selectedTextStyle}
            placeholderStyle={styles.placeholderStyle}
            iconStyle={styles.iconStyle}
            maxHeight={130}
            value={response}
            data={options}
            valueField="value"
            labelField="lable"
            imageField=""
            placeholder="Response"
            onChange={e => {
              setResponse(e.value);
            }}
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
},
text: {
  fontFamily: 'poppins-regular',
  marginLeft: 10,
  margin: 3,
  fontSize: 16
},
dropdown: {
  margin: 10,
  height: 50,
  borderColor: 'gray',
  borderWidth: 0.5,
  borderRadius: 8,
},
placeholderStyle: {
  fontSize: 16,
},
selectedTextStyle: {
  fontSize: 16,
  marginLeft: 8,
  fontFamily:'poppins-regular'
},
iconStyle: {
  width: 20,
  height: 20
}
});

export default EventCards;