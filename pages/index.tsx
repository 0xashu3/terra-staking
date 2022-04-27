import ConnectSample from "./connect-sample";
import CW20TokensSample from "./cw20-tokens-sample";
import NetworkSample from "./network-sample";
import QuerySample from "./query-sample";
import SignBytesSample from "./sign-bytes-sample";
import SignSample from "./sign-sample";
import Staking from "./staking";
import TxSample from "./tx-sample";

export default function Index() {
  return (
    <div>
      <ConnectSample />
      <Staking />
    </div>
  );
}
