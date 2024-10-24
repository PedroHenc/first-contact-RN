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
  userName: {
    fontSize: 16,
    fontWeight: '800',
    flex: 1,
  },
});

export default function Notifications() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.userName}> Notify</Text>

        <DrawerToggleButton />
      </View>
    </View>
  );
}
