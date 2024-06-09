import { createClient, createPublicClient, http } from "viem";
import {base} from "viem/chains";
import { ENTRYPOINT_ADDRESS_V06 } from "permissionless";
import { paymasterActionsEip7677 } from "permissionless/experimental";

export const client = createPublicClient({
  chain: base,
  transport: http(),
});

// const paymasterService = process.env.PAYMASTER_SERVICE_URL!;

