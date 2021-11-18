import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles/Styles';

const Contact = ({ navigation }) => {

  const styleSheet = styles()

  return (
    <View style={{ height: '100%', backgroundColor: 'rgb(223,246,244)', }}>

      <View style={{//flexWrap: 'wrap',
        height: "100%",
        alignItems: 'center',
//        flexDirection:'row',
        justifyContent: 'center',
        padding: 10,
        paddingRight: 20,
        paddingLeft: 20,
      }}>

        <Text style={{ fontSize: 40 }}>
          Contactenos
        </Text>

        <TextInput
          style={{
            width: "100%",
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            marginRight: 20,
            marginLeft: 20,
            backgroundColor: 'white'
          }}
          placeholder="Nombre"
          keyboardType="default"
        />

        <TextInput
          style={{
            width: "100%",
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            marginRight: 20,
            marginLeft: 20,
            backgroundColor: 'white'
          }}
          placeholder="Correo Electronico"
          keyboardType="default"
        />

        <TextInput
          style={{
            width: "100%",
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            marginRight: 20,
            marginLeft: 20,
            backgroundColor: 'white'
          }}
          placeholder="Numero de telefono"
          keyboardType="default"
        />

        <TextInput
          style={{
            width: "100%",
            height: 100,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            marginRight: 20,
            marginLeft: 20,
            backgroundColor: 'white'
          }}
          placeholder="Numero de telefono"
          keyboardType="default"
        />

        <Button title="Enviar"
        />

      </View>

    </View>
  );
};

export default Contact;
