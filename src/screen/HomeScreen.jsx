
// import React, { useState, useEffect } from 'react';
// import { View, Text, TouchableOpacity, Modal, FlatList, StyleSheet, Alert } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { useUser } from '../assets/UserContext';
// import LinearGradient from 'react-native-linear-gradient';
// import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons

// const HomeScreen = () => {
//   const { user, previousUsers, login, updatePreviousUsers } = useUser();
//   const navigation = useNavigation();
//   const [modalVisible, setModalVisible] = useState(false);
//   const [isSwitchAccount, setIsSwitchAccount] = useState(false);

//   useEffect(() => {
//     if (user && !previousUsers.some((u) => u.username === user.username)) {
//       updatePreviousUsers(user);
//     }
//   }, [user, previousUsers, updatePreviousUsers]);

//   const handleSelectAccount = (account) => {
//     login(account);
//     Alert.alert('Switched Account', `You are now logged in as ${account.username}`);
//     setModalVisible(false);
//     setIsSwitchAccount(false);
//   };

//   const handleAddAccount = () => {
//     setModalVisible(false);
//     navigation.navigate('Login');
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.welcomeText}>{user ? `Welcome, ${user.username}!` : 'User not logged in'}</Text>

//       {/* Button to Open Account Options */}
//       <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.plusButton}>
//         <Text style={styles.plusIcon}>+</Text>
//       </TouchableOpacity>

//       {/* Modal for Switching Accounts */}
//       <Modal
//         visible={modalVisible}
//         animationType="slide"
//         transparent={true}
//         onRequestClose={() => {
//           if (isSwitchAccount) {
//             setIsSwitchAccount(false);
//           } else {
//             setModalVisible(false);
//           }
//         }}
//       >
//         <View style={styles.modalContainer}>
//           <LinearGradient colors={["#59ABC9", "#59ABC9"]} style={styles.modalContent}>
//             <Text style={styles.switchTitle}>{isSwitchAccount ? 'Switch Account' : 'Account Options'}</Text>

//             {!isSwitchAccount ? (
//               <>
//                 <TouchableOpacity onPress={() => setIsSwitchAccount(true)} style={styles.optionButton}>
//                   <Text style={styles.optionText}>Switch Account</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={handleAddAccount} style={styles.optionButton}>
//                   <Text style={styles.optionText}>Add Account</Text>
//                 </TouchableOpacity>
//               </>
//             ) : (
//               <FlatList
//                 data={previousUsers}
//                 keyExtractor={(item, index) => index.toString()}
//                 renderItem={({ item }) => (
//                   <TouchableOpacity onPress={() => handleSelectAccount(item)} style={styles.accountItem}>
//                     <View style={styles.profileContainer}>
//                       <View style={styles.profileIcon}>
//                         <Text style={styles.profileText}>{item.username.charAt(0).toUpperCase()}</Text>
//                       </View>
//                       <Text style={styles.accountText}>{item.username}</Text>
//                     </View>
//                     {/* Switch Icon placed next to the username */}
//                     <TouchableOpacity onPress={() => handleSelectAccount(item)} style={styles.switchButton}>
//                       {/* <Ionicons name="swap-horizontal" size={24} color="#59ABC9" /> */}
//                                   <Icon name="refresh" size={24} color="#59ABC9"/>
                      
//                     </TouchableOpacity>
//                   </TouchableOpacity>
//                 )}
//                 ListEmptyComponent={<Text style={styles.noAccounts}>No previous accounts found.</Text>}
//               />
//             )}

