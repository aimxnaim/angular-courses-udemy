export interface UserInput {
    initialInvestment: number, 
    annualInvestment: number, 
    expectedReturn: number, 
    duration: number
}

export interface investmentData {
    year: number,
    interest: number,
    valueEndOfYear: number,
    annualInvestment: number,
    totalInterest: number,
    totalAmountInvested: number,
  }