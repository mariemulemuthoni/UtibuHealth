import { StyleSheet } from 'react-native';

export const OrderHistoryScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },

    medicationItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },

    medicationImage: {
        width: 80,
        height: 80,
        borderRadius: 5,
        marginRight: 10,
    },

    medicationDetails: {
        flex: 1,
    },

    medicationName: {
        fontWeight: 'bold',
        marginBottom: 5,
    },

    medicationPrice: {
        fontWeight: 'bold',
    },

    orderAgainButton: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },

    orderAgainButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});
