import Head from "next/head";
import CoinList from "../components/CoinList";
import Search from "../components/Search";

export default function Home({ filteredCoins }) {
  return (
    <div>
      <Head>
        <title>Next-Crypto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Search type="text" placeholder="Search" />
      <CoinList filteredCoins={filteredCoins} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
  );

  const filteredCoins = await res.json();

  return {
    props: {
      filteredCoins,
    },
  };
};
