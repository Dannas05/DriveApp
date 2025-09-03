import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

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
    <View style={styles.container}>
     
     <Text style = {styles.response}> {feedback}</Text> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

    response: {
     fontSize: 28,
     color: 'red',

    },
});
