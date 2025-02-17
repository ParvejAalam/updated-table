import { View, Image, StyleSheet, SafeAreaView, ScrollView, TextInput } from 'react-native'
import React from 'react'
import MyButton from '@/components/ui/MyButton'
import { useRouter } from 'expo-router'

export default function Login() {
    const router = useRouter()
    const handleLogin = () => {
        router.navigate("/signUp")
    }
  return (
     <SafeAreaView style={styles.container}>
          <ScrollView contentContainerStyle={styles.contentContainer}>
            <View>
              <Image
                source={require("@/assets/images/login.jpg")}
               // className="w-full h-full"
                resizeMode="cover"
               style={{
                width:"100%",
                height:300
               }}
            
              />
            </View>
    
            <TextInput
              placeholder="Enter Your Name"
              style={styles.textInput}
            />
            <TextInput
              placeholder="Enter Your Password"
              style={styles.textInput}
            />
           <MyButton title = "Login" onPress={handleLogin}/>
          </ScrollView>
        </SafeAreaView>
  
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    paddingVertical: 20,
  },
  textInput: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: '#d1d5db', // bg-gray-300
    borderRadius: 12,
    marginVertical: 8,
  },
});
