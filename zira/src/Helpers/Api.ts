import { Team } from '../State/Models/TeamsModels';
import HttpClient from './HttpClient';

export class Api extends HttpClient {
    constructor() {
        super('CHANGE FOR BASE URL ');
    }

    public getTeams = () => this.instance.get<Team[]>('/teams');
}
