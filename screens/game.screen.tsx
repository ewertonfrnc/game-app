import { FC, useState, useEffect } from 'react';
import { Alert, FlatList, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import PrimaryButton from '../components/ui/primary-button.component';
import Instruction from '../components/ui/instruction.component';
import Title from '../components/ui/title.component';
import Card from '../components/ui/card.component';

import NumberContainer from '../components/game/number-container.component';
import LogItem from '../components/game/log-item.component';

type GameScreenProps = {
  userNumber: number;
  onGameOver: (numOfRounds: number) => void;
};

const generateRandomBetween = (
  min: number,
  max: number,
  exclude: number
): number => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) return generateRandomBetween(min, max, exclude);
  else return rndNum;
};

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen: FC<GameScreenProps> = ({ userNumber, onGameOver }) => {
  const initialGuess = generateRandomBetween(
    minBoundary,
    maxBoundary,
    userNumber
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) onGameOver(guessRounds.length);
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  const nextGuessHandler = (direction: string) => {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert('Não minta!', 'Você sabe que isso é errado!', [
        { text: 'Eu sei...', style: 'cancel' },
      ]);
      return;
    }

    if (direction === 'lower') maxBoundary = currentGuess;
    else minBoundary = currentGuess + 1;

    const newRandomNum = generateRandomBetween(1, 100, currentGuess);
    setCurrentGuess(newRandomNum);
    setGuessRounds((prevState) => [newRandomNum, ...prevState]);
  };

  const guessRoundsListLength = guessRounds.length;

  return (
    <View style={styles.screen}>
      <Title>Vez do oponente</Title>

      <NumberContainer>{currentGuess}</NumberContainer>

      <Card>
        <Instruction>Maior ou menor?</Instruction>

        <View style={styles.btnGroup}>
          <View style={styles.btnContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
              <Ionicons name='md-remove' size={24} color='white' />
            </PrimaryButton>
          </View>

          <View style={styles.btnContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
              <Ionicons name='md-add' size={24} color='white' />
            </PrimaryButton>
          </View>
        </View>
      </Card>

      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={({ item, index }) => (
            <LogItem roundNumber={guessRoundsListLength - index} guess={item} />
          )}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
    alignItems: 'center',
  },
  instructionText: {
    marginBottom: 12,
  },
  btnGroup: {
    flexDirection: 'row',
  },
  btnContainer: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});
