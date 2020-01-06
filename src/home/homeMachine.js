import { Machine, assign } from "xstate";
import { character } from "../database/players";

const setDesign = assign({
  design: (context, event) => event.design
});

export const homeMachine = Machine({
  id: "home",
  initial: "splash",
  context: {
    data: { character }
  },
  states: {
    splash: {
      id: "splash",
      on: {
        DESIGN: "design"
      }
    },
    design: {
      id: "design",
      on: {
        CHOOSE_DESIGN: "colors"
      }
    },
    colors: {
      id: "colors",
      on: { CHOOSE_COLOR: "confirm" }
    },
    confirm: {
      id: "confirm",
      on: { ACCEPT: "complete", CANCEL: "design" }
    },
    complete: {
      type: "final"
    }
  }
});
