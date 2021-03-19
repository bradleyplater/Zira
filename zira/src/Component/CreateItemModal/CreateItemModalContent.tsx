import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { CreateIssue } from '../../State/Issues/IssuesActions/IssuesActions';
import { RootStore } from '../../State/Store';
import CreateIssueForm from '../CreateIssueForm/CreateIssueForm';
import './CreateItemModal.css';

export default function CreateItemModalContent(): JSX.Element {
    const { handleSubmit, register, errors } = useForm();
    const dispatch = useDispatch();
    const [itemToCreate, setItemToCreate] = useState('');

    function handleOnChange(event: any) {
        setItemToCreate(event.target.value);
    }

    const onSubmit = (data: any): any => {
        switch (itemToCreate) {
            case 'issue':
                dispatch(CreateIssue(data));
        }
    };

    let formToRender: any;
    switch (itemToCreate) {
        case 'issue':
            formToRender = <CreateIssueForm register={register} errors={errors}></CreateIssueForm>;
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="modal-body">
                    <div className="form-group">
                        <label htmlFor="itemToCreateSelect" className="form-text">
                            Select Item to Create
                        </label>
                        <select className="form-control" id="itemToCreateSelect" onChange={handleOnChange}>
                            <option>Select an option</option>
                            <option value="issue">Issue</option>
                        </select>
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
