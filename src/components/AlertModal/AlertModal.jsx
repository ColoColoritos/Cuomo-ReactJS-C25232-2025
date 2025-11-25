import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './AlertModal.css';

export const AlertModal = ({ 
    show, 
    onClose, 
    title, 
    message, 
    confirmText = "Entendido", 
    onConfirmAction,
    cancelText = "Cancelar"
}) => {
    const handleConfirm = () => {
        if (onConfirmAction) {
            onConfirmAction();
        }
        onClose();
    };

    return (
        <Modal 
            show={show} 
            onHide={onClose} 
            centered 
            dialogClassName="rounded-4" 
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton className="border-0 pb-0">
                <Modal.Title className="fs-5 fw-bold text-dark-charcoal">{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-muted-pastel pt-2 pb-4">
                {message}
            </Modal.Body>
            <Modal.Footer className="border-0 pt-0 d-flex justify-content-end gap-2">
                {onConfirmAction && (
                    <Button 
                        variant="secondary"
                        className="btn-pastel-secondary" 
                        onClick={onClose}
                    >
                        {cancelText}
                    </Button>
                )}
                <Button 
                    variant="primary" 
                    className="btn-pastel-primary" 
                    onClick={onConfirmAction ? handleConfirm : onClose}
                >
                    {confirmText}
                </Button>
            </Modal.Footer>
        </Modal>
    );
};