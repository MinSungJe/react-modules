import { useState } from 'react';
import './App.css';
import Modal from './lib/Modal';

/**
 * Renders the main application interface with a button to open a modal dialog.
 *
 * Displays a heading, a button to open the modal, and the modal itself containing an overlay, content with text, an input field, a button, and a link.
 */
function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <h1>Component Modules</h1>
      <button onClick={() => setIsOpen(true)}>모달열기</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Overlay />
        <Modal.Content>
          <p>모달열림</p>
          <input placeholder="첫 번째 인풋" data-testid="first-input" />
          <button data-testid="second-button">두 번째 버튼</button>
          <a href="#" data-testid="third-link">
            세 번째 링크
          </a>
        </Modal.Content>
      </Modal>
    </>
  );
}

export default App;
