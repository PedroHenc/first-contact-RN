import { Image, StyleSheet, Text, View } from 'react-native';
import { DrawerToggleButton } from '@react-navigation/drawer';
import React from 'react';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 32,
    backgroundColor: '#ffff',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  user: {
    flex: 1,
    justifyContent: 'center',
  },
  hi: {
    fontSize: 14,
  },
  userName: {
    fontSize: 16,
    fontWeight: '800',
  },
});

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://github.com/pedroHenc.png' }}
          style={styles.img}
        />

        <View style={styles.user}>
          <Text style={styles.hi}> Olá</Text>
          <Text style={styles.userName}> 000</Text>
        </View>

        <DrawerToggleButton />
      </View>
    </View>
  );
}
