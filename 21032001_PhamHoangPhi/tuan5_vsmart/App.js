import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation, route }) {
  const [selectedColor, setSelectedColor] = useState('');

  // Cập nhật màu sắc được chọn khi quay trở về từ màn hình chi tiết
  React.useEffect(() => {
    if (route.params?.color) {
      setSelectedColor(route.params.color);
    }
  }, [route.params?.color]);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.head}>
        <Image
          source={
            selectedColor === 'đỏ'
              ? require('./assets/vs_red.png') // Giả sử bạn có hình ảnh sản phẩm màu đỏ
              : selectedColor=='xanh'
              ?require('./assets/vs_blue.png')
              :selectedColor=='đen'
              ?require('./assets/vs_black.png')
              :selectedColor=='tím'
              ?require('./assets/vs_silver.png')
              :require('./assets/vs_blue.png')
          }

          style={styles.image}
        />


        
        <View style={{ marginLeft: 15 }}>
          <Text style={{ marginTop: -5 }}>
            Điện thoại Vsmart Joy 3 - Hàng chính hãng
          </Text>
          <View style={styles.start}>
            <Image source={require('./assets/star.png')} />
            <Image source={require('./assets/star.png')} />
            <Image source={require('./assets/star.png')} />
            <Image source={require('./assets/star.png')} />
            <Image source={require('./assets/star.png')} />
            <Text style={{ paddingLeft: 25 }}> ( Xem 828 đánh giá)</Text>
          </View>
          <View style={styles.price}>
            <Text style={{ fontWeight: 'bold' }}>1.790.000đ</Text>
            <Text style={{ textDecoration: 'line-through', paddingLeft: 65 }}>
              1.790.000đ
            </Text>
          </View>
          <View>
            <TouchableOpacity>
              <Text style={{ color: 'red', fontWeight: 'bold', marginTop: 0 }}>
                Ở đâu rẻ hơn hoàn tiền?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
              borderRadius: 8,
              width: 300,
            }}
            onPress={() => navigation.navigate('Details')}>
            <Text style={{ fontWeight: 'bold', padding: 5 }}>
              4 MÀU - CHỌN MÀU
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 5,
          }}>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
              borderRadius: 8,
              width: 300,
              backgroundColor: 'red',
            }}>
            <Text style={{ fontWeight: 'bold', padding: 5, color: 'white' }}>
              CHỌN MUA
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}


function DetailsScreen({ navigation }) {
  const [selectedColor, setSelectedColor] = useState('');

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleDone = () => {
    // Gửi màu sắc đã chọn về HomeScreen và quay lại HomeScreen
    navigation.navigate('Home', { color: selectedColor });
  };

  return (
    <View style={styles.container}>
      <View style={styles.head1}>
        <Image source={require('./assets/vs_blue.png')} style={styles.image1} />
        <View style={{ marginLeft: 0 }}>
          <Text style={{ marginTop: 0 }}>Điện thoại Vsmart Joy 3</Text>
          <Text style={{ marginTop: 0 }}>Hàng chính hãng</Text>
        </View>
      </View>

      <View style={{ flexDirection: 'column', fontSize: 16, marginLeft: 120, marginTop: -70, padding: 10 }}>
        {selectedColor ? (
          <Text>
            màu: {selectedColor}
          </Text>
        ) : null}
        <Text>cung cấp bởi tiki Tradding</Text>
        <Text style={{ fontWeight: 'bold' }}>1.790.000 đ</Text>
      </View>

      <Text style={{ fontSize: 24, marginTop: 20 }}>
        Chọn một màu bên dưới:
      </Text>
      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <TouchableOpacity
          style={{ backgroundColor: 'blue', height: 100, width: 100 }}
          onPress={() => handleColorSelect('xanh')}
        />
        <TouchableOpacity
          style={{ backgroundColor: 'red', height: 100, width: 100 }}
          onPress={() => handleColorSelect('đỏ')}
        />
        <TouchableOpacity
          style={{ backgroundColor: 'black', height: 100, width: 100 }}
          onPress={() => handleColorSelect('đen')}
        />
        <TouchableOpacity
          style={{ backgroundColor: 'purple', height: 100, width: 100 }}
          onPress={() => handleColorSelect('tím')}
        />
      </View>

      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 1,
          borderRadius: 8,
          width: 300,
          backgroundColor: 'blue',
          marginTop: 20,
        }}
        onPress={handleDone}>
        <Text style={{ fontWeight: 'bold', padding: 5, color: 'white' }}>
          XONG
        </Text>
      </TouchableOpacity>
    </View>
  );
}


const YourApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  head1: {
    flexDirection: 'row',
  },
  image1: {
    height: 100,
    width: 100,
  },
  colorContainer: {
    width: 200,
    height: 100,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  head: {
    // Style cho phần đầu
  },
  image: {
    marginTop:-200,
    height: 350,
  },
  start: {
    flexDirection: 'row',
  },
  price: {
    flexDirection: 'row',
  },
});

export default YourApp;
