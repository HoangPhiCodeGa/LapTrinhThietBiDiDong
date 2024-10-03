import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Ca nấu lẩu, nấu mì mini...',
    image: require('./assets/ca_nau_lau.png'),
    link: 'Shop DeVang',
    chat: 'Chat',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: '1kg khô gà bơ tỏi...',
    image: require('./assets/ga_bo_toi.png'),
    link: 'Shop LTD Food',
    chat: 'Chat',
  },
    {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'xe cần cẩu đa năng...',
    image: require('./assets/xa_can_cau.png'),
    link: 'Shop Thế giới đồ chơi',
    chat: 'Chat',
  },
    {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Đồ chơi dạng mô hình ...',
    image: require('./assets/do_choi_dang_mo_hinh.png'),
    link: 'Shop Thế giới đồ chơi',
    chat: 'Chat',
  },
   {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'lãnh đạo giản đơn...',
    image: require('./assets/lanh_dao_gian_don.png'),
    link: 'minh long book',
    chat: 'Chat',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Hiểu lòng con trẻ...',
    image: require('./assets/hieu_long_con_tre.png'),
    link: 'minh long book',
    chat: 'Chat',
  },

];

const Item = ({ title, image, link, chat }) => (
  <View style={styles.item}>
    <Image source={image} style={styles.image} />
    <View style={styles.textContainer}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity>
        <Text style={styles.link}>{link}</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.chatContainer}>
          <Text style={styles.chat}>{chat}</Text>
        </View>
      </TouchableOpacity>
    </View>
  </View>
);

const ItemSeparatorView = ()=>{
  return(
    <View
      style={{height: 0.5, width:'100%',backgroundColor:'#c8c8c8'}}
    />
  )


}
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item title={item.title} image={item.image} link={item.link} chat={item.chat} />
        )}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={ItemSeparatorView}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    marginLeft: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 70,
  },
  textContainer: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
  },
  link: {
    color: 'red',
    marginTop: 5,
  },
  chatContainer: {
    backgroundColor: 'red',
    height: 30,
    width: 60,
    justifyContent: 'center', // Căn giữa theo chiều dọc
    alignItems: 'center',     // Căn giữa theo chiều ngang
    marginTop: -25,
    marginLeft: 150,
  },
  chat: {
    color: 'white',
    textAlign: 'center', // Căn giữa chữ bên trong Text
  },
});

export default App;
