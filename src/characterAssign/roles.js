export const roles = {
  Assassin: {
    Plot: "Kill the King",
    Power: {
      Name: "Assassinate",
      Description: "Once per round you may kill any other character."
    },
    bgColor: "indianred",
    iamgeUrl: "https://i.imgur.com/Hvb6TU3.jpg"
  },
  Inquisitor: {
    Plot: "Find the assassin",
    Power: {
      Name: "Imprison",
      Description:
        "Once per round you may put another character in the dungeon. Win the game if that character is the Assassin."
    },
    bgColor: "steelblue"
  },
  "Private Detective": {
    Plot: "Catch the jewel thief",
    Power: {
      Name: "Investigate",
      Description: "Gain a free clue at the end of each round."
    },
    bgColor: "yellow",
    imageUrl: "https://i.imgur.com/cY6kL6v.jpg"
  },
  "Jewel Thief": {
    Plot: "Collect 100 jewels",
    Power: {
      Name: "Pickpocket",
      Description:
        "Once per round you may steal half of another player's jewels."
    },
    bgColor: "aqua",
    imageUrl: "https://i.imgur.com/z3Ukr52.jpg"
  }
};
