import React from 'react';
import { Controller } from 'react-hook-form';
import Loader from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import Select from 'react-select';
import { IssueTypes } from '../../Models/IssueTypes';
import { CreateIssueFormProps } from '../../Models/PropTypes';
import { RootStore } from '../../State/Store';
import './BaseForm.css';

export default function CreateIssueForm({ register, errors, control }: CreateIssueFormProps): JSX.Element {
    const issuesState = useSelector((state: RootStore) => state.issues);

    const options: any[] = [];

    Object.keys(IssueTypes).map((key) => {
        options.push({ value: key, label: key });
    });

    return (
        <div>
            {issuesState.isApiBeingCalled ? (
                <Loader type="Oval" color="black" data-testid="spinner"></Loader>
            ) : (
                <div>
                    <div className="form-group">
                        <label htmlFor="issueTypeSelect" className="form-text">
                            Select Issue Type
                        </label>
                        <Controller
                            as={<Select name="issueType" options={options}></Select>}
                            name="issueType"
                            control={control}
                            defaultValue={options[0]}
                        ></Controller>
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
                            defaultValue={0}
                            type="number"
                            className={errors.issueStoryPoints ? 'form-control is-invalid' : 'form-control'}
                            aria-label="With textarea"
                            id="issue-story-points"
                            ref={register({ required: 'Story Points cannot be empty' })}
                        ></input>
                        {errors.issueStoryPoints && (
                            <small className="form-error-text">{errors.issueStoryPoints.message}</small>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
