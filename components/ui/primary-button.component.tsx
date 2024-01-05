import { FC, ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { COLORS } from '../../constants/colors';

type PrimaryButtonProps = {
  children: ReactNode;
  onPress: () => void;
};

const PrimaryButton: FC<PrimaryButtonProps> = ({ children, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) =>
        pressed ? [styles.btnContainer, styles.pressed] : styles.btnContainer
      }
    >
      <View>
        <Text style={styles.btnText}>{children}</Text>
      </View>
    </Pressable>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: COLORS.primary500,
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
    margin: 4,
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});
