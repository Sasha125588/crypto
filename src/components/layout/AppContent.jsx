import { Layout, Typography } from "antd";
import { useCrypto } from "../../context/crypto-context";
import PortfolioChart from "../PortfolioChart";
import AssetsTable from "../AssetsTable";

const contentStyle = {
  textAlign: "center",
  minHeight: "calc(100vh - 60px)",
  color: "#fff",
  backgroundColor: "#001529",
  padding: "1rem",
};

export default function AppContent() {
  const { assets, crypto } = useCrypto();

  return (
    <Layout.Content style={contentStyle}>
      <Typography.Title level={3} style={{ color: "#fff", textAlign: "left" }}>
        Portfolio:{" "}
        {assets
          .map((asset) => {
            return asset.price * asset.amount;
          })
          .reduce((acc, curr) => (acc += curr), 0)
          .toFixed(2)}
        $
      </Typography.Title>
      <PortfolioChart assets={assets} crypto={crypto} />
      <AssetsTable assets={assets} />
    </Layout.Content>
  );
}
