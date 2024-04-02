import { StyleSheet } from 'react-native';

export const DashboardScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },

    cardContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },

    card: {
        width: 150,
        height: 150,
        backgroundColor: '#f0f0f0',
        margin: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    avatar: {
        width: 80,
        height: 80,
        marginBottom: 10,
    },

    cardText: {
        fontWeight: 'bold',
        textAlign: 'center',
    },
});