import { ReactNode } from "react";
import Head from "next/head";

import Header from "components/Header";
import PageContent from "components/PageContent";

type LayoutProps = {
  title?: string;
  children: ReactNode;
};

function Layout({ title, children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>
          {title ? `${title} – CoinTracker Takehome` : `CoinTracker Takehome`}
        </title>
      </Head>

      <Header />

      <PageContent>{children}</PageContent>
    </>
  );
}

export const getLayout = (page: ReactNode, title?: string) => (
  <Layout title={title}>{page}</Layout>
);

export default Layout;
