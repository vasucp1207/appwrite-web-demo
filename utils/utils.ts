import { useConfig } from "appwrite-web-react";

const { client, account, database, storage, avatars } = useConfig({
  endpoint: 'http://localhost/v1',
  projectId:'6351b10aa89690061fa4'
});

export {
  client,
  account,
  database,
  storage,
  avatars
}