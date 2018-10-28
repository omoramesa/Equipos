import React, {Component} from 'react'
import {
    View,
    Text,
    FlatList
} from 'react-native';


import ItemTeam from './components/item-team';
import ItemSeparator from './components/item.separator';
import HttpTeam from "../../services/Teams/http-teams";

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
        const data = await HttpTeam.getTeams();
        this.setState({
            teamList: data.teams
        });
        console.log('equipos:' , data.teams);
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
    keyExtractor = item => item.idTeam.toString();
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
        );
    }
}



export default Teams;