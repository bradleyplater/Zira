/* istanbul ignore file */
export enum View {
    LandingPage = 'LANDINGPAGE',
    Profile = 'PROFILE',
    CreateProfile = 'CREATEPROFILE',
}

export interface IViewsState {
    currentView?: View;
}
