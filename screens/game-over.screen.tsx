import React, { FC } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import Title from '../components/ui/title.component';
import { COLORS } from '../constants/colors';
import PrimaryButton from '../components/ui/primary-button.component';

type GameOverScreenProps = {
  roundsNumber: number;
  userNumber: number | undefined;
  onStartNewGame: () => void;
};

const GameOverScreen: FC<GameOverScreenProps> = ({
  roundsNumber,
  userNumber,
  onStartNewGame,
}) => {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over!</Title>

      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/success.png')}
        />
      </View>

      <View>
        <Text style={styles.summaryText}>
          Seu telefone precisou de
          <Text style={styles.highlightText}> {roundsNumber} </Text> rodadas
          para adivinhar o número
          <Text style={styles.highlightText}> {userNumber} </Text>.
        </Text>

        <PrimaryButton onPress={onStartNewGame}>Novo Jogo</PrimaryButton>
      </View>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    overflow: 'hidden',
    borderWidth: 3,
    borderRadius: 150,
    borderColor: COLORS.primary800,
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
  },
  highlightText: {
    fontFamily: 'open-sans-bold',
    color: COLORS.primary500,
  },
});
