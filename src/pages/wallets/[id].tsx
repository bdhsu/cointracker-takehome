import { GetServerSideProps } from "next";
import prisma from "../../../lib/prisma";
import { makeSerializable } from "../../../lib/util";
import { useRouter } from "next/router";
import {
  Box,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tbody,
  Tr,
  Th,
} from "@chakra-ui/react";

import { getLayout } from "components/Layout";
import PageHeading from "components/PageHeading";
import Transaction from "components/Transaction";

function WalletPage({ id, address, balance, transactions }) {
  // NOTE: Page is still showing sample transactions due to not getting fetching from the api working in the  alotted time
  const SAMPLE_TXS = [
    {
      id: "2863561b-2340-48a3-830a-373bb5f92801",
      walletId: 1,
      date: new Date(),
      transactionType: "SEND",
      hash: "27fd4463f3554007a5bde48cb3b2a6e6ce2a687608972ac59ce904bb9cb43191",
      amount: 0.00646472,
    },
    {
      id: "2863561b-2340-48a3-830a-373bb5f92801",
      walletId: 2,
      date: new Date(),
      transactionType: "SEND",
      hash: "27fd4463f3554007a5bde48cb3b2a6e6ce2a687608972ac59ce904bb9cb43191",
      amount: 0.00646472,
    },
    {
      id: "2863561b-2340-48a3-830a-373bb5f92801",
      walletId: 3,
      date: new Date(),
      transactionType: "SEND",
      hash: "27fd4463f3554007a5bde48cb3b2a6e6ce2a687608972ac59ce904bb9cb43191",
      amount: 0.00646472,
    },
  ];

  return (
    <Box>
      <PageHeading
        title={`Wallet ${id}`}
        description="View all transactions for this wallet"
      />

      <TableContainer mt="4">
        <Table variant="simple">
          <TableCaption>Wallet address: {address}</TableCaption>
          <Thead>
            <Tr>
              <Th>Transaction Type</Th>
              <Th>Date</Th>
              <Th>Hash</Th>
              <Th>Amount</Th>
            </Tr>
          </Thead>
          <Tbody>
            {SAMPLE_TXS.map(
              ({ id, walletId, date, transactionType, hash, amount }) => (
                <Transaction
                  key={id}
                  id={id}
                  walletId={walletId}
                  date={date}
                  transactionType={transactionType}
                  hash={hash}
                  amount={amount}
                />
              )
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const walletId = context.query.id || "";

  const { id, address, balance, transactions } = await prisma.wallet.findUnique(
    {
      where: { id: parseInt(walletId as string) },
      include: {
        transactions: true,
      },
    }
  );
  return {
    props: { id, address, balance, transactions },
  };
};

WalletPage.getLayout = (page) => getLayout(page, "Wallet Transactions");

export default WalletPage;
