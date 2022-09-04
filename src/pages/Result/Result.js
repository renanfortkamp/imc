import { View, Text, StyleSheet, Button } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Result({ route }) {

  const { imc } = route.params

  // LOCAL STORAGE

  // 1 - é assincrono - async await
  // 2 - salva no formato string somente
  // 3 - tratar os problemas

  async function saveResult() {

    // recupere o que tem memoria
    try {
      const results = await AsyncStorage.getItem('@my_imc:list_result_app')
      
      if (!results) {
        await AsyncStorage.setItem('@my_imc:list_result_app', JSON.stringify([imc]))
        alert('Salvo com sucesso')
      } else {
        const parseResult = JSON.parse(results)
        await AsyncStorage.setItem('@my_imc:list_result_app', JSON.stringify([...parseResult, imc]))
        alert('Salvo com sucesso')
      }
    } catch {
      alert('Houve um erro ao salvar')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>Resultado: {imc}</Text>

      {imc < 18.5 && <Text>Diagnóstico: Abaixo do peso</Text>}
      {(imc >= 18.5 && imc <= 24.9) && <Text>Diagnóstico: Peso normal</Text>}
      {(imc >= 24.9 && imc <= 29.9) && <Text>Diagnóstico: sobrepeso</Text>}
      {(imc >= 30 && imc <= 34.9) && <Text>Diagnóstico: obesidade I</Text>}
      {(imc >= 35 && imc <= 39.9) && <Text>Diagnóstico: obesidade II</Text>}
      {(imc > 40) && <Text>Diagnóstico: obesidade mórbida</Text>}

      <Button title='Salvar resultado' onPress={saveResult} />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  resultText: {
    fontSize: 24,
    color: '#01C0A6',
    fontWeight: 'bold'
  }
})