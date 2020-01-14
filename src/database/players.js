import { Machine } from "xstate";
import { identities } from "../characterAssign/identities";
import { gamesList } from "./connect";
import _ from "lodash";

export var NPCList = {
  "Liam Bot": {
    Name: "Liam Bot",
    GameRoom: "Room Name ABC",
    identity: {},
    charm: 7,
    Clues: [],
    design: "Feather Mask",
    color: {
      id: "Red and Yellow on Purple",
      primary: "rgb(255, 66, 66)",
      background: "rgb(66, 0, 66)",
      secondary: "yellow"
    }
  },
  "Gibson Bot": {
    Name: "Gibson Bot",
    GameRoom: "Room Name ABC",
    identity: {},
    charm: 7,
    Clues: [],
    design: "Sparkle Mask",
    color: {
      id: "Violet and Cyan on Maroon",
      primary: "violet",
      background: "rgb(66, 0, 0)",
      secondary: "cyan"
    }
  },
  "Passkwa Bot": {
    Name: "Passkwa Bot",
    GameRoom: "Room Name ABC",
    identity: {},
    charm: 7,
    Clues: [],
    design: "Mustache Mask",
    color: {
      id: "Green and Blue on Olive",
      primary: "rgb(122, 255, 122)",
      background: "rgb(66, 66, 0)",
      secondary: "rgb(166, 166, 255)"
    }
  },
  "Mike Bot": {
    Name: "Mike Bot",
    GameRoom: "Room Name ABC",
    identity: {},
    charm: 7,
    Clues: [],
    design: "Top Feathers Mask",
    color: {
      id: "Orange and Blue on Sherpa Blue",
      primary: "rgb(255, 99, 0)",
      background: "rgb(0, 66, 66)",
      secondary: "blue"
    }
  },
  "Dave Bot": {
    Name: "Dave Bot",
    GameRoom: "Room Name ABC",
    identity: {},
    charm: 7,
    Clues: [],
    design: "Mustache Mask",
    color: {
      id: "Yellow and Red on Green",
      primary: "rgb(255, 255, 102)",
      background: "rgb(12, 66, 12)",
      secondary: "red"
    }
  }
};

export const character = {
  Name: "New Player",
  userId: "",
  identity: {},
  gameRoom: "",
  charm: 7,
  clues: [],
  design: "",
  color: { primary: "lightgray", secondary: "gray" }
};

export const NPC = () => {
  return NPCList;
};

const GameOptions = {
  "4 Players": {
    count: 4,
    options: {
      Classic: {
        include: ["A", "A", "A", "B"],
        description:
          "The King, the Princess, and the Knight must throw the one player who is up to no good into the dungeons."
      }
    }
  },
  "5 Players": {
    count: 5,
    options: {
      "Double Trouble": {
        include: ["A", "A", "A", "B", "B"],
        description:
          "The King, the Princess, and the Knight must throw two players who are up to no good into the dungeons."
      },
      "Mysterious Stranger": {
        include: ["A", "A", "A", "B", "C"],
        description:
          "The King, the Princess, and the Knight must throw one player who is up to no good into the dungeons. Someone from distant lands will also attend."
      }
    }
  },
  "6 Players": {
    count: 6,
    options: {
      "Double Plus Bad": {
        include: ["A", "A", "A", "B", "B", "C"],
        description:
          "The King, the Princess, and the Knight must throw two players who are up to no good into the dungeons. Someone from distant lands will also attend."
      },
      "Strangers in a Strange Land": {
        include: ["A", "A", "A", "B", "C", "C"],
        description:
          "The King, the Princess, and the Knight must throw one player who is up to no good into the dungeons. Two people from distant lands will also attend."
      }
    }
  }
};

export const allPlayers = current => {
  let data = current.context.data;
  // console.log("data", data);
  data.NPCList.player = data.character;
  return data.NPCList;
};

export const assignIDs = current => {
  let data = current.context.data;

  let list = gamesList(current);
  console.log(list);

  let model = gameRoom(current);
  let players = allPlayers(current);
  // console.log("players", players);

  let gameMode = model.gameOption;
  console.log(gameMode);

  let include = GameOptions["6 Players"].options[gameMode].include;
  let description = GameOptions["6 Players"].options[gameMode].description;

  let shufflePlayers = _.shuffle(players);
  let shuffleIDs = _.shuffle(identities);
  // console.log(shufflePlayers);
  let i = 0;
  let assigned = [];
  include.forEach(includedPriority => {
    let match = _.find(shuffleIDs, { priority: includedPriority });
    // assign ID
    shufflePlayers[i].identity = match;
    assigned.push(match.name);
    // remove ID from list of possible ID's
    let matchIndex = _.findIndex(shuffleIDs, { priority: includedPriority });
    _.pullAt(shuffleIDs, matchIndex);
    i++;
  });
};

export const gameRoom = current => {
  const ROOM_NAME = "Room Name ABC";

  let data = current.context.data;
  let localPlayer = data.character;
  let networkPlayers = data.NPCList;

  localPlayer.gameRoom = ROOM_NAME;

  let model = {
    id: ROOM_NAME,
    playerCount: 6,
    gameOption: "Strangers in a Strange Land",
    players: { localPlayer, networkPlayers }
  };

  console.log("[gameRoom: model]", model);

  return model;
};
