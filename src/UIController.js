var UI = { secret: false, gossip: false };
const UIController = (e, data) => {
  console.log(data);
  switch (e) {
    case "gossip":
      UI.gossip
        ? (UI = { secret: false, gossip: false })
        : (UI = { secret: false, gossip: true });
      break;
    case "secret":
      UI.secret
        ? (UI = { secret: false, gossip: false })
        : (UI = { secret: true, gossip: false });
      break;
    case "attendee":
      UI.name === "Liam Bot"
        ? (UI = { secret: false, gossip: true })
        : (UI = { secret: false, gossip: false });
      break;
    default:
      break;
  }
  // console.log("UI", UI);
  return UI;
};

export default UIController;
