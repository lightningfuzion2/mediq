import { getItemAsync } from "expo-secure-store";
import { BASE_URL } from "../config.js";
import { fetchPartiesFromDB, fetchInvoicesFromDB } from "./shared";

const HEADER = async () => {
  return;
};

export async function getSalesman() {
  let token = await getItemAsync("med_tkkk");

  const res = await fetch(
    BASE_URL + "/v1/salesman/get",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token,
      },
    }
  );
  const response = await res.json();
  return response;
}

// Fetch parties from the local SQLite database instead of the API
export async function fetchParties(txt) {
  try {
    const parties = await fetchPartiesFromDB();  // Fetch from SQLite DB
    return parties;
  } catch (err) {
    console.error("Failed to fetch parties from SQLite", err);
    throw err;
  }
}

// Fetch invoices from the local SQLite database instead of the API
export async function fetchInovices(party_id) {
  try {
    const invoices = await fetchInvoicesFromDB(party_id);  // Fetch from SQLite DB
    return invoices;
  } catch (err) {
    console.error(`Failed to fetch invoices for party ${party_id} from SQLite`, err);
    throw err;
  }
}

// Fetch receipts from the API (this remains unchanged)
export async function fetchRecipts() {
  let token = await getItemAsync("med_tkkk");
  const res = await fetch(
    BASE_URL + "/v1/recipts",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token,
      },
    }
  );
  const response = await res.json();
  return response['data'];
}

// Fetch payments from the API (this remains unchanged)
export async function fetchPayments(id) {
  let token = await getItemAsync("med_tkkk");
  const res = await fetch(
    BASE_URL + "/v1/payments?recipt_id="+id,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token,
      },
    }
  );
  const response = await res.json();
  if (response['data']){
    return response['data'];
  } else {
    return [];
  }
}