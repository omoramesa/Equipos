import React from 'react';
import { Text, View, StyleSheet, Image, TouchableHighlight } from 'react-native';

const ItemPlayer = (props) => (
  <TouchableHighlight
  
   // underlayColor="#ccc"
  >
    <View style={styles.container}>
      <View style={styles.rows}>
        <View style={styles.contentImage}>
          <Image style={styles.image} source={{ uri: props.player.strThumb }} />
          <View style={styles.text}>
            <Text style={styles.titleText}>Nombre:  {props.player.strPlayer}</Text>
            <Text style={styles.titleText}>Fec Nac:  {props.player.dateBorn}</Text>
            <Text style={styles.titleText}>Nacionalidad:  {props.player.strNationality}</Text>
          </View>
        </View>
      </View>
    </View>
  </TouchableHighlight>
);
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  contentImage: {
    flexDirection: 'row',
  },
  rows: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
 
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    padding: 5,
    margin: 5
  },
   titleText: {
    color: '#9e9a99',
    fontSize: 15,
    marginBottom: 5,
    fontWeight: "bold"
  },
});

export default ItemPlayer;
