import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, } from 'react-native';

export default function App() {
   const age = 22;
   const licensyears = 0 ;
   let feedback = '';

   if (age >= 18){
      if (licensyears >= 3 ){
        feedback = 'You are a qulified driver '
      }else{
        'Your not qulified yet '
      }
     
     feedback = 'You are allowed to drive. Be carefull :)'
    }else{
      feedback = 'You are not allowed to drive :('
    }
  

  return (
    <SafeAreaView style = {styles.container} >
     <View style={styles.container}>
      <View style = {styles.content}></View>
      <Text style ={[styles.response , {fontSize: 48, color: 'yellow', marginBottom: 35 , textAlign : 'center'}]}> Driving licenses cheacker</Text>
      <Image source = {{uri: 'https://ultimateimageauto.com/wp-content/uploads/2025/04/Teen-driver-1024x683.jpg',}} 
        style = {styles.Image}/>
      
       <Text style = {styles.response}> Age: {age}</Text>
       <Text style = {styles.response}> License Years: {licensyears}</Text>

     <Text style = {styles.response}> {feedback}</Text> 
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
    content: {
      width: '100%',
      alignItems: 'center',
    },

    response: {
     fontSize: 28,
     color: 'red',

    },

    Image : {
        width :200 , 
        height : 200, 
        resizeMode: 'contain',
        top: 0 ,
    }
});
