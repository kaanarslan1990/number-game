import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Title from "../components/Title";
import ComputerNumber from "../components/ComputerNumber";

export default function GameScreen({ userNumber }) {
  const initialGuess = generateNumber(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess)

  function generateNumber(min, max, exclude) {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;

    if(randomNumber=== exclude){
       return randomNumber(min,max,exclude)
    } else {
        return randomNumber
    }
  }
  return (
    <View style={styles.container}>
      <Title>Computer Guess</Title>
      <ComputerNumber>{currentGuess}</ComputerNumber>
      <View>
        <Text>Higher or Lower?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    marginTop: 20,
  },
});
