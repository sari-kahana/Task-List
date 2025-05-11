import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Alert, FlatList, Modal, TextInput, TouchableOpacity, Platform, StatusBar, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import Styles from './Styles';

// מסך ניהול המשימות
export function TasksScreen({ navigation }) {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadTasks();
    }, []);

    const loadTasks = async () => {
        try {
            const data = await AsyncStorage.getItem('tasks');
            if (data !== null) {
                setTasks(JSON.parse(data));
            }
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    const saveTasks = async (newTasks) => {
        await AsyncStorage.setItem('tasks', JSON.stringify(newTasks));
    };

    const addTask = () => {
        if (newTask.trim().length === 0) {
            Alert.alert('שגיאה', 'אנא הזן טקסט למשימה');
            return;
        }
        const newTasks = [...tasks, { id: Date.now().toString(), text: newTask }];
        setTasks(newTasks);
        saveTasks(newTasks);
        setNewTask('');
        setModalVisible(false);
    };

    const deleteTask = async (id) => {
        // Alert.alert('מחיקת משימה', 'האם את בטוחה שברצונך למחוק?', [
        //     { text: 'ביטול', style: 'cancel' },
        //     {
        //         text: 'מחק', onPress: () => {
                    const newTasks = tasks.filter(task => task.id !== id);
                    setTasks(newTasks);
                    await saveTasks(newTasks);
                // }
            // }
        // ]);
    };

    if (loading) {
        return (
            <View style={Styles.centered}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <View style={Styles.container}>
            <View style={Styles.header}>
                <Text style={Styles.title}>המשימות שלי</Text>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <Text style={{ color: 'blue' }}>הוסף משימה</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Ionicons name="home-outline" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <FlatList
                data={tasks}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity style={Styles.task} onPress={() => deleteTask(item.id)}>
                        <Ionicons name="checkmark-circle-outline" size={24} color="green" />
                        <Text style={Styles.taskText}>{item.text}</Text>
<Ionicons name="trash-outline" size={24} color="red" />
                    </TouchableOpacity>
                )}
            />

            <Modal visible={modalVisible} animationType="slide" transparent={true}>
                <View style={Styles.modalContainer}>
                    <View style={Styles.modalContent}>
                        <Text style={Styles.modalTitle}>הוסף משימה חדשה</Text>
                        <TextInput style={Styles.input} placeholder="כתוב משימה..." value={newTask} onChangeText={setNewTask} />
                        <View style={Styles.modalButtons}>
                            <TouchableOpacity onPress={() => setModalVisible(false)}><Text>ביטול</Text></TouchableOpacity>
                            <TouchableOpacity onPress={addTask}><Text>הוסף</Text></TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, ActivityIndicator, Alert, Button, FlatList, Modal, TextInput, TouchableOpacity } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { Ionicons } from '@expo/vector-icons';
// import Styles from './Styles';

// export function TasksScreen({ navigation }) {
//     const [tasks, setTasks] = useState([]);
//     const [newTask, setNewTask] = useState('');
//     const [modalVisible, setModalVisible] = useState(false);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         loadTasks();
//     }, []);

//     const loadTasks = async () => {
//         try {
//             const data = await AsyncStorage.getItem('tasks');
//             if (data !== null) {
//                 setTasks(JSON.parse(data));
//             }
//             setLoading(false);
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     const saveTasks = async (newTasks) => {
//         await AsyncStorage.setItem('tasks', JSON.stringify(newTasks));
//     };

//     const addTask = () => {
//         if (newTask.trim().length === 0) {
//             Alert.alert('שגיאה', 'אנא הזן טקסט למשימה');
//             return;
//         }
//         const newTasks = [...tasks, { id: Date.now().toString(), text: newTask }];
//         setTasks(newTasks);
//         saveTasks(newTasks);
//         setNewTask('');
//         setModalVisible(false);
//     };

//     const deleteTask = async (id) => {
//         console.log('Delete task with id:', id); // לוג לאבחון
//         try {
//             setModalVisible(false); // סגירת המודל
//             // Alert.alert(
//             //     'מחיקת משימה',
//             //     'האם את בטוחה שברצונך למחוק?',
//             //     [
//             //         { text: "ביטול", style: "cancel" },
//             //         {
//             //             text: "מחק", onPress: async () => {
//             const newTasks = tasks.filter(task => task.id !== id);
//             setTasks(newTasks);  // עדכון המצב (State)
//             await saveTasks(newTasks);  // שמירה ב-AsyncStorage
//             //             }
//             //         }
//             //     ]
//             // );
//             // console.log('after alert:', id); // לוג לאבחון

//         }
//         catch (error) {
//             console.log('Error deleting task:', error); // לוג לאבחון
//         }

//     };


//     if (loading) {
//         return (
//             <View style={Styles.centered}>
//                 <ActivityIndicator size="large" color="#0000ff" />
//             </View>
//         );
//     }

//     return (
//         <View style={Styles.container}>
//             <View style={Styles.header}>
//                 <Text style={Styles.title}>המשימות שלי</Text>
//                 <Button title="הוסף משימה" onPress={() => setModalVisible(true)} />
//                 <TouchableOpacity onPress={() => navigation.navigate('Home')}>
//                     <Ionicons name="home-outline" size={24} color="black" />
//                 </TouchableOpacity>
//             </View>

//             <FlatList
//                 data={tasks}
//                 keyExtractor={item => item.id}
//                 renderItem={({ item }) => (
//                     <View style={Styles.taskContainer}>
//                         <Text style={Styles.taskText}>{item.text}</Text>
//                         <TouchableOpacity onPress={() => deleteTask(item.id)}>
//                             <Ionicons name="trash-outline" size={24} color="red" />
//                         </TouchableOpacity>
//                     </View>
//                 )}
//             />

//             {/* מודל הוספת משימה */}
//             <Modal visible={modalVisible} animationType="slide" transparent={true}>
//                 <View style={Styles.modalContainer}>
//                     <View style={Styles.modalContent}>
//                         <Text style={Styles.modalTitle}>הוסף משימה חדשה</Text>
//                         <TextInput
//                             style={Styles.input}
//                             placeholder="כתוב משימה..."
//                             value={newTask}
//                             onChangeText={setNewTask}
//                         />
//                         <View style={Styles.modalButtons}>
//                             <Button title="ביטול" onPress={() => setModalVisible(false)} />
//                             <Button title="הוסף" onPress={addTask} />
//                         </View>
//                     </View>
//                 </View>
//             </Modal>
//         </View>
//     );
// }

