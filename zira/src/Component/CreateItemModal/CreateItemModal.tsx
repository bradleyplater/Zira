import React, { ReactChild } from 'react';
import BaseModal from '../BaseModal/BaseModal';

export type CreateItemModalProps = {
    children: {
        ModalContent: ReactChild;
    };
};

export default function CreateItemModal({ children }: CreateItemModalProps) {
    return (
        <BaseModal ModalTitle="Create Item" ModalId="createItemModal" ModalTitleId="createItemModalTitle">
            {{ ModalContent: children.ModalContent }}
        </BaseModal>
    );
}
