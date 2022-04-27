import { Coin, MsgDelegate, Validator } from "@terra-money/terra.js";
import React, { useCallback, useState } from "react";
import { Fee, MsgSend } from "@terra-money/terra.js";
import {
  CreateTxFailed,
  Timeout,
  TxFailed,
  TxResult,
  TxUnspecifiedError,
  useConnectedWallet,
  UserDenied,
} from "@terra-money/wallet-provider";

const ValidatorManager = (props: { v: Validator }) => {
  const connectedWallet = useConnectedWallet();
  const c = new Coin("uluna", 1000000);
  const [wallet, setWallet] = useState("");
  const stake = () => {
    setWallet(connectedWallet?.terraAddress);
    const delegate = new MsgDelegate(
      connectedWallet?.terraAddress,
      props.v.operator_address,
      c
    );
    connectedWallet
      ?.post({
        fee: new Fee(1000000, "12000uluna"),
        msgs: [delegate],
      })
      .then((nextTxResult: TxResult) => {
        console.log(nextTxResult);
      })
      .catch((error: unknown) => {
        alert(error);
      });
  };

  return (
    <div>
      Validator Operator Address :{props.v.operator_address}{" "}
      {props.v.jailed ? "JAILED" : "NOT JAILED"}
      <button onClick={stake}>Stake 1 Luna</button>
    </div>
  );
};

export default ValidatorManager;
