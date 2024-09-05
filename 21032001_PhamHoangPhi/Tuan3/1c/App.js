import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity,TextInput } from 'react-native';
const YourApp = () => {
  return (
    
   
    <View style={styles.container}>
      <View style={styles.head}>
        <Image
          source={require('./assets/khoa.png')} 
          style={styles.image}
        />
      </View>

      <View style={styles.mid}>
        <Text>FORGET </Text>
        <Text> 
PASSWORD</Text>
      </View>

      <View style={styles.bot1}>
        <Text>Provide your account’s email for which you</Text>
        <Text> want to reset your password</Text>
      </View>

      <View style={styles.bot2}>
        <Image
          source={require('./assets/email.png')}
          style={styles.image1}
        />
        <TextInput
          placeholder=" Email"
          style={styles.txtin}
        />
      </View>
      
       <View style={styles.bot3}>
       
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>NEXT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  txtin:{
    flex: 1,
   
    padding: 3,
    borderRadius: 1, 
    marginLeft: 5,
  },
 
  image1:{
    
    width: 25,
    height:25,
  },
  container: {
    flex: 1,
    backgroundColor: 'rgb(111, 200, 230)',
    padding: 10,
  },
  bot3:{
    padding:10,
    justifyContent: 'center',
    alignItems:'center'
  },
  bot1: {
    flex: 0.1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16, 
  },
  bot2: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
     backgroundColor:'grey',
     width: 280
  },
  button: {
    marginLeft: 17,
    backgroundColor: 'yellow', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 280,
    marginHorizontal: 10, 
  },
  head: {
    flex: 0.4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  mid: {
    flex: 0.1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default YourApp;

