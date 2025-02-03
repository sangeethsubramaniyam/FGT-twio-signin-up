
// import React, { useContext, useState, useEffect } from 'react';
// import { View, Text, TouchableOpacity, Modal, StyleSheet, Alert, TextInput, FlatList } from 'react-native';
// import { UserContext } from '../assets/UserContext'; // Correctly importing UserContext
// import axios from 'axios';

// const HomeScreen = ({ navigation }) => {
//   const { user, previousUsers, login, updatePreviousUsers } = useContext(UserContext);

//   const [modalVisible, setModalVisible] = useState(false);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [isSwitchAccount, setIsSwitchAccount] = useState(false); // To track whether we're switching accounts or logging in

//   useEffect(() => {
//     if (user && !previousUsers.some((u) => u.username === user.username)) {
//       updatePreviousUsers(user); // Add new user to previousUsers
//     }
//   }, [user, previousUsers, updatePreviousUsers]);

//   const handlePasswordSubmit = async () => {
//     if (!password) {
//       Alert.alert('Input Error', 'Please enter a password.');
//       return;
//     }

//     setLoading(true);

//     try {
//       const loginResponse = await axios.post('http://10.0.2.2:3000/login', {
//         username: selectedUser.username,
//         password,
//       });

//       if (loginResponse.data.message === 'Login successful') {
//         login(selectedUser);
//         Alert.alert('Success', `Logged in as ${selectedUser.username}`);
//         setModalVisible(false); // Close modal
//         setPassword(''); // Reset password field
//         setSelectedUser(null); // Clear selected user
//       } else {
//         Alert.alert('Login Failed', 'Incorrect password');
//       }
//     } catch (error) {
//       console.error(error);
//       Alert.alert('Error', 'Something went wrong during login.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const switchToUser = (user) => {
//     login(user); // Directly switch to the selected user
//     Alert.alert('Switched Account', `You are now logged in as ${user.username}`);
//     setModalVisible(false); // Close the modal
//   };

//   const renderUserOption = (item, isSwitchAccount = false) => (
//     <TouchableOpacity
//       key={item.username}
//       style={styles.userOptionButton}
//       onPress={() => {
//         if (isSwitchAccount) {
//           switchToUser(item);
//         } else {
//           setSelectedUser(item);
//         }
//       }}
//     >
//       <Text style={styles.userOptionButtonText}>{item.username}</Text>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={{ flex: 1, padding: 20 }}>
//       <Text style={styles.welcomeText}>
//         {user ? `Welcome, ${user.username}` : 'User not logged in'}
//       </Text>

//       {/* Footer */}
//       <View style={styles.footer}>
//         <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.plusButton}>
//           <Text style={styles.plusButtonText}>+</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Unified Modal */}
//       <Modal
//         visible={modalVisible}
//         animationType="slide"
//         transparent={true}
//         onRequestClose={() => setModalVisible(false)}
//       >
//         <View style={styles.modalBackground}>
//           <View style={styles.modalContainer}>
//             <Text style={styles.modalTitle}>
//               {isSwitchAccount ? 'Switch Account' : 'Login Existing Account'}
//             </Text>

//             <FlatList
//               data={previousUsers || []}
//               renderItem={({ item }) => renderUserOption(item, isSwitchAccount)}
//               keyExtractor={(item) => item.username}
//               style={styles.userList}
//             />

//             {/* Show password prompt if logging in */}
//             {!isSwitchAccount && selectedUser && (
//               <View style={styles.passwordPrompt}>
//                 <Text>Enter password for {selectedUser.username}</Text>
//                 <TextInput
//                   style={styles.input}
//                   value={password}
//                   onChangeText={setPassword}
//                   secureTextEntry
//                   placeholder="Password"
//                 />
//                 <TouchableOpacity
//                   onPress={handlePasswordSubmit}
//                   style={styles.button}
//                   disabled={loading}
//                 >
//                   <Text style={styles.buttonText}>
//                     {loading ? 'Logging in...' : 'Submit'}
//                   </Text>
//                 </TouchableOpacity>
//               </View>
//             )}

//             {/* Add New Account Button */}
//             <TouchableOpacity
//               style={styles.addAccountButton}
//               onPress={() => {
//                 setModalVisible(false);
//                 navigation.navigate('Signup'); // Navigate to Signup screen
//               }}
//             >
//               <Text style={styles.addAccountButtonText}>Add New Limat Account</Text>
//             </TouchableOpacity>

