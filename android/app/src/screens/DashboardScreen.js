import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { DashboardScreenStyles } from '../styles/DashboardScreenStyles';
import { useNavigation } from '@react-navigation/native';

const DashboardScreen = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <View style={DashboardScreenStyles.container}>
            {/* Sidebar */}
            <View style={DashboardScreenStyles.sidebar}>
                <TouchableOpacity>
                    <Text style={DashboardScreenStyles.sidebarToggle}>UTIBU HEALTH</Text>
                </TouchableOpacity>
                <View style={isSidebarOpen ? DashboardScreenStyles.sidebarContent : DashboardScreenStyles.hiddenSidebarContent}>
                    <TouchableOpacity style={DashboardScreenStyles.sidebarLink}>
                        <Text>User Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={DashboardScreenStyles.sidebarLink}>
                        <Text>Order Medication</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={DashboardScreenStyles.sidebarLink}>
                        <Text>Shopping Cart</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={DashboardScreenStyles.sidebarLink}>
                        <Text>Order History</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={DashboardScreenStyles.sidebarLink}>
                        <Text>Payment Statements</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Main Content */}
            <View style={DashboardScreenStyles.mainContent}>
                <Text>Products Page</Text>
                {/* Add product listing and order functionality here */}
            </View>
        </View>
    );
};

export default DashboardScreen;
