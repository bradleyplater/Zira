export type Team = {
    name: string;
};

export interface ITeamsState {
    loading: boolean;
    teams?: Team[];
}
