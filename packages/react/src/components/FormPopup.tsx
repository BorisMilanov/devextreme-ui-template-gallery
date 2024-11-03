import React from 'react';
import Popup from 'devextreme-react/popup';
import Button from 'devextreme-react/button';

interface FormPopupProps {
  title: string;
  visible: boolean;
  setVisible: (visible: boolean) => void;
  onSave: () => void;
  children: React.ReactNode;
}

const FormPopup: React.FC<FormPopupProps> = ({ title, visible, setVisible, onSave, children }) => {
  return (
    <Popup
      title={title}
      visible={visible}
      onHiding={() => setVisible(false)}
      dragEnabled
      closeOnOutsideClick
    >
      {children}
      <div className="form-buttons">
        <Button text="Save" type="success" onClick={onSave} />
        <Button text="Cancel" onClick={() => setVisible(false)} />
      </div>
    </Popup>
  );
};

export default FormPopup;