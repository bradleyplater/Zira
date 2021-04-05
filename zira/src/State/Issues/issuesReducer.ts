import { IIssuesState } from '../Models/IssuesModels';
import { IssueDispatchTypes, ISSUE_CREATED, ISSUE_STARTED_API_CALL } from './IssuesActions/IssueActionTypes';

const defaultState: IIssuesState = {
    isApiBeingCalled: false,
    issues: [],
};

const issuesReducer = (state: IIssuesState = defaultState, action: IssueDispatchTypes): IIssuesState => {
    switch (action.type) {
        case ISSUE_STARTED_API_CALL:
            return {
                ...state,
                isApiBeingCalled: true,
            };
        case ISSUE_CREATED:
            return {
                ...state,
                isApiBeingCalled: false,
            };
        default:
            return {
                ...state,
            };
    }
};

export default issuesReducer;
