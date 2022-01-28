export const accountTypes = [
  { value: "", text: "Select One..." },
  {
    label: "Assets",
    options: [
      { value: "Cash and Bank", text: "Cash and Bank" },
      { value: "Money in Transit", text: "Money in Transit" },
      {
        value: "Expected Payments from Customers",
        text: "Expected Payments from Customers"
      },
      { value: "Inventory", text: "Inventory" },
      {
        value: "Property, Plant, Equipment",
        text: "Property, Plant, Equipment"
      },
      {
        value: "Depreciation and Amortization",
        text: "Depreciation and Amortization"
      },
      {
        value: "Vendor Prepayments and Vendor Credits",
        text: "Vendor Prepayments and Vendor Credits"
      },
      { value: "Other Short-Term Asset", text: "Other Short-Term Asset" },
      { value: "Other Long-Term Asset", text: "Other Long-Term Asset" }
    ]
  },
  {
    label: "Liabilities & Credit Cards",
    options: [
      { value: "Credit Card", text: "Credit Card" },
      { value: "Loan and Line of Credit", text: "Loan and Line of Credit" },
      {
        value: "Expected Payments to Vendors",
        text: "Expected Payments to Vendors"
      },
      { value: "Due For Payroll", text: "Due For Payroll" },
      {
        value: "Due to You and Other Business Owners",
        text: "Due to You and Other Business Owners"
      },
      {
        value: "Customer Prepayments and Customer Credits",
        text: "Customer Prepayments and Customer Credits"
      },
      {
        value: "Other Short-Term Liability",
        text: "Other Short-Term Liability"
      },
      { value: "Other Long-Term Liability", text: "Other Long-Term Liability" }
    ]
  },
  {
    label: "Income",
    options: [
      { value: "Income", text: "Income" },
      { value: "Discount", text: "Discount" },
      { value: "Other Income", text: "Other Income" },
      { value: "Expenses", text: "Expenses" },
      { value: "Operating Expense", text: "Operating Expense" },
      { value: "Cost of Goods Sold", text: "Cost of Goods Sold" },
      { value: "Payment Processing Fee", text: "Payment Processing Fee" },
      { value: "Payroll Expense", text: "Payroll Expense" },
      { value: "Equity", text: "Equity" },
      {
        value: "Business Owner Contribution and Drawing",
        text: "Business Owner Contribution and Drawing"
      },
      { value: "Retained Earnings: Profit", text: "Retained Earnings: Profit" }
    ]
  }
];

export const allAccounts = {
  Assets: [
    {
      type: "Cash and Bank",
      accounts: [
        {
          accountName: "Cash on Hand",
          accountType: "Cash and Bank",
          id: "",
          description:
            "Cash you haven’t deposited in the bank. Add your bank and credit card accounts to accurately categorize transactions that aren't cash.	",
          lastTransaction: "Last transaction on January 27, 2022"
        },
        {
          accountName: "City Bank 6876",
          accountType: "Cash and Bank",
          id: "testid",
          description: "",
          lastTransaction: "No transactions for this account"
        }
      ]
    },
    {
      type: "Money in Transit",
      accounts: [
        {
          accountName: "Cash on Hand",
          accountType: "Cash and Bank",
          id: "",
          description:
            "Cash you haven’t deposited in the bank. Add your bank and credit card accounts to accurately categorize transactions that aren't cash.	",
          lastTransaction: "Last transaction on January 27, 2022"
        },
        {
          accountName: "City Bank 6876",
          accountType: "Cash and Bank",
          id: "testid",
          description: "",
          lastTransaction: "No transactions for this account"
        }
      ]
    }
  ],

  "Liabilities & Credit Cards": [
    {
      type: "Credit Card",
      accounts: [
        {
          accountName: "Cash on Hand",
          accountType: "Cash and Bank",
          id: "",
          description:
            "Cash you haven’t deposited in the bank. Add your bank and credit card accounts to accurately categorize transactions that aren't cash.	",
          lastTransaction: "Last transaction on January 27, 2022"
        },
        {
          accountName: "City Bank 6876",
          accountType: "Cash and Bank",
          id: "testid",
          description: "",
          lastTransaction: "No transactions for this account"
        }
      ]
    },
    {
      type: "Loan and Line of Credit",
      accounts: [
        {
          accountName: "Cash on Hand",
          accountType: "Cash and Bank",
          id: "",
          description:
            "Cash you haven’t deposited in the bank. Add your bank and credit card accounts to accurately categorize transactions that aren't cash.	",
          lastTransaction: "Last transaction on January 27, 2022"
        },
        {
          accountName: "City Bank 6876",
          accountType: "Cash and Bank",
          id: "testid",
          description: "",
          lastTransaction: "No transactions for this account"
        }
      ]
    }
  ]
};
