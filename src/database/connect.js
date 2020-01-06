// import { stitch } from "mongodb-stitch-browser-sdk";

// const client = stitch.Stitch.initializeDefaultAppClient("masq-wtlsi");

// const db = client
//   .getServiceClient(stitch.RemoteMongoClient.factory, "Masqdb")
//   .db("MasqDatabase");

// client.auth
//   .loginWithCredential(new stitch.AnonymousCredential())
//   .then(user =>
//     db
//       .collection("PlayerCollection")
//       .updateOne(
//         { owner_id: client.auth.user.id },
//         { $set: { number: 42 } },
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
