import React from "react"
import SelectedInvoiceList from "./SelectedInvoiceList"
import CashOr from "./CashOr"
import Cash from "./Cash";
import { postRecipt } from "../helper/post";
import { fetchInovices } from "../helper/get";
export default function SelectedInvoiceSteps({ amt, inovices, setSelected,party,fetchInovices }) {

  const [step,setStep ]= React.useState(1)
  const [otp, setOtp] = React.useState("");

  const [cheque, setCheque] = React.useState({
    'number' : '',
    'clearing_date' : '',
    'date' : '',
    'bank_name' : '',
  });


  if(step == 1) return <SelectedInvoiceList items={inovices} setSelected={setSelected} setStep={setStep} amt={amt} /> 

  if(step == 2)  return <CashOr setStep={setStep} />

  if(step == 3) {
    postRecipt({
      'inovices' : inovices,
      'cheque' : cheque,
      'mode' : 'cash',
      'party_id' : party.id,
    }).then(res => {
      setSelected({})
      fetchInovices()
      setVisable(false)
    })
  } 

  // if(step == 4) return <Cheque chequeData={chequeData} setChequeData={setChequeData}  />
   
}

