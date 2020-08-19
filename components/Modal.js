import React, {useState, useEffect} from 'react';
import {Modal, View, Text} from 'react-native';
import {connect} from 'react-redux';

const CustomModal = ({loading}) => {
  const [displayModal, setDisplayModal] = useState(true);
  useEffect(() => {
    setDisplayModal(loading);
  }, [loading]);
  return (
    <Modal animationType="slide" transparent visible={displayModal}>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}>
        <View
          style={{
            width: '50%',
            backgroundColor: 'white',
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 5,
            textAlign: 'center',
          }}>
          <Text>Cargando...</Text>
        </View>
      </View>
    </Modal>
  );
};

const mapStateToProps = ({loading}) => ({
  loading,
});

export default connect(mapStateToProps, null)(CustomModal);
