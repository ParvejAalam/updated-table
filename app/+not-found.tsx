import { Link, Stack } from 'expo-router';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function NotFoundScreen() {
  return (
    <View className='bg-red-300'>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View>
       <Text className='p-[10px]'>Hello not found page</Text>
      </View>
      {/* <ThemedView style={styles.container}>
        <ThemedText type="title">This screen doesn't exist.</ThemedText>
        <Link href="/" style={styles.link}>
          <ThemedText type="link">Go to home screen!</ThemedText>
          <View className='bg-red-600 w-[100%] text-white'>
            hello page
          </View>
        </Link>
      </ThemedView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
