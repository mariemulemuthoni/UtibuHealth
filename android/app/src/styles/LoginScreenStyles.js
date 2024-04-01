import { StyleSheet } from 'react-native';

export const LoginScreenStyles = StyleSheet.create({
      container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
      },

      heading: {
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 20,
      },

      input: {
            width: '80%',
            height: 40,
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 5,
            marginBottom: 20,
            paddingHorizontal: 10,
      },

      button: {
            backgroundColor: 'blue',
            width: '80%',
            height: 40,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
      },

      buttonText: {
            color: 'white',
            fontWeight: 'bold',
      },
});