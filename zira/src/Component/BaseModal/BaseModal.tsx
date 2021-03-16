import React, { ReactChild } from 'react';

type BaseModalProps = {
    children: {
        ModalContent: ReactChild;
    };
};

export default function BaseModal({ children }: BaseModalProps) {
    const { ModalContent } = children;

    return (
        <div
            className="modal fade"
            id="exampleModalLong"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalLongTitle"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">
                            Modal title
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
