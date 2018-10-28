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
        onPress = { ()=> props.navigation.navigate('PlayersScreen', { strTeam: props.team.strTeam } ) }
        underlayColor = "#ccc"
    >
         <View style={ styles.container }>
            <View styles={ styles.left }>
                <Image
                    style={styles.cover}
                    source ={{ uri: props.team.strTeamBadge}}
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
        height: 60,
        width: 60,
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
        fontSize: 26,
        color: '#44546b'
    }
    
})

export default ItemTeam;
