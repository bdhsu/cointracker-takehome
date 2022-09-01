import Link from "next/link";
import { Wallet as WalletProps } from "@prisma/client";
import { GridItem, Text, Button, useDisclosure } from "@chakra-ui/react";

import RemoveWalletModal from "components/modals/RemoveWalletModal";

function Wallet({ id, address, balance }: WalletProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <GridItem>
      <Text fontWeight="medium">
        Wallet {id} -{" "}
        <Button variant="link" colorScheme="red" size="sm" onClick={onOpen}>
          Remove wallet
        </Button>
      </Text>
      <Text>Address: {address}</Text>
      <Text>Balance: {balance}</Text>
      <Link href={`wallets/${id}/`}>
        <Button variant="link" size="sm" colorScheme="blue">
          View transactions
        </Button>
      </Link>

      <RemoveWalletModal isOpen={isOpen} onClose={onClose} walletId={id} />
    </GridItem>
  );
}

export default Wallet;
