import { StyleSheet } from 'react-native';

export const UserProfileScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },

    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 30,
    },

    userInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },

    label: {
        fontWeight: 'bold',
        marginRight: 10,
        paddingBottom: 20,
        fontSize: 20,
    },

    value: {
        flex: 1,
        paddingBottom: 20,
        fontSize: 20,
    },
});