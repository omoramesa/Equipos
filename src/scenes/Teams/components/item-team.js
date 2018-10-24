import React from 'react';
import {
    Text,
    View,
    StyleSheet ,
    Image,
    TouchableHighlight
} from 'react-native';


const ItemTeam = (props) => (
    <TouchableHighlight
       // onPress = { ()=> props.navigation.navigate('PlayesDetailScreen', { id: props.team._id } ) }
      //  underlayColor = "#ccc"
    >
         <View style={ styles.container }>
            <View styles={ styles.left }>
                <Image
                    style={styles.cover}
                    source ={{ uri: props.team.strStadiumThumb}}
                />
            </View>
            <View style={ styles.right }>
                <Text style={ styles.strTeam }>{ props.team.strTeam }</Text>
            </View>
        </View>
    </TouchableHighlight>

);

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
    },
    
    cover:{
        height: 120,
        width: 180,
        resizeMode: 'contain',
    },
    right:{
        paddingLeft: 2,
        justifyContent: 'space-between',

    },
    left:{
        paddingRight: 2,
    },
    strTeam:{
        fontSize: 18,
        color: '#44546b'
    }
    
})

export default ItemTeam;
