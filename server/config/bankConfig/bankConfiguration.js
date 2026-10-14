
export const BANK_CONFIG = {
  COOPERATIVE: {
    label: "Cooperative",
    banks: {
      UP_DCCB: {
        bankId: 300,
        bankName: "UP DCCB",
        state:{
          stateId:9,
          stateName:"Uttar Pradesh"
        },
        branches: [
          {
            branchId: 301301,
            branchName: "Lucknow Branch",
            district:{
              districtId:900,
              districtName:"Lucknow"
            },
          },
          {
            branchId: 302302,
            branchName: "Kanpur Branch",
            district:{
              districtId:901,
              districtName:"Kanpur"
            },
          },
          {
            branchId: 303303,
            branchName: "Prayagraj Branch",
            district:{
              districtId:902,
              districtName:"Prayagraj"
            },
          },
        ],
      },
    },
  },
  RURAL: {
    label: "Rural",
    banks: {
      UP_RURAL_BANK: {
        bankId: 200,
        bankName: "UP Rural Bank",
        state:{
          stateId:9,
          stateName:"Uttar Pradesh"
        },
        branches: [
          {
            branchId: 201201,
            branchName: "Lucknow Rural Branch",
            district:{
              districtId:800,
              districtName:"Lucknow East"
            },
          },
          {
            branchId: 202202,
            branchName: "Kanpur Rural Branch",
            district:{
              districtId:801,
              districtName:"Kanpur East"
            }
          },
          {
            branchId: 203203,
            branchName: "Prayagraj Rural Branch",
            district:{
              districtId:802,
              districtName:"Prayagraj East"
            }
          },
        ],
      },
    },
  },
  COMMERCIAL: {
    label: "Commercial",
    banks: {
      UP_COMMERCIAL_BANK: {
        bankId: 100,
        bankName: "UP Commercial Bank",
        state:{
          stateId:9,
          stateName:"Uttar pradesh"
        },
        branches: [
          {
            branchId: 101101,
            branchName: "Lucknow Commercial Branch",
            district:{
              districtId:700,
              districtName:"Lucknow West"
            }
          },
          {
            branchId: 102102,
            branchName: "Kanpur Commercial Branch",
            district:{
              districtId:701,
              districtName:"Kanpur West"
            },
          },
          {
            branchId: 103103,
            branchName: "Prayagraj Commercial Branch",
            district:{
              districtId:702,
              districtName:"Prayagraj West"
            }
          },
        ],
      },
    },
  },
};
