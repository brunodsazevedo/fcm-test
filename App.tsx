import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getFcmToken, registerListenerWithFCM } from './src/utils/fcmHelper';

export default function App() {
  useEffect(() => {
    getFcmToken()
  }, [])

  useEffect(() => {
    const unsubscribe = registerListenerWithFCM();
    return unsubscribe;
  }, [])

  return (
    <View style={styles.container}>
      <Text>FCM Test App!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
