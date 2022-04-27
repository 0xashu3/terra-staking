import { Fee, MsgSend, Validator } from "@terra-money/terra.js";
import {
  CreateTxFailed,
  Timeout,
  TxFailed,
  TxResult,
  TxUnspecifiedError,
  useConnectedWallet,
  useLCDClient,
  UserDenied,
} from "@terra-money/wallet-provider";
import ValidatorManager from "components/ValidatorManager";
import React, { useCallback, useState } from "react";

const Staking = () => {
  const connectedWallet = useConnectedWallet();
  const lcd = useLCDClient();
  const [validator, setValidator] = useState<Validator[] | null>(null);
  const setValidators = lcd.staking.validators().then((v) => {
    setValidator(v[0]);
  });
  return (
    <div>
      staking
      {validator?.map((v, key) => (
        <div>
          {" "}
          <ValidatorManager v={v} />{" "}
        </div>
      ))}
    </div>
  );
};

export default Staking;
