import { Platform, StatusBar, StyleSheet } from "react-native";

export default  styles = StyleSheet.create({
    splash: {
        flex: 1,
        backgroundColor: '#00BFFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    splashText: {
        fontSize: 24,
        color: 'white',
        marginBottom: 20,
    },
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
    },
    task: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#f1f1f1',
        borderRadius: 8,
        marginBottom: 10,
    },
    taskText: {
        marginLeft: 10,
        fontSize: 18,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        margin: 20,
        padding: 20,
        borderRadius: 10,
    },
    modalTitle: {
        fontSize: 20,
        marginBottom: 10,
    },
    input: {
        borderBottomWidth: 1,
        marginBottom: 20,
        fontSize: 18,
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    background: {
        flex: 1,
        justifyContent: 'flex-start', // הכפתור למעלה
        alignItems: 'center',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 50,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center'
    },
});
