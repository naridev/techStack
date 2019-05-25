import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ( {size} ) => {
    return (
        <View style={styles.spinnerStyle}>
            <ActivityIndicator style={size || 'large'}/>
        </View>
    );
}

const styles = {
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    }
}

export { Spinner };
