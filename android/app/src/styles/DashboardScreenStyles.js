import { StyleSheet } from 'react-native';

export const DashboardScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    sidebar: {
        width: 200,
        backgroundColor: '#f0f0f0',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingTop: 30,
    },
    sidebarToggle: {
        padding: 10,
        fontWeight: 'bold',
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
        paddingBottom: 10,
    },
    mainContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});