import React from 'react';
import './App.css';
import { ModalWrapper } from 'carbon-components-react';

const prefix = 'carbon';

const props = () => ({
  className: 'bx--modal',
  open: false,
  passiveModal: false,
  buttonTriggerText: 'Open Modal',
  danger: false,
  role: 'dialog',
  id: 'modal-6fzdte2fd6v',
  shouldSubmitOnEnter: false,
  focusTrap: false,
  modalHeading: 'Modal heading',
  modalLabel: 'Label',
  modalAriaLabel: 'A label to be read by screen readers on the modal root node',
  primaryButtonText: 'Primary Button',
  secondaryButtonText: 'Secondary Button',
  selectorPrimaryFocus: '[data-modal-primary-focus]',
  iconDescription: 'Close the modal',
  shouldCloseAfterSubmit: true
});

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
      <ModalWrapper
        id="transactional-passive-modal"
        handleSubmit={() => {
          'onSubmit';
          return true;
        }}
        {...props()}>
        <p className={`${prefix}--modal-content__text`}>
          New Text Change was added here..
        </p>
      </ModalWrapper>
      </header>
    </div>
  );
}

export default App;
