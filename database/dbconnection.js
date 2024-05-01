import mongoose from "mongoose";

export const dbconnection = () => {
  mongoose.connect("mongodb://localhost:27017/node_mongodb")
        .then(() => {
                console.log({message: "connection established"});
              })
        .catch((error) => {
                console.error({message: "error", error});
              });
}