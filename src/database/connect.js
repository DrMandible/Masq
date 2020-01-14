import { character } from "./players";
const axios = require("axios").default;

const URL = "https://083ti.sse.codesandbox.io/";
const DUMMY_URL = "https://jsonplaceholder.typicode.com/todos";

export async function gamesList(current) {
  let data = current.context.data;
  let players = data.NPCList;
  console.log(players);
  axios({
    method: "GET",
    url: URL
  })
    .then(res => console.log(res))
    .catch(err => {
      console.error(err);
    });
}

// const {
//   Stitch,
//   RemoteMongoClient,
//   AnonymousCredential
// } = require("mongodb-stitch-browser-sdk");

// const client = Stitch.initializeDefaultAppClient("masq-wtlsi");

// const db = client
//   .getServiceClient(RemoteMongoClient.factory, "Masqdb")
//   .db("MasqDatabase");

// client.auth
//   .loginWithCredential(new AnonymousCredential())
//   .then(user =>
//     db
//       .collection("PlayerCollection")
//       .updateOne(
//         { owner_id: client.auth.user.id },
//         { $set: { name: character.Name } },
//         { upsert: true }
//       )
//   )
//   .then(() =>
//     db
//       .collection("PlayerCollection")
//       .find({ owner_id: client.auth.user.id }, { limit: 100 })
//       .asArray()
//   )
//   .then(docs => {
//     console.log("Found docs", docs);
//     console.log("[MongoDB Stitch] Connected to Stitch");
//   })
//   .catch(err => {
//     console.error(err);
//   });

// export const CreateRoom = () => {};

// export const CreateCharacter = () => {};
