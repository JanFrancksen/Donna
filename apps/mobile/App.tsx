/** biome-ignore-all lint/style/useFilenamingConvention: <explanation> */
/** biome-ignore-all lint/suspicious/noEmptyBlockStatements: <explanation> */
import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { Button } from './components/ui/button';

export default function App() {
  const handlePress = () =>
    Alert.alert('Button pressed', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
      { text: 'OK', onPress: () => {} },
    ]);

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button onPress={handlePress}>Show Alert</Button>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
});
