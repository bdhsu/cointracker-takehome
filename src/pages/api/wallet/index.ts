import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    handlePOST(req, res);
  } else if (req.method === "GET") {
    handleGET(req, res);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}

async function fetchAddress(address) {
  const BLOCKCHAIR_API_URL = `https://api.blockchair.com/bitcoin/dashboards/address/${address}`;
  const result = await fetch(BLOCKCHAIR_API_URL, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return result;
}

// POST /api/wallet/
// Required fields in body: address
async function handlePOST(req, res) {
  const { address } = req.body;

  // const address = fetchAddress(address)
  // parse address and get transactions
  // save transactions when creating wallet

  const result = await prisma.wallet.create({
    data: {
      address,
    },
  });
  res.json(result);
}

// GET /api/wallet/
async function handleGET(req, res) {
  const result = await prisma.wallet.findMany();

  res.json(result);
}
