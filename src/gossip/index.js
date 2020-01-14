import React from "react";
import { useMachine } from "@xstate/react";
import { gossipLoader } from "./gossipMachine";
import { character, NPCList } from "../database/players";
import * as Themed from "../theme/styles";

import { GossipList } from "./gossip";

export const Gossip = () => {
  const [current, send] = useMachine(gossipLoader);
  console.log("[Gossip] Current: ", current);
  return (
    <>
      {current.matches("loading") && <div>loading...</div>}

      {current.matches("ready") && <GossipList />}

      {current.matches("failure") && <div>Error: Gossip not found.</div>}
    </>
  );
};
