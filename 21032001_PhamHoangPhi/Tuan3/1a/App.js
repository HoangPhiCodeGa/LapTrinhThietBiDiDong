import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

const YourApp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Image
          source={require('./assets/tron.png')} 
          style={styles.image}
        />
      </View>

      <View style={styles.mid}>
        <Text>GROW </Text>
        <Text>YOUR BUSINESS </Text>
      </View>

      <View style={styles.bot1}>
        <Text>We will help you to grow your business using</Text>
        <Text>online server</Text>
      </View>

      <View style={styles.bot2}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(111, 200, 230)',
    padding: 10,
  },
  bot1: {
    flex: 0.3,
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
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    
    backgroundColor: 'yellow', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
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
