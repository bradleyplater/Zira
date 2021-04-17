import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { useToasts } from 'react-toast-notifications';
import EnumHelper from '../../../Helpers/EnumHelper';
import { CreateIssue } from '../../../State/Issues/IssuesActions/IssuesActions';
import { IssueForm, TransformedIssueForm } from '../../../State/Models/IssuesModels';
import { RootStore } from '../../../State/Store';
import CreateIssueForm from '../../Forms/CreateIssueForm/CreateIssueForm';
import './CreateItemModal.css';

export default function CreateItemModalContent(): JSX.Element {
    const userState = useSelector((state: RootStore) => state.user);
    const { handleSubmit, register, errors, control } = useForm();
    const [itemToCreate, setItemToCreate] = useState('');
    const { addToast } = useToasts();
    const dispatch = useDispatch();

    const itemToCreateSelectOptions = [{ value: 'issue', label: 'Issue' }];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function handleOnChange(event: any): void {
        setItemToCreate(event.value);
    }

    const onSubmit = (data: IssueForm): void => {
        const issueType = EnumHelper.convertStringToIssueTypesEnum(data.issueType.value);

        const transformedData: TransformedIssueForm = {
            issueDescription: data.issueDescription,
            issueStoryPoints: data.issueStoryPoints,
            issueTitle: data.issueTitle,
            issueType: issueType,
        };

        switch (itemToCreate) {
            case 'issue':
                dispatch(CreateIssue(transformedData, userState.user, addToast));
        }
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let formToRender: any;
    switch (itemToCreate) {
        case 'issue':
            formToRender = <CreateIssueForm register={register} errors={errors} control={control}></CreateIssueForm>;
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="modal-body">
                    <div className="form-group">
                        <label htmlFor="itemToCreateSelect" className="form-text">
                            Select Item to Create
                        </label>
                        <Select
                            options={itemToCreateSelectOptions}
                            onChange={handleOnChange}
                            inputId="itemToCreateSelect"
                        ></Select>
                    </div>
                    {itemToCreate && <div>{formToRender}</div>}
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">
                        Close
                    </button>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}
