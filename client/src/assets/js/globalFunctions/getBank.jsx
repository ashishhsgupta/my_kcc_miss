import { useEffect, useState } from "react"
import { getBanks } from "../services/loanApplicationServices/bankService";

export const getBanksInfo = ()=>{
    const [banks, setBanks] = useState([]);

    useEffect(()=>{
        const fetchBanks = async()=>{
            try{
              const response = await getBanks();
              if(response.success){
                setBanks(response.data);
              }
            }catch(err){
                alert("banks not found!")
            }
        }
        fetchBanks();
    },[]);

    const bankOptions = banks.map((bank)=>({
        value:bank.bankId, label:bank.bankName,
    }));
    return bankOptions;
};