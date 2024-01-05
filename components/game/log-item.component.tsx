import { StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import { COLORS } from '../../constants/colors';

type LogItemProps = {
  roundNumber: number;
  guess: number;
};

const LogItem: FC<LogItemProps> = ({ roundNumber, guess }) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>
        # {`${roundNumber < 10 ? `0${roundNumber}` : roundNumber}`}
      </Text>
      <Text style={styles.itemText}>Palpite do oponente: {guess}</Text>
    </View>
  );
};

export default LogItem;

const styles = StyleSheet.create({
  listItem: {
    borderColor: COLORS.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: COLORS.accent500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  itemText: {
    fontFamily: 'open-sans',
  },
});
