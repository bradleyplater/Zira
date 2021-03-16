import React from 'react';
import './CreateTeamForm.css';
export default function CreateTeamForm({ register, errors }: any) {
    return (
        <div>
            <div className="form-group has-error">
                <label htmlFor="first-name">Team Name</label>
                <input
                    name="teamName"
                    type="text"
                    className={errors.teamName ? 'form-control error' : 'form-control'}
                    id="team-name"
                    ref={register({ required: 'Team Name cannot be empty' })}
                    required
                ></input>
            </div>
            <div className="form-group">
                <label htmlFor="exampleDataList" className="form-label">
                    Owner
                </label>
                <input
                    name="ownerName"
                    className="form-control"
                    list="datalistOptions"
                    id="exampleDataList"
                    placeholder="Type to search..."
                    ref={register()}
                />
                <datalist id="datalistOptions">
                    <option value="Bradley" />
                </datalist>
            </div>
        </div>
    );
}
