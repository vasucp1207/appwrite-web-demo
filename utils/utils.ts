import { useConfig } from "appwrite-web-react";

const { client, account, database, storage, avatars } = useConfig({
  endpoint: process.env.REACT_APP_ENDPOINT,
  projectId:process.env.REACT_APP_PROJECT
});

export {
  client,
  account,
  database,
  storage,
  avatars
}