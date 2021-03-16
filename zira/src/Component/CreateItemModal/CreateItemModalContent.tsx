import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { RootStore } from '../../State/Store';
import CreateTeamForm from '../CreateTeamForm/CreateTeamForm';

export default function CreateItemModalBody() {
    const { handleSubmit, register, errors } = useForm();
    const userState = useSelector((state: RootStore) => state.user);

    const [itemToCreate, setItemToCreate] = useState('');

    function handleOnChange(event: any) {
        setItemToCreate(event.target.value);
    }

    const onSubmit = (data: any): any => {
        console.log(data);
    };

    let formToRender: any;
    switch (itemToCreate) {
        case 'team':
            formToRender = <CreateTeamForm register={register} errors={errors}></CreateTeamForm>;
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="modal-body">
                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">Example select</label>
                        <select className="form-control" id="exampleFormControlSelect1" onChange={handleOnChange}>
                            <option>Select an option</option>
                            <option value="team">team</option>
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
        </>
    );
}
