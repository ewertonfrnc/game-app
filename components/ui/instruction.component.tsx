import { StyleSheet, Text } from 'react-native';
import React, { FC, ReactNode } from 'react';

import { COLORS } from '../../constants/colors';

type InstructionProps = {
  children: ReactNode;
};

const Instruction: FC<InstructionProps> = ({ children }) => {
  return <Text style={styles.instructionText}>{children}</Text>;
};

export default Instruction;

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: 'open-sans',
    color: COLORS.accent500,
    fontSize: 24,
    textTransform: 'uppercase',
  },
});
