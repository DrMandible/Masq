import { Machine, assign } from "xstate";
import { character, NPCList } from "../database/players";
// import "../database/connect";

export const gossipConfirm = {
  target: "",
  cost: ""
};

export const gossipLoader = Machine({
  id: "gossipLoader",
  initial: "ready",
  context: {
    data: { character, NPCList }
  },
  states: {
    loading: {
      id: "loading",
      on: {
        FAIL: "failure",
        LOADED: "ready"
      }
    },
    failure: {
      type: "final"
    },
    ready: {
      type: "final"
    }
  }
});

export const gossipMachine = Machine({
  id: "gossipMachine",
  initial: "idle",
  context: {
    data: { character, NPCList }
  },
  states: {
    idle: {
      on: { CHOOSE_GOSSIP: "confirm", HIDE: "hide" }
    },
    confirm: {
      on: {
        CANCEL: "idle",
        CONFIRM: "idle"
      }
    },
    hide: {
      on: {
        SHOW: "idle"
      }
    }
  }
});

export const handleGossip = (gossip, event) => {
  console.log("[handleGossip] gossip:");
};

export const confirmGossip = (gossip, event) => {
  console.log("confirmGossip: ", gossip, event);
};
