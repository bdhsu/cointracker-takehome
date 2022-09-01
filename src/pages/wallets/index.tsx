import { GetServerSideProps } from "next";
import prisma from "../../../lib/prisma";
import { makeSerializable } from "../../../lib/util";

import { Box, Button, Grid, useDisclosure, Text } from "@chakra-ui/react";
import { getLayout } from "components/Layout";

import PageHeading from "components/PageHeading";
import Wallet from "components/Wallet";
import AddWalletModal from "components/modals/AddWalletModal";

function WalletsPage({ wallets }) {
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

      {wallets.length > 0 ? (
        <Grid templateColumns="repeat(1fr)" gap={6} mt="4">
          {wallets.map(({ id, address, balance }) => (
            <Wallet key={id} id={id} address={address} balance={balance} />
          ))}
        </Grid>
      ) : (
        <Text mt="4">No wallets available...</Text>
      )}

      <AddWalletModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const wallets = await prisma.wallet.findMany({});

  return {
    props: { wallets: makeSerializable(wallets) },
  };
};

WalletsPage.getLayout = (page) => getLayout(page, "Wallets");

export default WalletsPage;
