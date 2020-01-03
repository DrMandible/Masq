import { character } from "./character";
import { masks } from "./masks";
import { secretIDs } from "./identities.js";

const chooseRandom = arrayOfObjects => {
  let numOfItems = arrayOfObjects.length;
  return Math.floor(Math.random() * Math.floor(numOfItems));
};
var randomKey = function(obj) {
  var keys = Object.keys(obj);
  return keys[(keys.length * Math.random()) << 0];
};

export const assignMask = () => {
  let characterMask;
  // console.log("character.mask", character.mask);
  if (character.mask === 999) {
    characterMask = chooseRandom(masks);
    character.mask = characterMask;
  } else {
    characterMask = character.mask;
  }
  character.color = masks[characterMask];
  // console.log("characterMask", characterMask);
  console.log("palette", masks[characterMask]);

  return characterMask;
};

export const secretID = () => {
  let secretID;
  if (character.secretID === 999) {
    secretID = randomKey(secretIDs);
    character.secretID = secretID;
  } else {
    secretID = character.secretID;
  }
  return secretID;
};
