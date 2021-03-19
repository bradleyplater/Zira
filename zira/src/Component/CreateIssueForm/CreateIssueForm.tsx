import React from 'react';
import { IssueTypes } from '../../Models/IssueTypes';
import { CreateIssueFormProps } from '../../Models/PropTypes';
import './BaseForm.css';

export default function CreateIssueForm({ register, errors }: CreateIssueFormProps): JSX.Element {
    return (
        <div>
            <div className="form-group">
                <label htmlFor="itemToCreateSelect" className="form-text">
                    Select Issue Type
                </label>
                <select name="issueType" className="form-control" id="itemToCreateSelect" ref={register()}>
                    <option>Select an option</option>
                    {Object.keys(IssueTypes).map((key) => (
                        <option key={key} value={key}>
                            {key}
                        </option>
                    ))}
                </select>
            </div>
            <div className="form-group has-error">
                <label htmlFor="issue-title" className="form-text">
                    Issue Title
                </label>
                <input
                    name="issueTitle"
                    type="text"
                    className={errors.issueTitle ? 'form-control is-invalid' : 'form-control'}
                    id="issue-title"
                    ref={register({ required: 'Issue Title cannot be empty' })}
                ></input>
                {errors.issueTitle && <small className="form-error-text">{errors.issueTitle.message}</small>}
            </div>

            <div className="form-group has-error">
                <label htmlFor="issue-description" className="form-text">
                    Issue Description
                </label>
                <textarea
                    name="issueDescription"
                    className="form-control"
                    aria-label="With textarea"
                    id="issue-description"
                    ref={register()}
                ></textarea>
            </div>
            <div className="form-group has-error">
                <label htmlFor="issue-story-points" className="form-text">
                    Story Points
                </label>
                <input
                    name="issueStoryPoints"
                    type="number"
                    className="form-control"
                    aria-label="With textarea"
                    id="issue-story-points"
                    ref={register()}
                ></input>
            </div>
        </div>
    );
}
