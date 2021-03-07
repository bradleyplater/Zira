/* eslint-disable @typescript-eslint/no-empty-function */
import * as React from 'react';
import '@testing-library/jest-dom';
import TestHelper from '../../TestHelpers/TestHelper';
import CreateProfileForm from '../CreateProfileForm';
import { fireEvent, waitFor } from '@testing-library/react';

const _testHelper: TestHelper = new TestHelper();

const successfulPostResponse = { data: {}, status: 201 };
const unSuccessfulPostResponse = { data: {}, status: 400 };
describe('CreateProfileForm Can Render - ', () => {
    it('Renders Successfully when logged in', () => {
        _testHelper.renderWithRedux(
            <CreateProfileForm isAuthenticated={true} user={{ email: 'test@email.com' }}></CreateProfileForm>,
        );
    });
    it('Renders Successfully when logged out', () => {
        _testHelper.renderWithRedux(
            <CreateProfileForm isAuthenticated={false} user={{ email: 'test@email.com' }}></CreateProfileForm>,
        );
    });
    it('Renders with correct text showing when logged in', () => {
        _testHelper.setUpPostMock(successfulPostResponse);

        const { getByText } = _testHelper.renderWithRedux(
            <CreateProfileForm isAuthenticated={true} user={{ email: 'test@email.com' }}></CreateProfileForm>,
        );
        getByText('Email');
        getByText('First Name');
        getByText('Surname');
    });
    it('Renders with no text showing when logged out', () => {
        _testHelper.setUpPostMock(successfulPostResponse);

        const { queryByText } = _testHelper.renderWithRedux(
            <CreateProfileForm isAuthenticated={false} user={{ email: 'test@email.com' }}></CreateProfileForm>,
        );
        const email = queryByText('Email');

        expect(email).toBeNull();
    });
});

describe('CreateForm user interaction tests - ', () => {
    it('Api is called when valid form data is submitted', async () => {
        const apiMock = _testHelper.setUpPostMock(successfulPostResponse);
        const { getByText, getByLabelText } = _testHelper.renderWithRedux(
            <CreateProfileForm isAuthenticated={true} user={{ email: 'test@email.com' }}></CreateProfileForm>,
        );

        await waitFor(() => {
            _testHelper.getInputAndEnterText(getByLabelText, 'First Name', 'John');
            _testHelper.getInputAndEnterText(getByLabelText, 'Surname', 'Doe');
            _testHelper.getButtonAndClick(getByText, 'Submit');
        });
        expect(apiMock).toHaveBeenCalled();
    });
    it('Correct error text is shown when submitting form without a Surname', async () => {
        _testHelper.setUpPostMock(successfulPostResponse);
        const { getByText, getByLabelText } = _testHelper.renderWithRedux(
            <CreateProfileForm isAuthenticated={true} user={{ email: 'test@email.com' }}></CreateProfileForm>,
        );

        await waitFor(() => {
            _testHelper.getInputAndEnterText(getByLabelText, 'First Name', 'John');
            _testHelper.getButtonAndClick(getByText, 'Submit');
        });

        getByText('Surname cannot be empty');
    });
    it('Correct error text is shown when submitting form without a First Name', async () => {
        _testHelper.setUpPostMock(successfulPostResponse);
        const { getByText, getByLabelText } = _testHelper.renderWithRedux(
            <CreateProfileForm isAuthenticated={true} user={{ email: 'test@email.com' }}></CreateProfileForm>,
        );

        await waitFor(() => {
            _testHelper.getInputAndEnterText(getByLabelText, 'Surname', 'Doe');
            _testHelper.getButtonAndClick(getByText, 'Submit');
        });

        getByText('First Name cannot be empty');
    });
    it('Correct error text is shown when submitting form without a First Name or Surname', async () => {
        _testHelper.setUpPostMock(successfulPostResponse);
        const { getByText } = _testHelper.renderWithRedux(
            <CreateProfileForm isAuthenticated={true} user={{ email: 'test@email.com' }}></CreateProfileForm>,
        );

        await waitFor(() => {
            _testHelper.getButtonAndClick(getByText, 'Submit');
        });

        getByText('First Name cannot be empty');
        getByText('Surname cannot be empty');
    });
    it('Correct error text is shown when submitting form and Api Call Fails', async () => {
        _testHelper.setUpPostMock(unSuccessfulPostResponse);
        const { getByText, getByLabelText } = _testHelper.renderWithRedux(
            <CreateProfileForm isAuthenticated={true} user={{ email: 'test@email.com' }}></CreateProfileForm>,
        );

        await waitFor(() => {
            _testHelper.getInputAndEnterText(getByLabelText, 'First Name', 'John');
            _testHelper.getInputAndEnterText(getByLabelText, 'Surname', 'Doe');
            _testHelper.getButtonAndClick(getByText, 'Submit');
        });

        getByText('User Creation Failed. Please Try Again');
    });
});
