import * as SQLite from 'expo-sqlite';

// Open or create the SQLite database
const db = SQLite.openDatabaseAsync('med.db');

// Create tables
export function createTables() {
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS parties (id INTEGER PRIMARY KEY NOT NULL, code TEXT, name TEXT, a1 TEXT, a2 TEXT);'
    );
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS invoices (id INTEGER PRIMARY KEY NOT NULL, party_id INTEGER, date TEXT, bal_amt REAL, FOREIGN KEY(party_id) REFERENCES parties(id));'
    );
  }, 
  (error) => {
    console.error("Failed to create tables", error);
  }, 
  () => {
    console.log("Tables created successfully");
  });
}

// Insert a party into the 'parties' table
export function insertParty(party) {
  return new Promise((resolve, reject) => {
    const { id, code, name, a1, a2 } = party;
    db.transaction(tx => {
      tx.executeSql(
        'INSERT OR REPLACE INTO parties (id, code, name, a1, a2) VALUES (?, ?, ?, ?, ?);',
        [id, code, name, a1, a2],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
}

// Insert invoice data into the `invoices` table
export function insertInvoice(invoice) {
  return new Promise((resolve, reject) => {
    const { id, party_id, date, bal_amt } = invoice;
    db.transaction(tx => {
      tx.executeSql(
        `INSERT OR REPLACE INTO invoices (id, party_id, date, bal_amt) VALUES (?, ?, ?, ?);`,
        [id, party_id, date, bal_amt],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
}

// Fetch all parties from the 'parties' table
export function fetchPartiesFromDB() {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM parties;',
        [],
        (_, { rows: { _array } }) => resolve(_array),
        (_, error) => reject(error)
      );
    });
  });
}

// Fetch invoices by party ID from the 'invoices' table
export function fetchInvoicesFromDB(party_id) {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM invoices WHERE party_id = ?;',
        [party_id],
        (_, { rows: { _array } }) => resolve(_array),
        (_, error) => reject(error)
      );
    });
  });
}

// Handler to fetch and update the database when the "Update" button is pressed
export const handleUpdatePress = async () => {
  try {
    // Fetch and update parties
    await updatePartiesFromDB();
    
    // Fetch and update invoices
    await updateInvoicesFromDB();

    console.log("Database updated successfully!");
    Alert.alert("Update", "Database updated successfully!");
  } catch (error) {
    console.error("Error updating database", error);
    Alert.alert("Error", "Failed to update database");
  }
};

// Function to update parties from the local SQLite database
export async function updatePartiesFromDB() {
  const parties = await fetchPartiesFromDB();
  console.log(`Fetched ${parties.length} parties`);

  for (const party of parties) {
      await insertParty(party);
  }
  console.log("Parties updated successfully!");
}

// Function to update invoices from the local SQLite database
export async function updateInvoicesFromDB() {
  const parties = await fetchPartiesFromDB();
  for (const party of parties) {
      const invoices = await fetchInvoicesFromDB(party.id);
      for (const invoice of invoices) {
          await insertInvoice(invoice);
      }
      console.log(`Invoices for party ${party.id} updated successfully!`);
  }
}