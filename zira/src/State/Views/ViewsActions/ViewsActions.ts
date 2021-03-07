import { Dispatch } from 'redux';
import { View } from '../../Models/ViewsModels';
import { SET_CURRENT_VIEW, ViewsDispatchTypes } from './ViewsActionTypes';

export const SetCurrentView = (view: View) => (dispatch: Dispatch<ViewsDispatchTypes>): any => {
    dispatch({ type: SET_CURRENT_VIEW, payload: view });
};
