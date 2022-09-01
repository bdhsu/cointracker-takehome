import { Box, Button, Grid, useDisclosure } from "@chakra-ui/react";
import { getLayout } from "components/Layout";

import PageHeading from "components/PageHeading";
import Wallet from "components/Wallet";
import AddWalletModal from "components/modals/AddWalletModal";

function WalletsPage() {
  const SAMPLE_WALLETS = [
    {
      id: 1,
      address: "3E8ociqZa9mZUSwGdSmAEMAoAxBK3FNDcd",
      balance: 0.00007569,
    },
    {
      id: 2,
      address: "bc1q0sg9rdst255gtldsmcf8rk0764avqy2h2ksqs5",
      balance: 0,
    },
    {
      id: 3,
      address: "12xQ9k5ousS8MqNsMBqHKtjAtCuKezm2Ju",
      balance: 0.00624366,
    },
  ];

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <PageHeading
        title="Wallets"
        description="View wallets"
        rightComponent={
          <Button variant="solid" colorScheme="blue" onClick={onOpen}>
            Add wallet
          </Button>
        }
      />

      <Grid templateColumns="repeat(1fr)" gap={6} mt="4">
        {SAMPLE_WALLETS.map(({ id, address, balance }) => (
          <Wallet key={id} id={id} address={address} balance={balance} />
        ))}
      </Grid>

      <AddWalletModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
}

WalletsPage.getLayout = (page) => getLayout(page, "Wallets");

export default WalletsPage;
