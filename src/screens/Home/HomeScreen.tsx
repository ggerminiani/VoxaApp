import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const HomeScreen = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao VOXA</Text>
      <Button
        title="Iniciar Nova Reunião"
        onPress={() => navigation.navigate('Meetings')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  title: {fontSize: 24, marginBottom: 20},
});

export default HomeScreen;
