import { createContext, useEffect, useState } from "react";
import { cryptoAssetsDate } from "../api";
import { percenrDifference } from "../utils";
import { useContext } from "react";

const CryptoContext = createContext({
  assets: [],
  crypto: [],
  loading: false,
});

export function CryptoContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [crypto, setCrypto] = useState([]);
  const [assets, setAssets] = useState([]);

  function mapAssets(assets, all) {
    return assets.map((asset) => {
      const coin = all.find((c) => c.id === asset.id);
      return {
        grow: asset.price < coin.price,
        growPercent: percenrDifference(asset.price, coin.price),
        totalAmount: asset.amount * coin.price,
        coinPrice: coin.price,
        amount: asset.amount,
        name: coin.name,
        totalProfit: asset.amount * coin.price - asset.amount * asset.price,
        ...asset,
      };
    });
  }

  useEffect(() => {
    async function preload() {
      setLoading(true);
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          "X-API-KEY": "UjmxUFmXZmvYsX01Am+SV7hR6GBuqeomx40m3U6F8Qg=",
        },
      };

      const response = await fetch(
        "https://openapiv1.coinstats.app/coins",
        options
      );

      const result = await response.json();
      const all = result.result;
      const cryptoData = all;
      const asset = localStorage.getItem("asset");
      const assets = asset ? JSON.parse(asset) : [];

      setCrypto(cryptoData);
      setAssets(mapAssets(assets, cryptoData));
      setLoading(false);
    }
    preload();
  }, []);

  function addAsset(newAsset) {
    setAssets((prev) => mapAssets([...prev, newAsset], crypto));
  }

  return (
    <CryptoContext.Provider value={{ loading, crypto, assets, addAsset }}>
      {children}
    </CryptoContext.Provider>
  );
}

export default CryptoContext;

export function useCrypto() {
  return useContext(CryptoContext);
}
