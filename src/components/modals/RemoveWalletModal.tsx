import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
} from "@chakra-ui/react";

type ModalType = {
  isOpen: boolean;
  onClose: () => void;
  walletId: number;
};

function RemoveWalletModal({ isOpen, onClose, walletId }: ModalType) {
  const handleRemove = () => {
    alert(`Removing wallet ${walletId}`);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Remove wallet</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>Are you sure you want to remove this wallet?</Text>
        </ModalBody>

        <ModalFooter>
          <Button variant="ghost" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="red" onClick={handleRemove}>
            Remove
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default RemoveWalletModal;
