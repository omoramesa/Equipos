import { BASE_API_TEAMS, HTTP_TEAM } from './../config';
import httpBase from '../http-base';

class HttpTeam {

    async getTeams(){
        try {
            console('getTeams');
            const url  = `${ BASE_API_TEAMS }${ HTTP_TEAM.getTeams }`
            console('url', url);
            const data = await httpBase.baseGet(url, {});
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    async getTeamsById(id){
        try {
            const url  = `${ BASE_API_TEAMS }${ HTTP_TEAM.getTeams }/${id}`;
            const data = await httpBase.baseGet(url, {});
            return data;
        } catch (error) {
            console.log(error);
        }
    }
}

export default new HttpTeam;