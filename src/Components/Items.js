import { FlatList, Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import list from './data'
import { moderateScale, textScale } from '../Style/Responsive'

const Items = () => {

    const renderItem=({item})=>{
       return(
        <TouchableOpacity style={styles.container}>
            <Image
        style={styles.imagestyle}
        source={{uri:item.image}}
        resizeMode='contain'
       />
         <Text style={styles.name}>{item.name}</Text>
        </TouchableOpacity>
       ) 
  
    }
  return (
    <View>
     <FlatList
      data={list}
      renderItem={renderItem}
      keyExtractor={item=>item.id}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
     />

    </View>
  )
}

export default Items

const styles = StyleSheet.create({

    imagestyle:{
        width:moderateScale(60),
        height:moderateScale(60),
        borderRadius:moderateScale(30),
      
    },
    container:{
        margin:moderateScale(12)
    },
    name:{
        textAlign:'center',
        fontSize:textScale(12),
        fontWeight:'600'
    }
})