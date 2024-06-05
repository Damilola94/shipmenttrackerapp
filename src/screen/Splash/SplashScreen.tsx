import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable';

const { width, height } = Dimensions.get('window');

const images = [
  require('../../../assets/splash/image1.png'),
  require('../../../assets/splash/image2.png'),
];


const SplashScreen: React.FC<{ onFinish: () => void }> = ({ onFinish }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showBlueScreen, setShowBlueScreen] = useState(false);

    useEffect(() => {
        const imageInterval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);

        const blueScreenTimeout = setTimeout(() => {
            setShowBlueScreen(true);
            clearInterval(imageInterval);
        }, 4000); 

        const finishTimeout = setTimeout(() => {
            onFinish();
        }, 6000); 

        return () => {
            clearInterval(imageInterval);
            clearTimeout(blueScreenTimeout);
            clearTimeout(finishTimeout);
        };
    }, [onFinish]);

    return (
        <View style={styles.container}>
            {!showBlueScreen ? (
                <Animatable.Image
                    animation="fadeIn"
                    duration={500}
                    source={images[currentImageIndex]}
                    style={styles.image}
                    key={currentImageIndex}
                />
            ) : (
                <View style={styles.blueScreen} />
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
    image: {
        width,
        height,
        resizeMode: 'cover',
    },
    blueScreen: {
        width,
        height,
        backgroundColor: '#2f50c1',
    },
});

export default SplashScreen;
