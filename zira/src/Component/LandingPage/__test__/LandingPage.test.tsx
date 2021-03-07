import * as React from 'react';
import { fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TestHelper from '../../TestHelpers/TestHelper';
import LandingPage from '../LandingPage';

const _testHelper: TestHelper = new TestHelper();

const loginWithRedirect = jest.fn();

describe('Landing Page can render - ', () => {
    it('Successfully Renders', () => {
        _testHelper.renderWithRedux(<LandingPage loginWithRedirect={jest.fn()}></LandingPage>);
    });
});

describe('Landing Page can render correctly - ', () => {
    it('Renders with correct text', () => {
        const { getByText } = _testHelper.renderWithRedux(
            <LandingPage loginWithRedirect={loginWithRedirect}></LandingPage>,
        );
        getByText('Zira');
        getByText('New to Zira?');
        getByText('Already have an Account?');
    });
});

describe('Landing Page User Interaction Tests - ', () => {
    it('When clicking the "Get Started" button it calls the login method', () => {
        const { getByText } = _testHelper.renderWithRedux(
            <LandingPage loginWithRedirect={loginWithRedirect}></LandingPage>,
        );

        _testHelper.getButtonAndClick(getByText, 'Get Started');

        expect(loginWithRedirect).toHaveBeenCalled();
    });
    it('When clicking the "Login" button it calls the login method', () => {
        const { getByText } = _testHelper.renderWithRedux(
            <LandingPage loginWithRedirect={loginWithRedirect}></LandingPage>,
        );

        _testHelper.getButtonAndClick(getByText, 'Login');

        expect(loginWithRedirect).toHaveBeenCalled();
    });
});
