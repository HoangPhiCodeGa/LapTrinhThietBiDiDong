import React, {useState} from 'react'
import {
  View, StyleSheet, SafeAreaView, FlatList,TouchableOpacity,Modal,TextInput, Text
} from 'react-native'

const DATA= [
  {id: 1, text: 'To Check Email'},
  {id: 2, text: 'Ui Task Web Page'},
  {id: 3, text: 'Lean Javascrip Basic'},
  {id: 4, text: 'Lean Html Advance'},
  {id: 5, text: 'Medical App Ui'},
  {id: 6, text: 'Lean jJava'},
]
const App =()=>{
  const [data, setdata]= useState(DATA);
  const [isModalisible, setisModalisible]= useState(false);
  const [inputText, setinputText]= useState();
  const [editItem,seteditItem]= useState();
  const [isRender, setisRender]= useState(false);

  const onPressSave=()=>{
    const newData= data.map(item=>{
      if(item.id == editItem)
      {
        item.text= inputText;
        return item;
      }
      return item;
    })
    setdata(newData);
    setisModalisible(false);
  }
  const onPressItem=(item)=>{
    setisModalisible(true);
    setinputText(item.text);
    seteditItem(item.id);
    setisRender(!isRender);
  }
  const renderItem=({item,index})=>{
    return (
        <TouchableOpacity style = {styles.touch}
        onPress={()=>onPressItem(item)}
        >
          
          <Text style= {styles.text}>
            {item.text}
          </Text>
        </TouchableOpacity>

    )
  }
  return(
    <View style= {styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item)=> item.id.toString()}
        renderItem = {renderItem}
        extraData= {isRender}
      />


      <Modal
        animationType='fade'
        visible={isModalisible}
        onRequestClose={()=>setisModalisible(false)}
      >
          <View style= {styles.modalView}>
            <Text style={styles.text}> Edit  </Text>
            <TextInput
              style= {styles.textInput}
              onChangeText={(text)=>setinputText(text)}
              defaultValue={inputText}
              editable= {true}
              multiline={false}
              maxLength={200}
            />


            <TouchableOpacity
              style={styles.touchableSave}
              onPress = {()=>onPressSave()}
              >
              <Text  style= {styles.text}>SAVE</Text>
            </TouchableOpacity>
          </View>
      
      </Modal>


    </View>
  )
}
const styles= StyleSheet.create(
  {
    modalView:{},
    textInput:{},
    touchableSave:{},
    container:{
      flex: 1
    },
    touch:{
      backgroundColor:'grey',
      borderColor:'grey',
      borderWidth: 5,
      marginTop:5,
      borderRadius: 20
    },
    text:{
      textAlign:'center'
    }

  }
)
export default App;