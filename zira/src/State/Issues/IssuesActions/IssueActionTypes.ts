export const ISSUE_STARTED_API_CALL = 'ISSUE_STARTED_API_CALL';
export const ISSUE_CREATED = 'ISSUE_CREATED';

export interface IssueApiCallStarted {
    type: typeof ISSUE_STARTED_API_CALL;
}

export interface IssueCreated {
    type: typeof ISSUE_CREATED;
}

export type IssueDispatchTypes = IssueApiCallStarted | IssueCreated;
