import { StyleSheet } from 'react-native';

export const LandingScreenStyles = StyleSheet.create({
      container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
      },

      logo: {
            width: 370,
            height: 210,
            marginBottom: 50,
      },

      heading: {
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 40,
      },

      button: {
            backgroundColor: 'blue',
            width: '80%',
            height: 40,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 30,
      },

      buttonText: {
            color: 'white',
            fontWeight: 'bold',
      },
});