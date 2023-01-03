import { initializeApp } from "firebase/app";

const fbApp = initializeApp({
    apiKey: "AIzaSyB-5U4nm1qMcOMBnw33_LwHDxxoO-wO348",
    authDomain: "step-up-crm.firebaseapp.com",
    // The value of `databaseURL` depends on the location of the database
    databaseURL: "https://step-up-crm.firebaseio.com",
    projectId: "step-up-crm",
    storageBucket: "step-up-crm.appspot.com",
    messagingSenderId: "729928036694",
    // appId: "APP_ID",
    // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
    // measurementId: "G-MEASUREMENT_ID",
})



export { fbApp }
