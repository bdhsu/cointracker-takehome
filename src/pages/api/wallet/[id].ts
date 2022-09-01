import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const walletId = req.query.id;

  if (req.method === "DELETE") {
    handleDELETE(walletId, res);
  } else if (req.method === "GET") {
    handleGET(walletId, res);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}

// DELETE /api/wallet/:id
async function handleDELETE(walletId, res) {
  const wallet = await prisma.wallet.delete({
    where: { id: parseInt(walletId) },
  });
  res.json(wallet);
}

// GET /api/wallet/:id
async function handleGET(walletId, res) {
  const wallet = await prisma.wallet.findUnique({
    where: { id: walletId },
  });
  res.json(wallet);
}
