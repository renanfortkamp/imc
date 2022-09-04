import { useState } from 'react'
import {
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';


export default function Home({ navigation }) {
  const [altura, mudarAltura] = useState('')
  const [peso, mudarPeso] = useState('')

  function showResult() {
    /* !Number(altura)  é igual altura === '0' || altura === ''  */
    
    if (Number(altura) < 0.45) {
      alert('Digite uma altura válida')
    } else if(Number(peso) < 2.5) {
      alert('Digite um peso válido')
    } else {
      const imc = Number(peso) / (Number(altura) * Number(altura))

      navigation.navigate(
        'Result',
        {
          imc: imc.toFixed(2)
        }
      )
    }
  }

  function resetar() {
    mudarAltura('')
    mudarPeso('')
  }

  return (

    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#01C0A6" />
      <View style={styles.box}>

        <Text style={styles.title}>IMC</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder='Sua altura'
            style={styles.input}
            keyboardType="number-pad"
            value={altura}
            onChangeText={mudarAltura}
          />
          <Text style={styles.unityText}>M</Text>
        </View>
      
        <View style={styles.inputContainer}>
          <TextInput
            placeholder='Seu peso'
            style={styles.input}
            keyboardType="number-pad"
            value={peso}
            onChangeText={mudarPeso}
          />
          <Text style={styles.unityText}>KG</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={showResult}>
          <Text style={styles.buttonText}>CALCULAR IMC</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={resetar}>
          <Text style={styles.buttonText}>Resetar</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#01C0A6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: '#FFF',
    height: '50%',
    width: '80%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 32,
    color: '#01C0A6',
    fontWeight: 'bold'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  unityText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#01C0A6',
    marginLeft: 5,
    width: '15%',
  },
  input: {
    height: 40,
    width: '70%',
    borderColor: '#999',
    borderWidth: 1,
    marginVertical: 10,
    borderRadius: 5,
    textAlign: 'center'
  },
  button: {
    height: 40,
    width: '50%',
    backgroundColor: '#01C0A6',
    borderRadius: 50,
    justifyContent: 'center',

    marginTop: 20
  },
  buttonText: {
    fontSize: 16,
    color: '#FFF',
    alignSelf: 'center'
  }
});
