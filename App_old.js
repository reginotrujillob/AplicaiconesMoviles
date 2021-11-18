import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({
  $bs_gutter_x: '1rem',

  $blue:        '#0d6efd',
  $indigo:      '#6610f2',
  $purple:      '#6f42c1',
  $pink:        '#d63384',
  $red:         '#dc3545',
  $orange:      '#fd7e14',
  $yellow:      '#ffc107',
  $green:       '#198754',
  $teal:        '#20c997',
  $cyan:        '#0dcaf0',

  $white:       '#ffffff',
  $gray_100:    '#f8f9fa',
  $gray_200:    '#e9ecef',
  $gray_300:    '#dee2e6',
  $gray_400:    '#ced4da',
  $gray_500:    '#adb5bd',
  $gray_600:    '#6c757d',
  $gray_700:    '#495057',
  $gray_800:    '#343a40',
  $gray_900:    '#212529',
  $black:       '#000000',

  $primary:       '$blue',
  $secondary:     '$gray_600',
  $success:       '$green',
  $info:          '$cyan',
  $warning:       '$yellow',
  $danger:        '$red',
  $light:         '$gray_100',
  $dark:          '$gray_900',
});

const App = () => {

  const [primary, set_primary] = useState("blue");

  const stylesCalc = styleSheet(primary);

  const change = () => {
    set_primary('green')
  };

    return (
    <View style={pickStyles(stylesCalc, 'container_fluid', 'd_flex', 'h_100', 'flex_column')}>
      <View style={pickStyles(stylesCalc, 'row', 'h_100')}>
        <Text>React Native</Text>
        <Text>Texto</Text>
        <TouchableOpacity onPress={change}>
          <Text>Change</Text>
        </TouchableOpacity>
      </View>
    </View>
    );

};

//let primary = EStyleSheet.value('$primary');

const pickStyles = (styleSheet, ...styles) => styles
.filter(style => style in styleSheet) // line can be removed to make it inclusive
.map(style => styleSheet[style])
// .reduce((objPicked, key) => Object.assign(objPicked, {[key]: obj[key]}), {});

const styleSheet = (primary = 'yellow') => {
  let styleSheeti = EStyleSheet.create({
  ...Object.fromEntries([
      'container',
      'container_fluid',
      'container_xxl',
      'container_xl',
      'container_lg',
      'container_md',
      'container_sm',
    ].map(style => [style, {
      width: "100%",
      paddingRight: '$bs_gutter_x',
      paddingLeft: '$bs_gutter_x',
      marginRight: "auto",
      marginLeft: "auto",
      backgroundColor: '$primary',
    }])
  ),
  d_flex: {
    display: 'flex',
  },
  h_100: {
    height: '100%',
  },
  flex_column: {
    flexDirection: 'column',
  },
  '@media (min-width: 576)': {
    ...Object.fromEntries([
        'container_sm','container',
      ].map(style => [style, {
        maxWidth: 540,
      }])
    )
  },
  '@media (min-width: 768)': {
    ...Object.fromEntries([
        'container_md','container_sm','container',
      ].map(style => [style, {
        maxWidth: 720,
      }])
    )
  },
  '@media (min-width: 992)': {
    ...Object.fromEntries([
        'container_lg','container_md','container_sm','container',
      ].map(style => [style, {
        maxWidth: 960,
      }])
    )
  },
  '@media (min-width: 1200)': {
    ...Object.fromEntries([
        'container_xl','container_lg','container_md','container_sm','container',
      ].map(style => [style, {
        maxWidth: 1140,
      }])
    )
  },
  '@media (min-width: 1400)': {
    ...Object.fromEntries([
        'container_xxl','container_xl','container_lg','container_md','container_sm','container',
      ].map(style => [style, {
        maxWidth: 1320,
      }])
    )
  },
  row: {
  // --bs-gutter-x: 1.5rem;
  // --bs-gutter-y: 0;
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: () => {return primary},
  // margin-top: calc(-1 * var(--bs-gutter-y));
  // margin-right: calc(-0.5 * var(--bs-gutter-x));
  // margin-left: calc(-0.5 * var(--bs-gutter-x));
  }
})

styleSheeti.custom = 'Algo'

console.log(styleSheeti)

return styleSheeti
};

window.styleSheet = styleSheet;

console.log(window.styleSheet)

//[styles.container, styles.d_flex, styles.h_100, styles.flex_column]
//pickStyles(styles, 'container', 'd_flex')



function bla() {
  return {
    backgroundColor: "red",
    width: "600px",
    maxWidth: "50%",
    paddingLeft: "30px",
  }
};



const page = () => EStyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 30,
    color: '#000',
  },
  style2: {
    backgroundColor: "red",
    width: 600,
    maxWidth: "50%",
    marginTop: 30,
  }
});

page.custom = () => alert(1)

window.page = page

const lists = EStyleSheet.create({
  listContainer: {
    flex: 1,
    backgroundColor: '#61dafb',
  },
  listItem: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    backgroundColor: 'green',
  },
});

const [
  container,
  container_fluid,
  container_xxl,
  container_xl,
  container_lg,
  container_md,
  container_sm,
] = Array(7).fill(EStyleSheet.create({
  $: {
    width: "100%",
    height: "100%",
    paddingRight: '$bs_gutter_x',
    paddingLeft: '$bs_gutter_x',
    marginRight: "auto",
    marginLeft: "auto",
    padding: 24,
    backgroundColor: 'green',
  }
}));

var object = {};
object["valor"] = "ccxd";

// alert(JSON.stringify(styles.container))

//alert(JSON.stringify(EStyleSheet.flatten([styles.container])))

//const containerO = StyleSheet.compose(page.container, lists.listContainer);

//console.log("Aqui")
//console.log(containerO)

//const text = StyleSheet.compose(page.text, lists.listItem);

export default App;
