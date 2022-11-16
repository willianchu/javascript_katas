// POLICY:

// 1. Vacation Entitlement and Accrual

// a. Vacation entitlement credits for regular full-time employees will be calculated using his/her employment anniversary date.

// b. Vacation entitlement will be accrued and added to each employee’s accumulated annual Vacation entitlement each pay period based on the following:

// if length of service is from 1 year, Rate of Accrual per eligible earnings is 4%.00%, and Maximum Annualized Vacation is 10 days
//if length of service is from 2 years, Rate of Accrual per eligible earnings is 5.77%, and Maximum Annualized Vacation is 15 days
//if length of service is from 5 years, Rate of Accrual per eligible earnings is 7.69%, and Maximum Annualized Vacation is 20 days
//if length of service is from 15 years, Rate of Accrual per eligible earnings is 9.62%, and Maximum Annualized Vacation is 25 days

// c. Vacation accrual will be prorated for any regular part-time employees.
// d. Vacation accrual totals will be printed on employee’s pay stubs each pay period.
// e. Vacation entitlement hours are generally not earned during lay-offs or leaves of absences such as medical, maternity, parental, personal, or educational. Exceptions will be made based on individual provincial legislation.

const vacationEntitlementAndAccrualCalculator = (lengthOfService) => {
  let rateOfAccrualPerEligibleEarnings = 0;
  let maximumAnnualizedVacation = 0;
  if (lengthOfService >= 15) {
    rateOfAccrualPerEligibleEarnings = 0.0962;
    maximumAnnualizedVacation = 25;
  } else if (lengthOfService >= 5) {
    rateOfAccrualPerEligibleEarnings = 0.0769;
    maximumAnnualizedVacation = 20;
  } else if (lengthOfService >= 2) {
    rateOfAccrualPerEligibleEarnings = 0.0577;
    maximumAnnualizedVacation = 15;
  } else if (lengthOfService >= 1) {
    rateOfAccrualPerEligibleEarnings = 0.04;
    maximumAnnualizedVacation = 10;
  }
  return { rateOfAccrualPerEligibleEarnings, maximumAnnualizedVacation };
};


// initial Enrolement 2% of base salary
// 25 months to 60 months 3% of base salary
// 61 months to 96 months 4% of base salary
// 97 months to above 5% of base salary

// 25 months in years = 2.0833333333333335

// 61 months in years = 5.083333333333333

// 97 months in years = 8.083333333333334
