"use client";

import { Transact } from "@/components/Transact";
import { useAccount, useConnect, useDisconnect } from "wagmi";
// import { TransactWithPaymaster } from "@/components/TransactWithPaymaster";

function App() {
  const account = useAccount();
  const { connectors, connect, status, error } = useConnect();
  const { disconnect } = useDisconnect();

  return (
    <>
      <div>
        <h2>Account</h2>
        <div>
          status: {account.status}
          <br />
          <br />
          addresses: {JSON.stringify(account.addresses)}
          <br />
          chainId: {account.chainId}
        </div>

        {account.status === "connected" && (
          <button type="button" onClick={() => disconnect()}>
            Disconnect
          </button>
        )}
      </div>

      <div>
        <h2>Connect</h2>
        {connectors.map((connector) => (
          <button
            id={connector.id}
            key={connector.uid}
            onClick={() => connect({ connector })}
            type="button"
          >
            {connector.name}
          </button>
        ))}
        <div>{status}</div>
        <div>{error?.message}</div>
      </div>
      {account.address && (
        <div>
          <Transact />
        </div>
      )}
    </>
  );
}

export default App;
