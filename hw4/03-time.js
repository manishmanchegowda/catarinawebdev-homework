const calculateTime = (date1, date2) => {
  // Given two dates, calculate and return the amount of time elapsed in years and months
  let start_date = new Date(date1);
  let end_date = new Date(date2);
  const [start_month, start_year] = [
    start_date.getMonth(),
    start_date.getFullYear(),
  ];
  const [end_month, end_year] = [end_date.getMonth(), end_date.getFullYear()];
  const year_diff = start_year - end_year;
  const month_diff = start_month - end_month;

  let stringbe = "Time elapsed: "
  
  if(isNaN(start_date) || isNaN(end_date)){
    return "Error: Invalid input provided"
  }
  else if (year_diff===0){
    stringbe = stringbe + month_diff + " months"
  }
  else{
    stringbe = stringbe + year_diff + " years," + month_diff + " months"
  }
  return stringbe
};

// Date() formats:
// new Date('December 1, 1995')
// new Date('2008-1-11')
// new Date(2020, 3, 16)
// new Date(628021800000)

console.log(calculateTime(1635176171332, 'May 1, 1995'));
// Time elapsed: 26 years, 5 months
console.log(calculateTime(1635176171332, '1975-8-11'));
// Time elapsed: 46 years, 2 months
console.log(calculateTime(1635176171332, [2021, 5, 23]));
// Time elapsed: 5 months
console.log(calculateTime(1635176171332, 1031814000000));
// Time elapsed: 19 years, 1 month
console.log(calculateTime(1635176171332, 'birthdate'));
// Error: Invalid input provided.
