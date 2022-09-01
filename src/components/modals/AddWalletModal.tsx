import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
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

type ModalType = {
  isOpen: boolean;
  onClose: () => void;
};

type FormData = {
  address: string;
};

function AddWalletModal({ isOpen, onClose }: ModalType) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data) => {
    const { address } = data;

    try {
      const body = { address };
      await fetch(`/api/wallet/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      await router.push("/wallets");
    } catch (error) {
      console.error(error);
    }
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
