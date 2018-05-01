import SQLite from 'react-native-sqlite-storage';

const databaseName = 'personalfinanceassistant.db';

export default SQLite.openDatabase(
  {
    name: databaseName
  },
  db => db.executeSql("PRAGMA foreign_keys=ON")
);

