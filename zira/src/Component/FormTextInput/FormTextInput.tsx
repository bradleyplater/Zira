import React from 'react';

export default function FormTextInput() {
    return (
        <div className="form-group">
            <label htmlFor="testInput">Test Input</label>
            <input type="email" className="form-control" id="testInput" value="testInput" />
            <small></small>
        </div>
    );
}
