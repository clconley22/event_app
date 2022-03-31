import React, {useState} from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Button, Icon } from 'react-native-elements';
import { SelectCountry as StatusDropdown } from 'react-native-element-dropdown';
import { color } from 'react-native-elements/dist/helpers';

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
    defaultColor: '#4f6367',
    eventAttendenceStatus: 'Going'
  },
  {
    id:2,
    eventName: '4th of July',
    eventDate: 'SAT JUL 2',
    defaultColor: '#FE5F55',
    eventAttendenceStatus: 'Going'
  },
  {
    id: 3,
    eventName: "Con and Joe's Birthday",
    eventDate: 'SAT AUG 13',
    defaultColor: '#4f6367',
    eventAttendenceStatus: 'Going'
  }
]

const options = [{
  value: '1',
  label: 'Going'
},
{
  value: '2',
  label: 'Maybe'
},
{
  value: '3',
  label: 'Not Going'
}]


const EventCards: React.FunctionComponent<CardsComponentsProps> = (props) => {

  const [response, setResponse] = useState({
    1: 'Respond',
    2: 'Going',
    3: 'Going'
  });

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
            containerStyle={styles.containerStyle}
            maxHeight={130}
            value={response}
            data={options}
            valueField="value"
            labelField="label"
            imageField=""
            placeholder={response[index+1]}
            onChange={e => {
              setResponse({...response, [index+1]: e.label});
            }}
            iconColor={'#E7ECEF'}
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
padding: 0,
backgroundColor: '#E7ECEF'
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
  backgroundColor: '#4f6367'
},
placeholderStyle: {
  fontSize: 16,
  color: '#E7ECEF',
  paddingLeft:10
},
selectedTextStyle: {
  fontSize: 16,
  fontFamily:'poppins-regular'

},
containerStyle:{
 backgroundColor: '#E7ECEF',
 borderRadius: 8
},
iconStyle: {
  width: 30,
  height: 30
}
});

export default EventCards;