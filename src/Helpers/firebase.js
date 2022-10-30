import { db } from "../firebase-config.js"; // update with your path to firestore config
import {
  doc,
  collection,
  setDoc,
  getDocs,
  updateDoc,
  where,
  query,
} from "firebase/firestore";
async function getTripsDataFromFireStore() {
  const tripCollection = collection(db, "trips");
  const tripsSnapshot = await getDocs(tripCollection);
  const tripsList = tripsSnapshot.docs.map((doc) => doc.data());
  console.log("tripsList", tripsList);
  return tripsList;
}

async function getTripDataFromFireStore(id) {
  const col = collection(db, "trips");
  const q = query(col, where("_id", "==", id));
  const querySnapshot = await getDocs(q);
  console.log("query snap shot=>", querySnapshot);
  return querySnapshot.docs.map((doc) => doc.data());
}

async function postTripBook(data) {
  console.log("data posted=>", data);
  const tripCollection = doc(collection(db, "book"));
  const tripsRes = await setDoc(tripCollection, data);
  console.log("tripRes", tripsRes);
  return tripsRes;
}
export { getTripsDataFromFireStore, getTripDataFromFireStore, postTripBook };
