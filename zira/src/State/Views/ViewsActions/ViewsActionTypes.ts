import { View } from '../../Models/ViewsModels';

export const SET_CURRENT_VIEW = 'SET_CURRENT_VIEW';

export interface SetCurrentView {
    type: typeof SET_CURRENT_VIEW;
    payload: View;
}

export type ViewsDispatchTypes = SetCurrentView;
