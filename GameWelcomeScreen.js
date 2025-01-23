import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';

const GameWelcomeScreen = ({ navigation, route }) => {
  const { sleepData } = route.params; // Retrieve sleepData passed from Login.js

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F4F7F8" />
      <Text style={styles.title}>Welcome to Sheep Dash</Text>
      <Text style={styles.subtitle}>Learn what the items do before you start!</Text>

      <View style={styles.itemContainer}>
        {/* Fence description */}
        <View style={styles.itemBox}>
          <View style={styles.iconBox}>
            {/* Add an icon for Fence here if you have one */}
            <Text style={styles.iconPlaceholder}>🏗️</Text> 
          </View>
          <Text style={styles.itemText}>Fence: Jump over them to increase your score and stay in the game.</Text>
        </View>

        {/* Pillow description */}
        <View style={styles.itemBox}>
          <View style={styles.iconBox}>
            {/* Add an icon for Pillow here if you have one */}
            <Text style={styles.iconPlaceholder}>💤</Text> 
          </View>
          <Text style={styles.itemText}>Pillow: Collect to slow the game down.</Text>
        </View>

        {/* Shears description */}
        <View style={styles.itemBox}>
          <View style={styles.iconBox}>
            {/* Add an icon for Shears here if you have one */}
            <Text style={styles.iconPlaceholder}>✂️</Text> 
          </View>
          <Text style={styles.itemText}>Shears: Avoid them, you will lose health!</Text>
        </View>

        {/* Revive description */}
        <View style={styles.itemBox}>
          <View style={styles.iconBox}>
            {/* Add an icon for Revives here if you have one */}
            <Text style={styles.iconPlaceholder}>❤️</Text> 
          </View>
          <Text style={styles.itemText}>Revive Points: Get them by getting more sleep at night! They will help you get higher scores through more retries.</Text>
        </View>
      </View>



      <TouchableOpacity
        style={styles.startButton}
        onPress={() => navigation.navigate('SheepJumpGame', { sleepData })}
      >
        <Text style={styles.startButtonText}>Start Game</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F7F8',  // Light gray background for consistency
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#800080',  // Purple title
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#28353B',  // Darker gray for subtitle
    marginBottom: 30,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  itemContainer: {
    width: '100%',
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  itemBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconBox: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  iconPlaceholder: {
    fontSize: 30,
  },
  itemText: {
    fontSize: 16,
    color: '#36454F',
    lineHeight: 22,
    flex: 1,
  },
  startButton: {
    backgroundColor: '#800080',  // Purple start button
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,  // Pill-shaped button for consistency
    marginTop: 30,
    elevation: 3, // Add slight elevation for shadow effect
  },
  startButtonText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
    letterSpacing: 1,
    textAlign: 'center',
  },
});

export default GameWelcomeScreen;
