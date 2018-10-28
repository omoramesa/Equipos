import React, { Component } from "react";
import { 
    View,
    FlatList
  } from 'react-native';

import ItemPlayer from "./components/item-player";
import ItemSeparator from '../Teams/components/item.separator';
import HttpTeam from '../../services/Teams/http-teams';

class Player extends Component {

    constructor(props) {
        super(props);
        this.state = {
          playerList: []
        }
      }
    
      componentDidMount = () => {
        strTeam = this.props.navigation.getParam('strTeam', 'no-data');
        this.getPlayersByIdTeam(strTeam);
      }
      
      async getPlayersByIdTeam(strTeam) {
        const data = await HttpTeam.getPlayersByIdTeam(strTeam);
        this.setState({
            playerList: data.player
        })
        console.log(data.player);
      }
      static navigationOptions = {
        title: 'Players for Team',
    }

    renderItem = ({ item }) => <ItemPlayer navigation={this.props.navigation} player={item} />
    separatorComponent = () => <ItemSeparator />
    emptyComponent = () => <Text>No hay jugadores para el equipo seleccionado</Text>
    keyExtractor = item => item.idPlayer.toString()    

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.playerList}
                    renderItem={this.renderItem}
                    ListItemComponent={this.emptyComponent}
                    ItemSeparatorComponent={this.separatorComponent}
                    keyExtractor={this.keyExtractor}
                />
            </View>
        );
    }
}
export default Player;
