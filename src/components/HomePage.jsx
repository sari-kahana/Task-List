import { Button, ImageBackground, Text, View } from 'react-native';
import Styles from './Styles';

export function HomePage({ navigation }) {
    return (
        <ImageBackground 
            source={require('../../assets/1.png')}
            style={Styles.background}
        >
            <View style={Styles.content}>
                <Text style={Styles.text}>Welcome to the Task App!</Text>
                <Button
                    title="My Tasks"
                    onPress={() => navigation.navigate('Tasks')}
                />
            </View>
        </ImageBackground>
    );
}
