import { Flex, Tag, Typography, Divider } from "antd";
import CoinInfo from "./CoinInfo";

export default function CoinInfoModal({ coin }) {
  return (
    <>
      <CoinInfo coin={coin} withSymbol />
      <Divider style={{ backgroundColor: "gray" }} />
      <Typography.Paragraph
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 30,
        }}
      >
        <Typography.Text
          style={{ fontWeight: "bold", fontSize: 18, marginRight: 0 }}
          strong
        >
          Price change 1 hour:{" "}
        </Typography.Text>
        <Tag
          style={{ display: "flex", alignItems: "center" }}
          color={coin.priceChange1h > 0 ? "green" : "red"}
        >
          {coin.priceChange1h}%
        </Tag>
        <Typography.Text style={{ fontWeight: "bold", fontSize: 18 }} strong>
          Price change 1 day:{" "}
        </Typography.Text>
        <Tag
          style={{ display: "flex", alignItems: "center" }}
          color={coin.priceChange1d > 0 ? "green" : "red"}
        >
          {coin.priceChange1d}%
        </Tag>

        <Typography.Text style={{ fontWeight: "bold", fontSize: 18 }} strong>
          Price change 1 week:{" "}
        </Typography.Text>
        <Tag
          style={{ display: "flex", alignItems: "center" }}
          color={coin.priceChange1w > 0 ? "green" : "red"}
        >
          {coin.priceChange1w}%
        </Tag>
      </Typography.Paragraph>
      <Typography.Paragraph style={{ fontWeight: 600, fontSize: 19 }}>
        <Typography.Text style={{ fontWeight: "bold", fontSize: 20 }} strong>
          Coin Rank:{" "}
        </Typography.Text>
        {coin.rank}
      </Typography.Paragraph>
      <Typography.Paragraph style={{ fontWeight: 600, fontSize: 19 }}>
        <Typography.Text style={{ fontWeight: "bold", fontSize: 20 }} strong>
          Price BTC:{" "}
        </Typography.Text>
        {coin.priceBtc.toFixed(10)}
      </Typography.Paragraph>
      <Typography.Paragraph style={{ fontWeight: 600, fontSize: 19 }}>
        <Typography.Text style={{ fontWeight: "bold", fontSize: 20 }} strong>
          Coin Price:{" "}
        </Typography.Text>
        {coin.price.toFixed(2)}$
      </Typography.Paragraph>
    </>
  );
}
