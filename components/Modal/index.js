import React, {useState, useEffect} from 'react';
import {Modal, Text} from 'react-native';
import {MainContainer, Content} from './styled';

const CustomModal = ({loading}) => {
  const [displayModal, setDisplayModal] = useState(true);
  useEffect(() => {
    setDisplayModal(loading);
  }, [loading]);
  return (
    <Modal animationType="slide" transparent visible={displayModal}>
      <MainContainer>
        <Content>
          <Text>Cargando...</Text>
        </Content>
      </MainContainer>
    </Modal>
  );
};

export default CustomModal;
