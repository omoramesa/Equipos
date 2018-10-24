import React, {Component} from 'react'
import {
    View,
    Text,
    FlatList,
    StyleSheet
} from 'react-native';


import ItemTeam from './components/item-team';
import ItemSeparator from './components/item-separator';
import HttpTeams from "../../services/Teams/http-teams2";

class Teams extends Component{

    constructor(props){
        super(props);
        this.state = {
            teamList: []
        }
    }

    componentDidMount = () =>{ 
        this.getTeams();
    }

    async getTeams(){
        console.log('http', HttpTeams);  
        const data = await HttpTeams.getTeams();
       /* this.setState({
            teamList: data.teams
        });*/
        console.log('equipos:' , data);
    }

    static navigationOptions = {
        title: 'Teams',
        headerTitleStyle: {
            fontSize: 18
        },
    }
    renderItem = ( { item }) => <ItemTeam navigation = { this.props.navigation } team = { item } />
    separatorComponent = () => <ItemSeparator />;
    emptyComponent = () => <Text>No se encontraron equipos </Text>
    keyExtractor = item => item._id.toString();
    render(){
        return (
            <View> 
                    <FlatList
                        data ={ this.state.teamList }
                        renderItem={ this.renderItem }
                        ItemSeparatorComponent = { this.separatorComponent }
                        ListEmptyComponent = { this.emptyComponent }
                        keyExtractor = { this.keyExtractor }
                    />
             
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
  
  });

export default Teams;