//             {/* Switch Account Button */}
//             {!isSwitchAccount && (
//               <TouchableOpacity
//                 style={styles.switchAccountButton}
//                 onPress={() => setIsSwitchAccount(true)}
//               >
//                 <Text style={styles.switchAccountButtonText}>Switch Account</Text>
//               </TouchableOpacity>
//             )}

//             {/* Close Modal Button */}
//             <TouchableOpacity
//               style={styles.modalCloseButton}
//               onPress={() => {
//                 setModalVisible(false);
//                 setSelectedUser(null); // Reset selected user
//                 setPassword(''); // Clear password
//                 setIsSwitchAccount(false); // Reset switch account state
//               }}
//             >
//               <Text style={styles.modalCloseButtonText}>Close</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   welcomeText: {
//     color: '#000',
//     fontSize: 20,
//     textAlign: 'center',
//     marginTop: 80,
//   },
//   footer: {
//     position: 'absolute',
//     bottom: 20,
//     width: '100%',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   plusButton: {
//     backgroundColor: '#59ABC9',
//     padding: 15,
//     borderRadius: 30,
//     width: 70,
//     height: 70,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderWidth: 2,
//     borderColor: '#fff',
//   },
//   plusButtonText: {
//     color: 'white',
//     fontSize: 30,
//     fontWeight: 'bold',
//   },
//   modalBackground: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0,0,0,0.7)',
//     padding: 20,
//   },
//   modalContainer: {
//     width: '90%',
//     padding: 20,
//     backgroundColor: '#fff',
//     borderRadius: 15,
//     elevation: 10,
//     alignItems: 'center',
//   },
//   modalTitle: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     marginBottom: 15,
//     color: '#59ABC9',
//   },
//   userList: {
//     width: '100%',
//     marginBottom: 20,
//   },
//   userOptionButton: {
//     padding: 15,
//     marginBottom: 10,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 10,
//     backgroundColor: '#f9f9f9',
//     alignItems: 'center',
//   },
//   userOptionButtonText: {
//     fontSize: 18,
//     color: '#333',
//   },
//   passwordPrompt: {
//     marginTop: 20,
//     width: '100%',
//   },
//   input: {
//     width: '100%',
//     padding: 12,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 5,
//     marginBottom: 15,
//     fontSize: 16,
//   },
//   button: {
//     backgroundColor: '#59ABC9',
//     padding: 12,
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//   },
//   addAccountButton: {
//     padding: 12,
//     backgroundColor: '#59ABC9',
//     borderRadius: 5,
//     marginTop: 10,
//   },
//   addAccountButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   switchAccountButton: {
//     padding: 12,
//     backgroundColor: '#ccc',
//     borderRadius: 5,
//     marginTop: 10,
//   },
//   switchAccountButtonText: {
//     color: 'black',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   modalCloseButton: {
//     padding: 12,
//     backgroundColor: '#ccc',
//     borderRadius: 5,
//     marginTop: 10,
//   },
//   modalCloseButtonText: {
//     color: 'black',
//     fontSize: 16,
//   },
// });

// export default HomeScreen;

//
import React, { useContext, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, Alert, TextInput, FlatList } from 'react-native';
import { UserContext } from '../assets/UserContext'; // Correctly importing UserContext
import axios from 'axios';

