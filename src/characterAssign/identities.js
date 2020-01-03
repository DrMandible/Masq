export const secretIDs = {
  Princess: {
    priority: "A",
    bucket: "royalty",
    power: {
      source: "Princess's Necklace",
      description: "+7 charm at the beginning of every round."
    },
    goal: {
      description: "Identify everyone who is up to no good.",
      target: "up to no good",
      effect: "medal"
    }
  },
  King: {
    priority: "A",
    bucket: "royalty",
    power: {
      source: "King's Crown",
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
    priority: "A",
    bucket: "royalty",
    power: {
      source: "Queen's Crown",
      description:
        "Choose a character to throw into the dungeons at the end of each round."
    },
    goal: {
      description: "Identify everyone who is up to no good.",
      target: "up to no good",
      effect: "medal"
    }
  },
  Sorceress: {
    priority: "A",
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
    priority: "C",
    bucket: "up to no good",
    power: {
      source: "Lockpicks",
      description: "Steal from a character you gossipped with this round."
    },
    goal: {
      description: "Steal the Princess's Necklace and the King's Crown.",
      target: "King",
      effect: "win"
    }
  }
};
