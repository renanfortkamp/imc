import { View, Text } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

export default function List() {
  const [result, setResult] = useState([])

  const getResult = async () => {
    const values = await AsyncStorage.getItem('@my_imc:list_result_app') 
    const parseValues = JSON.parse(values)
    setResult(parseValues)
  }

  getResult()
  
  return (
    <View>
      {result.map(item=> <Text>{item}</Text>)}
    </View>
  )
}
