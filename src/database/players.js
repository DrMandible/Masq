import { character } from "../characterAssign/character";
import { masks } from "../characterAssign/masks";

var NPCList = {
  "Liam Bot": {
    GameRoom: 123,
    mask: 999,
    secretID: 999,
    charm: 7,
    Clues: [],
    color: { primary: "rgb(153, 153, 255)", secondary: "green" }
  },
  "Gibson Bot": {
    GameRoom: 123,
    mask: 999,
    secretID: 999,
    charm: 7,
    Clues: [],
    color: { primary: "lightgreen", secondary: "rgb(204, 0, 102)" }
  },
  "Passkwa Bot": {
    GameRoom: 123,
    mask: 999,
    secretID: 999,
    charm: 7,
    Clues: [],
    color: { primary: "chartreuse", secondary: "coral" }
  },
  "Mike Bot": {
    GameRoom: 123,
    mask: 999,
    secretID: 999,
    charm: 7,
    Clues: [],
    color: { primary: "magenta", secondary: "olive" }
  },
  "Dave Bot": {
    GameRoom: 123,
    mask: 999,
    secretID: 999,
    charm: 7,
    Clues: [],
    color: { primary: "rgb(255, 105, 15)", secondary: "violet" }
  }
};

export const NPC = () => {
  return NPCList;
};
