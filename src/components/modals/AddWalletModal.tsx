import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

type ModalType = {
  isOpen: boolean;
  onClose: () => void;
};

type FormData = {
  address: string;
};

function AddWalletModal({ isOpen, onClose }: ModalType) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data) => {
    alert(`Saving new wallet with address ${data.address}`);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader>Add new wallet</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl id="address" isInvalid={!!errors.address}>
              <FormLabel>Wallet address</FormLabel>
              <Input
                placeholder="Wallet address"
                type="text"
                {...register("address", {
                  required: "Wallet address is required",
                })}
              />
              <FormErrorMessage>
                {errors.address && errors.address.message}
              </FormErrorMessage>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" type="submit">
              Save
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}

export default AddWalletModal;