const HomeScreen = ({ navigation,route}) => {
  const { user, previousUsers, login, updatePreviousUsers } = useContext(UserContext);
 const { phoneNumber} = route.params || {};
  const { username } = route.params || {};

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSwitchAccount, setIsSwitchAccount] = useState(false); // To track whether we're switching accounts or logging in

  useEffect(() => {
    if (user && !previousUsers.some((u) => u.username === user.username)) {
      updatePreviousUsers(user); // Add new user to previousUsers
    }
  }, [user, previousUsers, updatePreviousUsers]);

  const handlePasswordSubmit = async () => {
    if (!password) {
      Alert.alert('Input Error', 'Please enter a password.');
      return;
    }

    setLoading(true);

    try {
      const loginResponse = await axios.post('http://10.0.2.2:3000/login', {
        username: selectedUser.username,
        password,
      });

      if (loginResponse.data.message === 'Login successful') {
        login(selectedUser);
        Alert.alert('Success', `Logged in as ${selectedUser.username}`);
        setModalVisible(false); // Close modal
        setPassword(''); // Reset password field
        setSelectedUser(null); // Clear selected user
      } else {
        Alert.alert('Login Failed', 'Incorrect password');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Something went wrong during login.');
    } finally {
      setLoading(false);
    }
  };

  const switchToUser = (user) => {
    login(user); // Directly switch to the selected user
    Alert.alert('Switched Account', `You are now logged in as ${user.username}`);
    setModalVisible(false); // Close the modal
  };

  const renderUserOption = (item, isSwitchAccount = false) => (
    <TouchableOpacity
      key={item.username}
      style={styles.userOptionButton}
      onPress={() => {
        if (isSwitchAccount) {
          switchToUser(item);
        } else {
          setSelectedUser(item);
        }
      }}
    >
      {/* Profile Picture (First Letter in a Circle) */}
      <View style={styles.profileCircle}>
        <Text style={styles.profileText}>{item.username.charAt(0).toUpperCase()}</Text>
      </View>
      <Text style={styles.userOptionButtonText}>{item.username}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, padding: 20 }}>
    
        {/* {user ? `Welcome, ${user.username}` : 'User not logged in'} */}
     
            <Text style={styles.welcomeText}>Welcome, {phoneNumber ? `+91${phoneNumber}` : `${user.username}`}!</Text>
            

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.plusButton}>
          <Text style={styles.plusButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Unified Modal */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>
              {isSwitchAccount ? 'Switch Account' : 'Login Existing Account'}
            </Text>

            <FlatList
              data={previousUsers || []}
              renderItem={({ item }) => renderUserOption(item, isSwitchAccount)}
              keyExtractor={(item) => item.username}
              style={styles.userList}
            />

            {/* Show password prompt if logging in */}
            {!isSwitchAccount && selectedUser && (
              <View style={styles.passwordPrompt}>
                <Text>Enter password for {selectedUser.username}</Text>
                <TextInput
                  style={styles.input}
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry
                  placeholder="Password"
                />
                <TouchableOpacity
                  onPress={handlePasswordSubmit}
                  style={styles.button}
                  disabled={loading}
                >
                  <Text style={styles.buttonText}>
                    {loading ? 'Logging in...' : 'Submit'}
                  </Text>
                </TouchableOpacity>
              </View>
            )}

            {/* Add New Account Button */}
            <TouchableOpacity
              style={styles.addAccountButton}
              onPress={() => {
                setModalVisible(false);
                navigation.navigate('Login'); // Navigate to Signup screen
              }}
            >
              <Text style={styles.addAccountButtonText}>Add Account</Text>
            </TouchableOpacity>

            {/* Switch Account Button */}
            {!isSwitchAccount && (
              <TouchableOpacity
                style={styles.switchAccountButton}
                onPress={() => setIsSwitchAccount(true)}
              >
                <Text style={styles.switchAccountButtonText}>Switch Account</Text>
              </TouchableOpacity>
            )}

            {/* Close Modal Button */}
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={() => {
                setModalVisible(false);
                setSelectedUser(null); // Reset selected user
                setPassword(''); // Clear password
                setIsSwitchAccount(false); // Reset switch account state
              }}
            >
              <Text style={styles.modalCloseButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeText: {
    color: '#000',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 80,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:170
  },
  plusButton: {
    backgroundColor: '#59ABC9',
    padding: 15,
    borderRadius: 30,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  plusButtonText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: 20,
  },
  modalContainer: {
    width: '90%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    elevation: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#59ABC9',
  },
  userList: {
    width: '100%',
    marginBottom: 20,
  },
  userOptionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
  },
  userOptionButtonText: {
    fontSize: 18,
    color: '#333',
    marginLeft: 10,
  },
  profileCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#59ABC9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  passwordPrompt: {
    marginTop: 20,
    width: '100%',
  },
  input: {
    width: '100%',
    padding: 12,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#59ABC9',
    padding: 12,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  addAccountButton: {
    padding: 12,
    backgroundColor: '#59ABC9',
    borderRadius: 5,
    marginTop: 10,
  },
  addAccountButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  switchAccountButton: {
    padding: 12,
    backgroundColor: '#ccc',
    borderRadius: 5,
    marginTop: 10,
  },
  switchAccountButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
  },
  modalCloseButton: {
    padding: 12,
    backgroundColor: '#ccc',
    borderRadius: 5,
    marginTop: 10,
  },
  modalCloseButtonText: {
    color: 'black',
    fontSize: 16,
  },
});

export default HomeScreen;
