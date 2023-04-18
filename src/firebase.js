import React from "react";
import { useState } from "react";
import { db } from "./firebase-config";
import { useSelector, useDispatch } from "react-redux";

import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  addDoc,
  query,
  where,
  updateDoc,
  deleteDoc,
  doc,
  setDoc,
  onSnapshot,
} from "firebase/firestore";
import { setFormState } from "./redux/actions/formStateActions";

export const useFirebase = (number) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [data, setData] = useState({});

  //Database
  const [collectionName, setCollectionName] = useState("cards");
  const colRef = collection(db, collectionName);

  //Redux
  const formState = useSelector((state) => state.formState);
  const dispatch = useDispatch();

  //Functions

  // Get user
  const getUser = async (user) => {
    console.log("Getting user");
    setIsLoading(true);

    const docRef = doc(db, collectionName, user);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const docSnapData = docSnap.data();
      console.log("docSnapData", docSnapData);
      dispatch(setFormState({ ...docSnapData }));
      setIsLoading(false);
    }
  };
  // Check if user exists
  const checkUser = async (user) => {
    console.log("Getting user");
    setIsLoading(true);

    const docRef = doc(db, collectionName, user);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const docSnapData = docSnap.data();
      console.log("user exists", docSnapData);
      setData(docSnapData);
      setIsLoading(false);
    } else {
      console.log("doesnt exist");
      setData(null);
      setIsLoading(false);
    }
  };
  // Create new user
  const createNewUser = (number) => {
    const user = {
      id: "_id",
      number: number,
      points: 0,
      redemptions: [],
      visits: [],
    };
    setDoc(doc(colRef, formState.url), formState);
  };

  return {
    isLoading,
    error,
    data,
    createNewUser,
    getUser,
    checkUser,
  };
};
