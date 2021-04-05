import TestHelper from '../../TestHelpers/TestHelper';
import CreateItemModal from '../CreateItemModal';
import CreateItemModalContent from '../CreateItemModalContent';
import selectEvent from 'react-select-event';
import { waitFor } from '@testing-library/react';
const _testHelper: TestHelper = new TestHelper();

const successfulPostResponse = { data: {}, status: 201 };

describe('CreateItemModal can render - ', () => {
    it('Renders Successfully', () => {
        _testHelper.renderWithRedux(
            <CreateItemModal>{{ ModalContent: <CreateItemModalContent></CreateItemModalContent> }}</CreateItemModal>,
        );
    });
    it('Renders with correct text', () => {
        const { getByText } = _testHelper.renderWithRedux(
            <CreateItemModal>{{ ModalContent: <CreateItemModalContent></CreateItemModalContent> }}</CreateItemModal>,
        );
        getByText('Create Item');
    });
});

describe('CreateItemModal user interaction tests - ', () => {
    describe('Select Item to create tests', () => {
        it('Renders Issue form when Issue is selected', async () => {
            const { getByLabelText, getByText } = _testHelper.renderWithRedux(
                <CreateItemModal>
                    {{ ModalContent: <CreateItemModalContent></CreateItemModalContent> }}
                </CreateItemModal>,
            );
            await selectEvent.select(getByLabelText('Select Item to Create'), 'Issue');

            getByText('Select Issue Type');
        });
    });
    describe('Issue form tests', () => {
        it('When Issue title is not inputted, it shows error message', async () => {
            _testHelper.setUpPostMock(successfulPostResponse);
            const { getByLabelText, getByText } = _testHelper.renderWithRedux(
                <CreateItemModal>
                    {{ ModalContent: <CreateItemModalContent></CreateItemModalContent> }}
                </CreateItemModal>,
            );
            await selectEvent.select(getByLabelText('Select Item to Create'), 'Issue');

            await waitFor(() => {
                _testHelper.getButtonAndClick(getByText, 'Submit');
            });

            getByText('Issue Title cannot be empty');
        });
        it('When Issue title is inputted but description and points are not changed then submitted modal will close', async () => {
            _testHelper.setUpPostMock(successfulPostResponse);
            const { getByLabelText, getByText } = _testHelper.renderWithRedux(
                <CreateItemModal>
                    {{ ModalContent: <CreateItemModalContent></CreateItemModalContent> }}
                </CreateItemModal>,
            );
            await selectEvent.select(getByLabelText('Select Item to Create'), 'Issue');

            await waitFor(() => {
                _testHelper.getInputAndEnterText(getByLabelText, 'Issue Title', 'Test Title');
                _testHelper.getButtonAndClick(getByText, 'Submit');
            });

            const modalTitle = getByText('Create Item');
            expect(modalTitle).toBeNull;
        });
        it('When Issue title and description is inputted but points are not changed then submitted modal will close', async () => {
            _testHelper.setUpPostMock(successfulPostResponse);
            const { getByLabelText, getByText } = _testHelper.renderWithRedux(
                <CreateItemModal>
                    {{ ModalContent: <CreateItemModalContent></CreateItemModalContent> }}
                </CreateItemModal>,
            );
            await selectEvent.select(getByLabelText('Select Item to Create'), 'Issue');

            await waitFor(() => {
                _testHelper.getInputAndEnterText(getByLabelText, 'Issue Title', 'Test Title');
                _testHelper.getInputAndEnterText(getByLabelText, 'Issue Description', 'Test Description');
                _testHelper.getButtonAndClick(getByText, 'Submit');
            });

            const modalTitle = getByText('Create Item');
            expect(modalTitle).toBeNull;
        });
        it('When Issue title, description and points is inputted then submitted, modal will close', async () => {
            _testHelper.setUpPostMock(successfulPostResponse);
            const { getByLabelText, getByText } = _testHelper.renderWithRedux(
                <CreateItemModal>
                    {{ ModalContent: <CreateItemModalContent></CreateItemModalContent> }}
                </CreateItemModal>,
            );
            await selectEvent.select(getByLabelText('Select Item to Create'), 'Issue');

            await waitFor(() => {
                _testHelper.getInputAndEnterText(getByLabelText, 'Issue Title', 'Test Title');
                _testHelper.getInputAndEnterText(getByLabelText, 'Issue Description', 'Test Description');
                _testHelper.getInputAndEnterText(getByLabelText, 'Story Points', '2');
                _testHelper.getButtonAndClick(getByText, 'Submit');
            });

            const modalTitle = getByText('Create Item');
            expect(modalTitle).toBeNull;
        });
        it('When form inputted correctly and api returns a 201 response. Success Toast is displayed', async () => {
            _testHelper.setUpPostMock(successfulPostResponse);
            const { getByLabelText, getByText } = _testHelper.renderWithRedux(
                <CreateItemModal>
                    {{ ModalContent: <CreateItemModalContent></CreateItemModalContent> }}
                </CreateItemModal>,
            );
            await selectEvent.select(getByLabelText('Select Item to Create'), 'Issue');

            await waitFor(() => {
                _testHelper.getInputAndEnterText(getByLabelText, 'Issue Title', 'Test Title');
                _testHelper.getInputAndEnterText(getByLabelText, 'Issue Description', 'Test Description');
                _testHelper.getInputAndEnterText(getByLabelText, 'Story Points', '2');
                _testHelper.getButtonAndClick(getByText, 'Submit');
            });
            getByText('Story was created!');
        });
        it('When form inputted correctly and api returns a 400 response. Unsuccessful Toast is displayed', async () => {
            _testHelper.setUpRejectedPostMock();
            const { getByLabelText, getByText } = _testHelper.renderWithRedux(
                <CreateItemModal>
                    {{ ModalContent: <CreateItemModalContent></CreateItemModalContent> }}
                </CreateItemModal>,
            );
            await selectEvent.select(getByLabelText('Select Item to Create'), 'Issue');

            await waitFor(() => {
                _testHelper.getInputAndEnterText(getByLabelText, 'Issue Title', 'Test Title');
                _testHelper.getInputAndEnterText(getByLabelText, 'Issue Description', 'Test Description');
                _testHelper.getInputAndEnterText(getByLabelText, 'Story Points', '2');
                _testHelper.getButtonAndClick(getByText, 'Submit');
            });
            getByText('An issue occured. Story was not created');
        });
        it('When form inputted correctly and api returns a 500 response. Unsuccessfult Toast is displayed', async () => {
            _testHelper.setUpRejectedPostMock();
            const { getByLabelText, getByText } = _testHelper.renderWithRedux(
                <CreateItemModal>
                    {{ ModalContent: <CreateItemModalContent></CreateItemModalContent> }}
                </CreateItemModal>,
            );
            await selectEvent.select(getByLabelText('Select Item to Create'), 'Issue');

            await waitFor(() => {
                _testHelper.getInputAndEnterText(getByLabelText, 'Issue Title', 'Test Title');
                _testHelper.getInputAndEnterText(getByLabelText, 'Issue Description', 'Test Description');
                _testHelper.getInputAndEnterText(getByLabelText, 'Story Points', '2');
                _testHelper.getButtonAndClick(getByText, 'Submit');
            });

            getByText('An issue occured. Story was not created');
        });
    });
});
