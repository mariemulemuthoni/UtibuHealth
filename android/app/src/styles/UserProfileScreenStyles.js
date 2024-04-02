import { StyleSheet } from 'react-native';

export const UserProfileScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },

    userProfileContent: {
        marginVertical: 20,
    },

    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },

    userInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30,
    },

    iconContainer: {
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },

    icon: {
        fontSize: 30,
    },

    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 30,
    },

    value: {
        fontSize: 16,
        marginLeft: 30,
    },
});