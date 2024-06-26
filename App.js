import { ImageBackground, StyleSheet, Text, View } from "react-native";
import GameStartScreen from "./screens/GameStartScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessCounts, setGuessCounts] = useState(0);

  function startNewGameHandler(){
    setUserNumber(null);
    setGuessCounts(0);
    
  }
  function sendedNumerhandler(sendedNumber) {
    setUserNumber(sendedNumber);
    setGameIsOver(false);
  }
  function gameoverHandler(numberOfGuess) {
    setGameIsOver(true);
    setGuessCounts(numberOfGuess);
  }
  let screen = <GameStartScreen onSendNumber={sendedNumerhandler} />;
  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameoverHandler} />
    );
  }
  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen userNumber={userNumber} roundsNumber={guessCounts} onStartNewGame={startNewGameHandler} />
    );
  }
  return (
    <LinearGradient
      style={styles.container}
      colors={["rgba(0,0,0,0.8)", "transparent"]}
    >
      <ImageBackground
        style={styles.container}
        source={require("./assets/back.jpg")}
        imageStyle={styles.backImage}
      >
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backImage: {
    opacity: 0.2,
  },
});
