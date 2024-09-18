import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Button,
} from 'react-native';

const YourApp = () => {
  // Sử dụng useState để quản lý số lượng
  const [sl, setSl] = useState(1);
  const total = sl*141800;
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Image source={require('./assets/book.png')} Image />
        <View style={styles.head1}>
          <Text> Nguyên Hàm Tích Phân Và Ứng Dụng </Text>
          <Text> Cung Cấp Bởi TiKi Trading </Text>
          <Text style={styles.gia}> 141.800 đ </Text>
          <Text style={styles.gia1}> 141.800 đ </Text>

          <View style={styles.btn}>
            <View style={styles.btn1}>
              <Button
                title="-"
                onPress={() => {
                  if (sl > 1) {
                    setSl(sl - 1);
                  }
                }}
              />
            </View>

            <Text style={styles.fixsl}>{sl}</Text>
            <View style={styles.btn1}>
              <Button
                title="+"
                onPress={() => {
                  setSl(sl + 1); // Cập nhật số lượng khi nhấn nút
                }}
              />
            </View>
            <TouchableOpacity>
              <Text
                style={{
                  color: 'blue',
                  fontWeight: 'bold',
                  marginLeft: 40,
                  marginTop: 10,
                }}>
                Mua sau
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.giamgia}>
        <Text > Mã giảm giá đã lưu </Text>
        <TouchableOpacity>
          <Text style={{ color: 'blue', fontWeight: 'bold' }}>Xem tại đây</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.magiamgia}>
        <View style={{ flexDirection: 'row', borderWidth: 1,marginTop: -15 }}>
          <View style={{ flexDirection: 'row',marginTop: 5, padding: 10}}>
            <Image source={require('./assets/yellow_block.svg')} />
            <Text style={{ marginLeft: 10, fontSize: 19, marginTop: -5 }}>
              Mã Giảm Giá
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: 'blue',
            width: 110,
            height: 50,
            marginLeft: 30,
            marginTop: -15,
          }}>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 25,
              marginTop: 5,
              marginLeft: 3,
            }}>
            Áp Dụng
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.quatang}>
        <Text style={{fontSize: 12}}> Bạn có phiếu quà tặng Tiki/Got it/Urbox </Text>
        <TouchableOpacity>
          <Text style={{ color: 'blue', fontWeight: 'bold', marginLeft: 10, paddingLeft: 3 }}>
            Nhập tại đây
          </Text>
        </TouchableOpacity>
      </View>

      <View style= {styles.tamtinh}>
        <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold', marginLeft: 5 }}>
          Tạm tính
        </Text>
        <Text style={{ color: 'red', fontSize: 20, fontWeight:'bold', marginRight: 20 }}>
          {total.toLocaleString()} đ
        </Text>
      </View>
       <View style= {{height: 100, backgroundColor: 'grey', marginBottom: 20}}>
       
      </View>
      <View style= {styles.thanhtien}>
        <Text style={{ color: 'grey', fontSize: 25, fontWeight: 'bold', marginLeft: 5 }}>
          Thành tiền
        </Text>
        <Text  style={{ color: 'red', fontSize: 20, fontWeight:'bold', marginRight: 20 }}>
         {total.toLocaleString()}đ</Text>
      </View>

      <View style={styles.buy}>
        <TouchableOpacity style={{justifyContent:'center'}}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
            TIẾN HÀNH ĐẶT HÀNG
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  thanhtien:{
    flexDirection: 'row',
     justifyContent: 'space-between' ,
     marginBottom: 20
  },
  tamtinh:{
    marginTop: 20,
    marginBottom: 20,
    flexDirection:'row',
    justifyContent:'space-between'

  },
  magiamgia: {
    marginTop: 30,
    flexDirection: 'row',
    padding: 10,
  },
  muasau: {
    marginLeft: 30,
    backgroundColor: 'white',
  },
  fixsl: {
    marginRight: 10,
    marginTop: 5,
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'space-arrow',
    marginTop: -10,
    marginLeft:10
  },
  btn1: {
    width: 30,
    height: 1,
    marginRight: 10,
  },
  head1: {
    marginLeft: 5,
  },
  gia1: {
    marginLeft: 15,
    paddingBottom:10 ,
    textDecorationLine: 'line-through',
    fontWeight: 'bold',
    color: 'grey',
  },
  gia: {
    marginTop: 10,
    color: 'red',
    fontWeight: 'bold',
    fontSize: 20,
  },
  buy: {
    backgroundColor: 'red',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quatang: {
    marginTop: 10,
    flexDirection: 'row',
  },
  giamgia: {
    flexDirection: 'row',
    marginLeft: 5,marginTop:10
  },
  head: {
    padding: 10,
    flexDirection: 'row',
  },
});

export default YourApp;
