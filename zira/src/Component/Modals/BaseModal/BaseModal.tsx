import React from 'react';
import './BaseModal.css';
import { BaseModalProps } from '../../../Models/PropTypes';

export default function BaseModal({ children, ModalTitle, ModalId, ModalTitleId }: BaseModalProps): JSX.Element {
    const { ModalContent } = children;

    return (
        <div className="modal fade" id={ModalId} tabIndex={-1} role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title text-center" id={ModalTitleId}>
                            {ModalTitle}
                        </h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    {ModalContent}
                </div>
            </div>
        </div>
    );
}
