import { useState } from 'react';
import { Alert, StyleSheet, TextInput, View } from 'react-native';

import PrimaryButton from '../components/ui/primary-button.component';
import Instruction from '../components/ui/instruction.component';
import Title from '../components/ui/title.component';
import Card from '../components/ui/card.component';

import { COLORS } from '../constants/colors';

type StartGameScreenProps = {
  onConfirm: (value: number) => void;
};

export default function StartGameScreen({ onConfirm }: StartGameScreenProps) {
  const [enteredNumber, setEnteredNumber] = useState('');

  const numberInputHandler = (enteredNumber: string) =>
    setEnteredNumber(enteredNumber);

  const resetInputHandler = () => setEnteredNumber('');

  const confirmInputHandler = () => {
    const chosenNumber = +enteredNumber;

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Número inválido!', 'Informe um valor entre 1 e 99.', [
        { text: 'blz!', style: 'destructive', onPress: resetInputHandler },
      ]);
      return;
    }

    onConfirm(chosenNumber);
  };

  return (
    <View style={styles.rootContainer}>
      <Title>Adivinhe o número</Title>

      <Card>
        <Instruction>Informe um número</Instruction>

        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType='number-pad'
          autoCapitalize='none'
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={numberInputHandler}
        />

        <View style={styles.btnGroup}>
          <View style={styles.btnContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reiniciar</PrimaryButton>
          </View>

          <View style={styles.btnContainer}>
            <PrimaryButton onPress={confirmInputHandler}>
              Confirmar
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
  },
  numberInput: {
    width: 50,
    height: 50,
    fontSize: 32,
    fontWeight: 'bold',
    borderBottomColor: COLORS.accent500,
    borderBottomWidth: 2,
    color: COLORS.accent500,
    marginVertical: 8,
    textAlign: 'center',
  },
  btnGroup: {
    flexDirection: 'row',
  },
  btnContainer: {
    flex: 1,
  },
});
