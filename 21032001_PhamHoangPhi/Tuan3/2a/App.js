import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity,TextInput } from 'react-native';
const YourApp = () => {
  return (
    
   
    <View style={styles.container}>
      

      <View style={styles.mid}>
        <Text style={{fontWeight:'bold',fontSize: 20, }}>LOGIN </Text>
        
      </View>

      

      <View style={styles.bot2}>
        <Image
          source={require('./assets/avatar_user 1.png')}
          style={{width: 15,height: 15}}
        Image/>
        <TextInput
          placeholder=" Name"
          style={styles.txtin}
        />
      </View>
      <View style={styles.bot2}>
        <Image
          source={require('./assets/pass.png')}
          style={{width: 15,height: 15}}
        Image/>
        <TextInput
          placeholder=" Password"
          style={styles.txtin}
        />
      </View>


       <View style={styles.bot3}>
       
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>

      <View style={{justifyContent:'center',alignItems:'center', marginLeft: 20,marginTop: 20}}>
       
          <Text style={{fontWeight:'bold',}}>CREATE ACCOUNT</Text>
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
    color:'black'
  },
 
  image:{
    
    width: 5,
    height:5,
  },
  container: {
    flex: 1,
    backgroundColor: 'yellow',
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
    // backgroundColor:'#FFD700',
    color: 'white',
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
     width: 280,
     borderWidth: 1,
     backgroundColor:'#FFD700',
      borderColor: 'white',
  },
  button: {
    marginLeft: 17,
    backgroundColor:'black', 
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
    alignItems: 'flex-start',
    marginLeft: 10
    
  },
});

export default YourApp;

