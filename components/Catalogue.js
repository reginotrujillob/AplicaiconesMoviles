import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import styles from './styles/Styles';

const Catalogue = ({ navigation }) => {

  const styleSheet = styles()

  return (
    <View style={{ height: '100%', backgroundColor: 'rgb(223,246,244)', }}>
      <View style={{}}>
        <TextInput
          style={{
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            marginRight: 20,
            marginLeft: 20,
          }}
          placeholder="Buscar"
          keyboardType="default"
        />
      </View>

      <View style={{flexWrap: 'wrap',
        alignItems: 'center',
        flexDirection:'row',
        justifyContent: 'center',
        padding: 10,
        paddingRight: 20,
        paddingLeft: 20,
        paddingBottom: 40,
      }}>

          <View style={{width: "50%",
            flexDirection:'row',
            justifyContent: 'center',
//            backgroundColor: 'red',
            padding: 10,
          }}>

                <Image
                style={{
                  width: "100%",
                  height: 100,
                }}
                source={
                  require('../assets/img002.jpeg')
                }/>

          </View>

          <View style={{width: "50%",
            flexDirection:'row',
            justifyContent: 'center',
//            backgroundColor: 'yellow',
            padding: 10,
          }}>

              <Image
              style={{
                width: "100%",
                height: 100,
              }}
              source={
                require('../assets/img004.jpeg')
              }/>

          </View>

          <View style={{width: "50%",
            flexDirection:'row',
            justifyContent: 'center',
//            backgroundColor: 'green',
            padding: 10,
          }}>

              <Image
              style={{
                width: "100%",
                height: 100,
              }}
              source={
                require('../assets/img006.jpeg')
              }/>

          </View>

          <View style={{width: "50%",
            flexDirection:'row',
            justifyContent: 'center',
//            backgroundColor: 'blue',
            padding: 10,
          }}>

              <Image
              style={{
                width: "100%",
                height: 100,
              }}
              source={
                require('../assets/img008.jpeg')
              }/>

          </View>

          <View style={{width: "50%",
            flexDirection:'row',
            justifyContent: 'center',
//            backgroundColor: 'blue',
            padding: 10,
          }}>

              <Image
              style={{
                width: "100%",
                height: 100,
              }}
              source={
                require('../assets/img010.jpeg')
              }/>

          </View>

          <View style={{width: "50%",
            flexDirection:'row',
            justifyContent: 'center',
//            backgroundColor: 'blue',
            padding: 10,
          }}>

              <Image
              style={{
                width: "100%",
                height: 100,
              }}
              source={
                require('../assets/img011.jpeg')
              }/>



          </View>

          <View style={{width: "50%",
            flexDirection:'row',
            justifyContent: 'center',
//            backgroundColor: 'blue',
            padding: 10,
          }}>

              <Image
              style={{
                width: "100%",
                height: 100,
              }}
              source={
                require('../assets/img012.jpeg')
              }/>

          </View>

          <View style={{width: "50%",
            flexDirection:'row',
            justifyContent: 'center',
//            backgroundColor: 'blue',
            padding: 10,
          }}>

              <Image
              style={{
                width: "100%",
                height: 100,
              }}
              source={
                require('../assets/img013.jpeg')
              }/>

          </View>

          <View style={{width: "50%",
            flexDirection:'row',
            justifyContent: 'center',
//            backgroundColor: 'blue',
            padding: 10,
          }}>

              <Image
              style={{
                width: "100%",
                height: 100,
              }}
              source={
                require('../assets/img014.jpeg')
              }/>

          </View>

          <View style={{width: "50%",
            flexDirection:'row',
            justifyContent: 'center',
//            backgroundColor: 'blue',
            padding: 10,
          }}>

              <Image
              style={{
                width: "100%",
                height: 100,
              }}
              source={
                require('../assets/img015.jpeg')
              }/>

          </View>

      </View>

    </View>
  );
};

export default Catalogue;
