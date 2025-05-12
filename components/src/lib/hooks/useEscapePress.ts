import { useEffect } from 'react';

const useEscapeKeyClose = (closeOnEscape: boolean, isOpen: boolean, onClose: () => void) => {
  if (!closeOnEscape) return;

  useEffect(() => {
    if (!isOpen) return;

    /**
     * Invokes the {@link onClose} callback when the Escape key is pressed.
     *
     * @param e - The keyboard event to check for the Escape key.
     */
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }

    addEventListener('keydown', handleKeyDown);

    return () => {
      removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);
};

export default useEscapeKeyClose;
