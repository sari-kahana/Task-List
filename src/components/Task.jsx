import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Alert, FlatList, Modal, TextInput, TouchableOpacity, Platform, StatusBar, ImageBackground, Button } from 'react-native';
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

    const deleteTask = (id) => {
        Alert.alert('מחיקת משימה', 'האם את בטוחה שברצונך למחוק?', [
            { text: 'ביטול', style: 'cancel' },
            {
                text: 'מחק', onPress: async() => {
                    const newTasks = tasks.filter(task => task.id !== id);
                    setTasks(newTasks);
                    await saveTasks(newTasks);
                }
            }
        ]);
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
                <Text style={Styles.title}>My Tasks</Text>
                <Button title='Add Task' onPress={() => setModalVisible(true)}></Button>
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
                    </TouchableOpacity>
                )}
            />

            <Modal visible={modalVisible} animationType="slide" transparent={true}>
                <View style={Styles.modalContainer}>
                    <View style={Styles.modalContent}>
                        <Text style={Styles.modalTitle}>Add New Task</Text>
                        <TextInput style={Styles.input} placeholder="כתוב משימה..." value={newTask} onChangeText={setNewTask} />
                        <View style={Styles.modalButtons}>
                            <TouchableOpacity onPress={addTask}><Text>Add</Text></TouchableOpacity>
                            <TouchableOpacity onPress={() => setModalVisible(false)}><Text>Cancel</Text></TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}