import React, { useState, useRef } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const YourApp = () => {
  const [code, setCode] = useState(['', '', '', '', '', '']); // Lưu trữ mã code nhập vào
  const inputs = useRef([]); // Tham chiếu tới các ô nhập liệu

  const handleChange = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    // Tự động chuyển qua ô tiếp theo khi người dùng nhập một ký tự
    if (text.length === 1 && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.codeText}>
          CODE
        </Text>
      </View>

      <View style={styles.mid}>
        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>VERIFICATION</Text>
      </View>

      <View style={styles.bot1}>
        <Text>Enter the one-time password sent on</Text>
        <Text>++849092605798</Text>
      </View>

      <View style={styles.inputContainer}>
        {code.map((digit, index) => (
          <TextInput
            key={index}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
            style={styles.input}
            keyboardType="numeric"
            maxLength={1}
            ref={(input) => inputs.current[index] = input} // Tham chiếu từng ô nhập liệu
          />
        ))}
      </View>

      <View style={styles.bot3}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>VERIFY CODE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  input: {
    width: 40, // Chiều rộng của mỗi ô nhập liệu
    height: 40, // Chiều cao của mỗi ô nhập liệu
    borderWidth: 1,
    borderColor: '#ccc',
    textAlign: 'center',
    fontSize: 18,
    borderRadius: 5,
  },
  codeText: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgb(111, 200, 230)',
    padding: 10,
  },
  bot3: {
    flex: 0.1,
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
  button: {
    backgroundColor: 'yellow',
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 280,
    marginHorizontal: 10,
  },
  head: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mid: {
    flex: 0.2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default YourApp;
