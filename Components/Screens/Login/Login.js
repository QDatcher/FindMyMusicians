import {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const Login = () => {
  const [ username, setUsername] = useState('')
  const [ password, setPassword] = useState('')


  return (
    <View style={styles.layout}>
      <View>
        <Text style={styles.title}>Login</Text>
        <View style={styles.loginContainer}>
          <View style={styles.inputContainer}>
            <Text>Username</Text>
            <TextInput style={styles.textInput} />
          </View>
          <View style={styles.inputContainer}>
            <Text>Password</Text>
            <TextInput style={styles.textInput} />
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center'
  },
  loginContainer: {

  },
  title: {
    textAlign: 'center',
    fontSize: 50,
    marginTop: 30

  },
  inputContainer: {

  },
  textInput: {

  },
})

export default Login;