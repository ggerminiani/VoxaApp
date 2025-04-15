import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const meetings = [
  {id: '1', title: 'Reunião Projeto X', status: 'Transcrito'},
  {id: '2', title: 'Reunião Equipe', status: 'Em processamento'},
];

const MeetingsListScreen = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={meetings}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() =>
              navigation.navigate('MeetingDetails', {meetingId: item.id})
            }>
            <Text style={styles.title}>{item.title}</Text>
            <Text>Status: {item.status}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20},
  item: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  title: {fontSize: 18, fontWeight: 'bold'},
});

export default MeetingsListScreen;
