import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles/Styles';

const Profile = ({ navigation }) => {

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
          Nombre de usuario
        </Text>

        <Ionicons name="person-circle-outline" size={300} color="black" />


        <Text style={{ fontSize: 25, fontWeight: "bold" }}>
          Nombre
        </Text>
        <Text style={{ fontSize: 25,  }}>
          Nombre de usuario
        </Text>

        <Text style={{ fontSize: 25, fontWeight: "bold" }}>
          Apellido
        </Text>
        <Text style={{ fontSize: 25,  }}>
          Apellido de usuario
        </Text>

        <Text style={{ fontSize: 25, fontWeight: "bold" }}>
          Numero de telefono
        </Text>
        <Text style={{ fontSize: 25, marginBottom: 30 }}>
          1234567890
        </Text>

        <Button title="Modificar Datos"/>


      </View>

    </View>
  );
};

export default Profile;
