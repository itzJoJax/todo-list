import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task = (props) => {

    return (
        <View style={Styles.item}>
            <View style={Styles.itemSS}>
                <TouchableOpacity style={Styles.cube}></TouchableOpacity>
                <Text style={Styles.itemText}>{props.text}</Text>
            </View>
            <View style={Styles.check}>
            
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemSS: {
        flexDirection: 'row',
        alignItems:  'center',
        flexWrap: 'wrap'
    },
    cube: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight:  15,  
    },
    itemText: {
        maxWidth: "80%" ,
    },
    check : {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,
    },
});

export default Task;