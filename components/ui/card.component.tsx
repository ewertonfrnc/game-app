import { StyleSheet, Text, View } from 'react-native';
import { FC, ReactNode } from 'react';

import { COLORS } from '../../constants/colors';

type CardProps = {
  children: ReactNode;
};

const Card: FC<CardProps> = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    borderRadius: 8,
    marginHorizontal: 24,
    marginTop: 36,
    padding: 16,
    backgroundColor: COLORS.primary800,
    // shadow for android
    elevation: 4,
    // shadow for ios
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
