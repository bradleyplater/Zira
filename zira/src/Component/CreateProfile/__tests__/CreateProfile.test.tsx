/* eslint-disable @typescript-eslint/no-empty-function */
import * as React from 'react';
import '@testing-library/jest-dom';
import CreateProfile from '../CreateProfile';
import TestHelper from '../../TestHelpers/TestHelper';

const _testHelper: TestHelper = new TestHelper();

describe('CreateProfile Can Render - ', () => {
    it('Renders Successfully', () => {
        _testHelper.renderWithRedux(<CreateProfile />);
    });
    it('Renders with correct text', () => {
        const { getByText } = _testHelper.renderWithRedux(<CreateProfile></CreateProfile>);
        getByText('Create Profile');
    });
});
