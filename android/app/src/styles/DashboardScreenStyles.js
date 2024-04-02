import { StyleSheet } from 'react-native';

export const DashboardScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },

    sidebar: {
        width: 200,
        backgroundColor: 'grey',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingTop: 30,
    },

    sidebarToggle: {
        padding: 10,
        fontWeight: 'bold',
        fontSize: 20,
    },

    sidebarContent: {
        marginTop: 20,
    },

    hiddenSidebarContent: {
        display: 'none',
    },

    sidebarLink: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderBottomWidth: 3,
        borderBottomColor: '#ccc',
        paddingBottom: 20,
        fontSize: 20,
    },

    mainContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});