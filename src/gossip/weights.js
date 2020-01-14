import { gameRoom, assignIDs } from "../database/players";

export const gossipFrequency = current => {
  gameRoom(current);
  assignIDs(current);
  // cycles through NPC designs & colors to determine frequency
  let data = current.context.data;

  let weights = { design: {}, color: {} };

  let colorList = [];
  Object.values(data.NPCList).map((value, key) =>
    colorList.push(value.color.id)
  );

  colorList.map(searchValue => {
    let matches = 0;
    colorList.map(matchValue => {
      searchValue === matchValue && matches++;
    });
    searchValue === data.character.color.id && matches++;
    weights.color[searchValue] = matches;
  });

  let designList = [];
  Object.values(data.NPCList).map((value, key) =>
    designList.push(value.design)
  );

  designList.map(searchValue => {
    let matches = 0;
    designList.map(matchValue => {
      searchValue === matchValue && matches++;
    });
    searchValue === data.character.design && matches++;
    weights.design[searchValue] = matches;
  });

  console.log(weights);
};
