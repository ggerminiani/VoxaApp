import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const MeetingDetailsScreen = ({route}: any) => {
  const {meetingId} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes da Reunião {meetingId}</Text>
      <Text>Aqui vai o áudio e transcrição.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {fontSize: 24, marginBottom: 20},
});

export default MeetingDetailsScreen;
