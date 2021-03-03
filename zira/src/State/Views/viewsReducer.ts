import { IViewsState, View } from '../Models/ViewsModels';
import { SET_CURRENT_VIEW, ViewsDispatchTypes } from './ViewsActions/ViewsActionTypes';

const defaultState: IViewsState = {
    currentView: View.LandingPage,
};

const viewsReducer = (state: IViewsState = defaultState, action: ViewsDispatchTypes): IViewsState => {
    switch (action.type) {
        case SET_CURRENT_VIEW:
            return {
                currentView: action.payload,
            };
        default:
            return {
                currentView: state.currentView,
            };
    }
};

export default viewsReducer;