//             {/* Cancel Button with New Styling */}
//             <TouchableOpacity onPress={() => {
//               if (isSwitchAccount) {
//                 setIsSwitchAccount(false);
//               } else {
//                 setModalVisible(false);
//               }
//             }} style={styles.cancelButton}>
//               <Text style={styles.cancelText}>{isSwitchAccount ? 'Back' : 'Close'}</Text>
//             </TouchableOpacity>
//           </LinearGradient>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   welcomeText: {
//     fontSize: 22,
//     fontWeight: '600',
//     marginBottom: 20,
//     color: '#59ABC9',
//   },
//   plusButton: {
//     padding: 18,
//     backgroundColor: '#59ABC9',
//     borderRadius: 50,
//     position: 'absolute',
//     bottom: 30,
//     right: 30,
//     elevation: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.15,
//     shadowRadius: 6,
//   },
//   plusIcon: {
//     fontSize: 36,
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContent: {
//     width: 360,
//     padding: 20,
//     borderRadius: 12,
//     alignItems: 'center',
//     elevation: 10,
//   },
//   switchTitle: {
//     fontSize: 24,
//     fontWeight: '700',
//     marginBottom: 25,
//     color: '#fff',
//   },
//   optionButton: {
//     padding: 15,
//     width: '100%',
//     alignItems: 'center',
//     backgroundColor: '#59ABC9',
//     borderRadius: 8,
//     marginVertical: 8,
//     elevation: 2,
//   },
//   optionText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: 'white',
//   },
//   accountItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     paddingVertical: 15,
//     paddingHorizontal: 20,
//     marginVertical: 5,
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   profileContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   profileIcon: {
//     backgroundColor: '#59ABC9',
//     borderRadius: 30,
//     width: 40,
//     height: 40,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 10,
//   },
//   profileText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: 'white',
//   },
//   accountText: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#59ABC9',
//   },
//   switchButton: {
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F0F0F0',
//     borderRadius: 8,
//     marginLeft: 15,
//   },
//   cancelButton: {
//     marginTop: 20,
//     padding: 12,
//     backgroundColor: '#D1D1D1', // Neutral grey for the cancel button
//     borderRadius: 8,
//     width: '100%',
//     alignItems: 'center',
//   },
//   cancelText: {
//     fontSize: 18,
//     color: '#595959', // Darker grey for better contrast
//     fontWeight: '600',
//   },
//   noAccounts: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#7f8c8d',
//     textAlign: 'center',
//     marginTop: 20,
//   },
// });

// export default HomeScreen;
//
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useUser } from '../assets/UserContext';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons

const HomeScreen = () => {
  const { user, previousUsers, login, updatePreviousUsers } = useUser();
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [isSwitchAccount, setIsSwitchAccount] = useState(false);

  useEffect(() => {
    if (user && !previousUsers.some((u) => u.username === user.username)) {
      updatePreviousUsers(user);
    }
  }, [user, previousUsers, updatePreviousUsers]);

  const handleSelectAccount = (account) => {
    login(account);
    Alert.alert('Switched Account', `You are now logged in as ${account.username}`);
    setModalVisible(false);
    setIsSwitchAccount(false);
  };

  const handleAddAccount = () => {
    setModalVisible(false);
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>{user ? `Welcome, ${user.username}!` : 'User not logged in'}</Text>

      {/* Button to Open Account Options */}
      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.plusButton}>
        <Text style={styles.plusIcon}>+</Text>
      </TouchableOpacity>

      {/* Modal for Switching Accounts */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
          if (isSwitchAccount) {
            setIsSwitchAccount(false);
          } else {
            setModalVisible(false);
          }
        }}
      >
        <View style={styles.modalContainer}>
          <LinearGradient colors={["#59ABC9", "#59ABC9"]} style={styles.modalContent}>
            <Text style={styles.switchTitle}>{isSwitchAccount ? 'Switch Account' : 'Account Options'}</Text>

            {!isSwitchAccount ? (
              <>
                <TouchableOpacity onPress={() => setIsSwitchAccount(true)} style={styles.optionButton}>
                  <Text style={styles.optionText}>Switch Account</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleAddAccount} style={styles.optionButton}>
                <Icon name="plus" size={20} color="white" style={{ marginRight: 8 }} />

                  <Text style={styles.optionText}>Add Account</Text>
                </TouchableOpacity>
              </>
            ) : (
              <FlatList
                data={previousUsers}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => handleSelectAccount(item)} style={styles.accountItem}>
                    <View style={styles.profileContainer}>
                      <View style={styles.profileIcon}>
                        <Text style={styles.profileText}>{item.username.charAt(0).toUpperCase()}</Text>
                      </View>
                      <Text style={styles.accountText}>{item.username}</Text>
                    </View>
                    {/* Switch Icon placed next to the username */}
                    <TouchableOpacity onPress={() => handleSelectAccount(item)} style={styles.switchButton}>
                      <Icon name="user-circle" size={24} color="#59ABC9"/>
                    </TouchableOpacity>
                  </TouchableOpacity>
                )}
                ListEmptyComponent={<Text style={styles.noAccounts}>No previous accounts found.</Text>}
              />
            )}

            {/* Cancel Button with Cancel Icon */}
            <TouchableOpacity 
              onPress={() => {
                if (isSwitchAccount) {
                  setIsSwitchAccount(false);
                } else {
                  setModalVisible(false);
                }
              }} 
              style={styles.cancelButton}
            >
                <Text style={styles.cancelText}>Cancel</Text>

              {/* Cancel Icon */}
              <Icon name="times" size={30} color="#595959" />
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </Modal>
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
  welcomeText: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 20,
    color: '#59ABC9',
  },
  plusButton: {
    padding: 18,
    backgroundColor: '#59ABC9',
    borderRadius: 50,
    position: 'absolute',
    bottom: 30,
    right: 30,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
  plusIcon: {
    fontSize: 36,
    color: '#fff',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 360,
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 10,
  },
  switchTitle: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 25,
    color: '#fff',
  },
  // optionButton: {
  //   padding: 15,
  //   width: '100%',
  //   alignItems: 'center',
  //   backgroundColor: '#59ABC9',
  //   borderRadius: 8,
  //   marginVertical: 8,
  //   elevation: 2,
  // },
  optionButton: {
    flexDirection: 'row', // Align icon and text in a row
    padding: 15,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center', // Center content
    backgroundColor: '#59ABC9',
    borderRadius: 8,
    marginVertical: 8,
    elevation: 2,
  },
  optionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  accountItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 5,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileIcon: {
    backgroundColor: '#59ABC9',
    borderRadius: 30,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  profileText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  accountText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#59ABC9',
  },
  switchButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    marginLeft: 15,
  },
  
  cancelButton: {
    flexDirection: 'row', // Align icon and text in a row
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    padding: 12,
    backgroundColor: '#D1D1D1', // Neutral grey for the cancel button
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  cancelText: {
    fontSize: 18,
    color: '#595959', // Darker grey for better contrast
    fontWeight: '600',
    marginLeft: 8, // Space between icon and text
  },
  noAccounts: {
    fontSize: 16,
    fontWeight: '600',
    color: '#7f8c8d',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default HomeScreen;
