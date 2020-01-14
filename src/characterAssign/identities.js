export const identities = {
  Princess: {
    name: "Princess",
    priority: "A",
    bucket: "in the royal family",
    power: {
      source: "Kiss",
      description: "Change a frog back to normal."
    },
    goal: {
      description: "Identify everyone who is up to no good.",
      target: "up to no good",
      effect: "medal"
    }
  },
  King: {
    name: "King",
    priority: "A",
    bucket: "in the royal family",
    power: {
      source: "Scepter",
      description:
        "Choose a character to throw into the dungeons at the end of each round."
    },
    goal: {
      description: "Identify everyone who is up to no good.",
      target: "up to no good",
      effect: "medal"
    }
  },
  Knight: {
    name: "Knight",
    priority: "A",
    bucket: "from distant lands",
    power: {
      source: "Sword",
      description:
        "Choose a character to guard at the beginning of each round.",
      longDescription:
        "Choose a character to guard at the beginning of each round. If a player who is up to no good targets character you're guarding, throw that player into the dungeons."
    },
    goal: {
      description: "Identify everyone who is up to no good.",
      target: "up to no good",
      effect: "medal"
    }
  },
  Sorceress: {
    name: "Sorceress",
    priority: "B",
    bucket: "up to no good",
    power: {
      source: "Spellbook",
      description: "Turn one character into a frog at the end of each round."
    },
    goal: {
      description: "Turn the King into a frog.",
      target: "King",
      effect: "win"
    }
  },
  "Jewel Thief": {
    name: "Jewel Thief",
    priority: "B",
    bucket: "up to no good",
    power: {
      source: "Lockpicks",
      description: "Steal from a character you gossipped about this round.",
      longDescription:
        "Steal from a character you gossipped about this round. If that player was the Princess, gain the Princess Necklace. Otherwise gain 3 charm."
    },
    goal: {
      description: "Steal from the Princess.",
      target: "King",
      effect: "win"
    }
  },
  Prince: {
    name: "Prince",
    priority: "C",
    bucket: "from distant lands",
    power: {
      source: "charm",
      description:
        "Gain two extra charm whenever another player gossips about you."
    },
    goal: {
      description: "Have 25 charm",
      target: "charm",
      effect: "medal"
    }
  },
  Singer: {
    name: "Singer",
    priority: "C",
    bucket: "from distant lands",
    power: {
      source: "wardrobe",
      description:
        "At the start of every round you gain 3 charm and all other players gain 1 charm."
    },
    goal: {
      description:
        "End the game with your identity still a secret from everyone.",
      target: "identity",
      effect: "medal"
    }
  }
};
