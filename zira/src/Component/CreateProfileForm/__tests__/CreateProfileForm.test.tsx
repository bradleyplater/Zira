/* eslint-disable @typescript-eslint/no-empty-function */
import * as React from 'react';
import '@testing-library/jest-dom';
import TestHelper from '../../TestHelpers/TestHelper';
import CreateProfileForm from '../CreateProfileForm';

const _testHelper: TestHelper = new TestHelper();
//SET UP THE MOCKS
const postResponse = { data: {}, status: 201 };
describe('CreateProfileForm Can Render - ', () => {
    it('Renders Successfully', () => {
        _testHelper.renderWithRedux(
            <CreateProfileForm isAuthenticated={true} user={{ email: 'test@email.com' }}></CreateProfileForm>,
        );
    });
    it('Renders with correct text showing', () => {
        _testHelper.setUpPostMock(postResponse);

        const { getByText } = _testHelper.renderWithRedux(
            <CreateProfileForm isAuthenticated={true} user={{ email: 'test@email.com' }}></CreateProfileForm>,
        );
        getByText('Email');
        getByText('First Name');
        getByText('Surname');
    });
});
