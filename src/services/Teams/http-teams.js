import { BASE_API_TEAMS, HTTP_TEAM } from '../config';
import httpBase from '../http-base';

class HttpTeam {

    async getTeams(){
        try {
            const url  = `${ BASE_API_TEAMS}${ HTTP_TEAM.getTeams }`
            
            const data = await httpBase.baseGet(url, {});
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    async getPlayersByIdTeam(strTeam){
        try {
            const url  = `${ BASE_API_TEAMS }${ HTTP_TEAM.getTeam }${strTeam}`;
            const data = await httpBase.baseGet(url, {});
            return data;
        } catch (error) {
            console.log(error);
        }
    }
}

export default new HttpTeam;