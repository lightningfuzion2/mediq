import { BASE_URL } from "../config";
import { getItemAsync } from "expo-secure-store";

const header = (data) => {
  let token = getItemAsync("med_tkkk");
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
    body: JSON.stringify(data),
  };
};

export async function postRecipt(data) {
  let token = await getItemAsync("med_tkkk");
  const res = await fetch(BASE_URL + "/v1/recipt/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
    body: JSON.stringify(reciptData(data)),
  });
  const response = await res.json();
  console.log(response);
  return response;
}

export async function login(data) {
  let token = getItemAsync("med_tkkk");
  const res = await fetch(BASE_URL + "/v1/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
    body: JSON.stringify(data),
  });
  const response = await res.json();
  return response;
}


function reciptData(data) {
  let postData = {};

  let invoices_obj = data["inovices"];
  let cheque = data["cheque"];

  let invoices = [];
  let amount = 0;
  for (const key in invoices_obj) {
    amount += invoices_obj[key]["amt_paid"];
    invoices.push({
      inovice_id: key,
      amount: invoices_obj[key]["amt_paid"],
      date: invoices_obj[key]["date"],
    });
  }
  postData["amount"] = amount;
  postData["mode"] = data["mode"];
  postData["party_id"] = data["party_id"];
  postData["inovices"] = invoices;
  postData["cheque"] = cheque;

  return postData;
}
