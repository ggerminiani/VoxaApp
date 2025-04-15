import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {RootStackParamList} from '../../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>VOXA</Text>
      <TextInput placeholder="E-mail" style={styles.input} />
      <TextInput placeholder="Senha" style={styles.input} secureTextEntry />
      <Button title="Entrar" onPress={() => navigation.replace('Main')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', padding: 20},
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {height: 40, borderBottomWidth: 1, marginBottom: 20},
});

export default LoginScreen;
