import React from 'react';
import './BaseForm.css';
export default function CreateTeamForm({ register, errors }: any) {
    return (
        <div>
            <div className="form-group has-error">
                <label htmlFor="first-name" className="form-text">
                    Team Name
                </label>
                <input
                    name="teamName"
                    type="text"
                    className={errors.teamName ? 'form-control is-invalid' : 'form-control'}
                    id="team-name"
                    ref={register({ required: 'Team Name cannot be empty' })}
                ></input>
                {errors.teamName && <small className="form-error-text">{errors.teamName.message}</small>}
            </div>
            <div className="form-group">
                <label htmlFor="exampleDataList" className="form-text">
                    Owner
                </label>
                <input
                    name="ownerName"
                    className={errors.ownerName ? 'form-control is-invalid' : 'form-control'}
                    list="datalistOptions"
                    id="exampleDataList"
                    placeholder="Type to search..."
                    ref={register({ required: 'Owner cannot be empty' })}
                />
                {errors.ownerName && <small className="form-error-text">{errors.ownerName.message}</small>}

                <datalist id="datalistOptions">
                    <option value="Bradley" />
                </datalist>
            </div>
        </div>
    );
}
