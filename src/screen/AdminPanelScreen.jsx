import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import { PieChart } from 'react-native-chart-kit';

const AdminPanelScreen = () => {
  const [userStats, setUserStats] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the backend API
    axios.get('http://10.0.2.2:3000/api/admin/user-stats')
      .then(response => {
        setUserStats(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching user stats:', error);
        setLoading(false);
      });
  }, []);

  // Pie chart data
  const pieData = [
    {
      name: 'Active Users',
      population: userStats.activeUsers || 0,
      color: '#00FF00',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Inactive Users',
      population: userStats.inactiveUsers || 0,
      color: '#FF0000',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Admin Panel</Text>

      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <>
          <Text>Total Users: {userStats.userCount}</Text>
          <Text>Active Users: {userStats.activeUsers}</Text>
          <Text>Inactive Users: {userStats.inactiveUsers}</Text>

          <PieChart
            data={pieData}
            width={400}
            height={220}
            chartConfig={{
              backgroundColor: '#e26a00',
              backgroundGradientFrom: '#fb8c00',
              backgroundGradientTo: '#ff8c00',
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="15"
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default AdminPanelScreen;