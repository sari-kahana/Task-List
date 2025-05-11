import { useEffect } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import Styles from "./Styles";


// מסך פתיחה
export function SplashScreen({ navigation }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('Home');
        }, 2000); // אחרי 2 שניות עובר לעמוד הראשי
        return () => clearTimeout(timer); // לנקות את הטיימר אם הקומפוננטה מתפרקת
    }, []);

    return (
        <View style={Styles.splash}>
            <Text style={Styles.splashText}>ברוכים הבאים לאפליקציית המשימות!</Text>
            <ActivityIndicator size="large" color="#ffffff" />
        </View>
    );
}