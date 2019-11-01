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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          cursus fermentum risus, sit amet fringilla nunc pellentesque quis.
          Duis quis odio ultrices, cursus lacus ac, posuere felis. Donec
          dignissim libero in augue mattis, a molestie metus vestibulum. Aliquam
          placerat felis ultrices lorem condimentum, nec ullamcorper felis
          porttitor. Nunc at maximus purus. Curabitur sodales eros sit amet
          dolor bibendum gravida. Sed efficitur, arcu imperdiet vestibulum
          ultrices, risus diam ullamcorper arcu, sit amet gravida metus ligula
          quis metus.
        </p>
      </ModalWrapper>
      </header>
    </div>
  );
}

export default App;
