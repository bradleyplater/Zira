import { IssueTypes } from '../../Models/IssueTypes';

export interface IIssuesState {
    isApiBeingCalled: boolean;
    issues: IIssue[];
}

export interface IIssue {
    Title: string;
    Type: IssueTypes;
    Description: string;
    StoryPoints: number;
}
