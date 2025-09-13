import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

const InfoPopup = ({ isVisible, onClose }) => {
  return (
    <Modal isVisible={isVisible} onBackdropPress={onClose} backdropOpacity={0.5}>
      <View style={styles.modalContainer}>
        <Text style={styles.modalText}>앱 이름: 날씨와 미세먼지 정보 앱</Text>
        <Text style={styles.modalText}>조 이름: 11조</Text>
        <Text style={styles.modalText}>역할 분담: ...</Text>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeButtonText}>닫기</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = {
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    marginBottom: 10,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
};

export default InfoPopup;