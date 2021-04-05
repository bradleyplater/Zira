import React from 'react';
import { CreateItemModalProps } from '../../../Models/PropTypes';
import BaseModal from '../BaseModal/BaseModal';

export default function CreateItemModal({ children }: CreateItemModalProps): JSX.Element {
    return (
        <BaseModal ModalTitle="Create Item" ModalId="createItemModal" ModalTitleId="createItemModalTitle">
            {{ ModalContent: children.ModalContent }}
        </BaseModal>
    );
}
