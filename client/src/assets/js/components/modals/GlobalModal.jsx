import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const GlobalModal = (props) => {
    const {children, show, title, message, btnName, btnCallBack, onCloseBtn, onHide} =props

  return (
    <Modal show={show} onHide={onHide} centered>
     <Modal.Header closeButton>
      <Modal.Title>{title}</Modal.Title>
     </Modal.Header>
     <Modal.Body>{children ? children : message}</Modal.Body>
     {/* <Modal.Footer>
      {onCloseBtn && (
        <Button variant='secondary' onClick={onCloseCallBackBtn}>
          {onCloseBtn}
        </Button>
      )}
      <Button variant='primary' onClick={btnCallBack}>{btnName}</Button>
     </Modal.Footer> */}
    </Modal>
  )
}

export default GlobalModal;
