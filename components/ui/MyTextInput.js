import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const MyTextInput = ({value, onChangeText, placeholder}) => {
  return (
    <View>
        <TextInput
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            style={styles.textInput}
        />
    </View>
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

export default MyTextInput