import { FC, ReactNode } from 'react';
import { StyleSheet, Text } from 'react-native';

type TitleProps = {
  children: ReactNode;
};

const Title: FC<TitleProps> = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    textAlign: 'center',
    borderWidth: 2,
    color: 'white',
    borderColor: 'white',
    padding: 12,
    textTransform: 'uppercase',
    maxWidth: '80%',
  },
});
