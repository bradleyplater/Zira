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

export type IssueForm = {
    issueType: SelectOption;
    issueTitle: string;
    issueDescription: string;
    issueStoryPoints: number;
};

export type TransformedIssueForm = {
    issueType: IssueTypes;
    issueTitle: string;
    issueDescription: string;
    issueStoryPoints: number;
};

export type SelectOption = {
    label: string;
    value: string;
};
