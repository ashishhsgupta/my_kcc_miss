import { useEffect, useState } from "react";
import { getBranches } from "../services/loanApplicationServices/bankService";

export const getBranchInfo = (bankId) => {
    const [ branches, setBranches] = useState([]);

    useEffect(()=>{
        const fetchBranches = async()=>{
            if(!bankId){
                setBranches([]);
                return;
            }
            try{
              const response = await getBranches(bankId);
              if(response.success){
                const options = response.data.map((branch)=>({
                    value:branch.branchId,label:branch.branchName,
                }));
                setBranches(options);
              }
            }catch(err){
                alert("Barnch not found!")
            }
        }
        fetchBranches();
    },[bankId]);

  return branches;
}