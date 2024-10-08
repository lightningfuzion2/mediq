import * as SQLite from 'expo-sqlite';

// Open the SQLite database
const db = SQLite.openDatabaseSync('med.db');

// Fetch parties from the local SQLite database
export function fetchPartiesFromDB() {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM parties', // SQL Query
        [], // No parameters
        (_, { rows: { _array } }) => resolve(_array), // Success callback
        (_, err) => reject(err) // Error callback
      );
    });
  });
}

// Fetch invoices by party ID from the local SQLite database
export function fetchInvoicesFromDB(party_id) {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM invoices WHERE party_id = ?', // SQL Query
        [party_id], // Parameter for party_id
        (_, { rows: { _array } }) => resolve(_array), // Success callback
        (_, err) => reject(err) // Error callback
      );
    });
  });
}