import { Tr, Td } from "@chakra-ui/react";
import { Transaction as TransactionProps } from "@prisma/client";

function Transaction({
  id,
  walletId,
  date,
  transactionType,
  hash,
  amount,
}: TransactionProps) {
  return (
    <Tr>
      <Td>{transactionType}</Td>
      <Td>{date.toLocaleDateString()}</Td>
      <Td>{hash}</Td>
      <Td>{amount}</Td>
    </Tr>
  );
}

export default Transaction;
