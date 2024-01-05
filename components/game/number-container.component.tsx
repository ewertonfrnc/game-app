import { FC, ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../../constants/colors';

type NumberContainerProps = {
  children: ReactNode;
};

const NumberContainer: FC<NumberContainerProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    borderWidth: 4,
    borderColor: COLORS.accent500,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    fontFamily: 'open-sans-bold',
    fontSize: 36,
    color: COLORS.accent500,
  },
});
