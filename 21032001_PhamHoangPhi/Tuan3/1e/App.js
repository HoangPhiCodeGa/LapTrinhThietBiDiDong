import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
const YourApp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>REGISTER</Text>
      </View>

      <View style={styles.container}>
        <View style={[styles.inputContainer, { backgroundColor: 'lightblue' }]}>
          <TextInput style={styles.txtin} placeholder="Name" />
        </View>
        <View style={[styles.inputContainer, { backgroundColor: 'lightblue' }]}>
          <TextInput style={styles.txtin} placeholder="Phone" />
        </View>
        <View style={[styles.inputContainer, { backgroundColor: 'lightblue' }]}>
          <TextInput style={styles.txtin} placeholder="Email" />
        </View>
        <View style={[styles.inputContainer, { backgroundColor: 'lightblue' }]}>
          <TextInput style={styles.txtin} placeholder="Password" />
        </View>
        <View style={[styles.inputContainer, { backgroundColor: 'lightblue' }]}>
          <TextInput style={styles.txtin} placeholder="Birthday" />
        </View>

        <View style={styles.radioButtonMAIN}>
          <View style={styles.radioButton}>
            <TouchableOpacity>
              <Text style={styles.radioText}>Male</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.radioButton}>
            <TouchableOpacity>
              <Text style={styles.radioText}>Female</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.bot3}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>REGISTER</Text>
        </TouchableOpacity>
      </View>


       <View style={styles.bot4}>
        
          <Text>When you agree to terms and conditions</Text>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    radioButtonMAIN: {
    flexDirection: 'row',  // Đảm bảo các phần tử nằm ngang
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '80%',
  },
  radioButton: {
    height: 15,
    width: 15,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 115,
  },
  radioText: {
    marginTop: -5,
    marginRight: 70,
    fontSize: 16,
  },
  inputContainer: {
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 20,
    padding: 5,
    borderWidth: 1,
    borderColor: 'black',
  },
  txtin: {
    flex: 1,
    marginEnd: 10,
    padding: 3,
    borderRadius: 1,
    marginLeft: 5,
  },

  image1: {
    width: 25,
    height: 25,
  },
  container: {
    flex: 1,
    backgroundColor: 'rgb(111, 200, 230)',
    padding: 10,
  },
  bot3: {
    marginTop: -50,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bot4: {
    marginTop: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    //  backgroundColor:'grey',
    width: 280,
  },
  button: {
    marginLeft: 17,
    backgroundColor: 'red',
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
