import { useState, useCallback } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';

import GameScreen from './screens/game.screen';
import GameOverScreen from './screens/game-over.screen';
import StartGameScreen from './screens/start-game.screen';

import { COLORS } from './constants/colors';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [userNumber, setUserNumber] = useState<number>();
  const [guessRounds, setGuessRounds] = useState<number>(0);
  const [gameIsOver, setGameIsOver] = useState<boolean>(true);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;
  else onLayoutRootView();

  const pickedNumberHandler = (pickedNumber: number) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  };

  const gameOverHandler = (numOfRounds: number) => {
    setGameIsOver(true);
    setGuessRounds(numOfRounds);
  };

  const startNewGameHandler = () => {
    setUserNumber(undefined);
    setGuessRounds(0);
  };

  return (
    <>
      <StatusBar style='inverted' />

      <LinearGradient
        colors={[COLORS.primary700, COLORS.accent500]}
        style={styles.rootScreen}
      >
        <ImageBackground
          source={require('./assets/images/background.png')}
          resizeMode='cover'
          imageStyle={styles.backgroundImage}
          style={styles.rootScreen}
        >
          <SafeAreaView style={styles.rootScreen}>
            {gameIsOver && userNumber ? (
              <GameOverScreen
                roundsNumber={guessRounds}
                userNumber={userNumber}
                onStartNewGame={startNewGameHandler}
              />
            ) : userNumber ? (
              <GameScreen
                userNumber={userNumber}
                onGameOver={gameOverHandler}
              />
            ) : (
              <StartGameScreen onConfirm={pickedNumberHandler} />
            )}
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
