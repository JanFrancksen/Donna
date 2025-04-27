import { Pressable, StyleSheet, Text } from 'react-native';

interface ButtonProps {
  children: string;
}

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#6200ee',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
  },
});
