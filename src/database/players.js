var NPCList = {
  "Liam Bot": {
    GameRoom: 123,
    mask: 999,
    secretID: 999,
    charm: 7,
    Clues: [],
    color: { primary: "violet", background: "rgb(66, 0, 0)", secondary: "cyan" }
  },
  "Gibson Bot": {
    GameRoom: 123,
    mask: 999,
    secretID: 999,
    charm: 7,
    Clues: [],
    color: { primary: "rgb(204, 255, 204)", secondary: "rgb(0, 0, 102)  " }
  },
  "Passkwa Bot": {
    GameRoom: 123,
    mask: 999,
    secretID: 999,
    charm: 7,
    Clues: [],
    color: { primary: "PaleTurquoise ", secondary: "Maroon  " }
  },
  "Mike Bot": {
    GameRoom: 123,
    mask: 999,
    secretID: 999,
    charm: 7,
    Clues: [],
    color: { primary: "rgb(255, 255, 153)", secondary: "rgb(36, 17, 0)" }
  },
  "Dave Bot": {
    GameRoom: 123,
    mask: 999,
    secretID: 999,
    charm: 7,
    Clues: [],
    color: { primary: "rgb(255, 153, 102)", secondary: "rgb(85, 0, 85)" }
  }
};

export const character = {
  Name: "New",
  GameRoom: "",
  mask: 1,
  secretID: 1,
  charm: 7,
  Clues: [],
  design: "",
  color: { primary: "lightgray", secondary: "gray" }
};

export const NPC = () => {
  return NPCList;
};
