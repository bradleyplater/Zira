import { IssueDispatchTypes, ISSUE_CREATED, ISSUE_STARTED_API_CALL } from './IssueActionTypes';
import { Dispatch } from 'redux';
import axios from 'axios';
import { TransformedIssueForm } from '../../Models/IssuesModels';
import { User } from '../../Models/UserModels';
import DomHelper from '../../../Helpers/DomHelper';
import { AddToast } from 'react-toast-notifications';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const CreateIssue = (issueData: TransformedIssueForm, user: User | undefined, addToast: AddToast) => async (
    dispatch: Dispatch<IssueDispatchTypes>,
): Promise<void> => {
    dispatch({ type: ISSUE_STARTED_API_CALL });
    axios
        .post(
            'https://localhost:44353/api/v1/issues',
            {
                title: issueData.issueTitle,
                type: issueData.issueType,
                description: issueData.issueDescription,
                storyPoints: issueData.issueStoryPoints,
                user: user,
            },
            { timeout: 20000 },
        )
        .then((response) => {
            if (response.status == 201) {
                DomHelper.closeOneModal('createItemModal');
                addToast(`${issueData.issueType} was created!`, { appearance: 'success', autoDismiss: true });
                dispatch({ type: ISSUE_CREATED });
            }
        })
        .catch(() => {
            DomHelper.closeOneModal('createItemModal');
            addToast(`An issue occured. ${issueData.issueType} was not created`, {
                appearance: 'error',
                autoDismiss: true,
            });
        });
};
