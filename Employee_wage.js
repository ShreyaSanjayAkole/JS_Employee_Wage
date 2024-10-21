const WAGE_PER_HOUR = 20;
const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4;
const WORKING_DAYS_PER_MONTH = 20 
const MAX_WORKING_HOURS = 100

function check_attendance(){
    let attendance = Math.floor(Math.random() * 3);

    if(attendance === 1){
        return "Full_time";
    }else if(attendance === 2){
        return "Part_time";
    }else{
        return "Absent";
    }
}

let wage = (working_hour) => {
    return WAGE_PER_HOUR * working_hour;
}

let calculate_monthly_wage = (daily_wages) => {
    
    total_wage = 0
    for(daily_wage of daily_wages){
        total_wage += daily_wage
    }
    return total_wage
}

let total_working_hours = 0
let daily_wages = []
let count =0
let total_working_days = 0

while(total_working_hours < MAX_WORKING_HOURS && total_working_days < WORKING_DAYS_PER_MONTH)
{
    employee_status = check_attendance();
 
    switch(employee_status){
        case "Full_time": 
            daily_wage = wage(FULL_TIME_HOURS);
            daily_wages.push(daily_wage);
            total_working_hours += FULL_TIME_HOURS
            total_working_days +=1;
            break;
        
        case "Part_time":
            daily_wage = wage(PART_TIME_HOURS);
            daily_wages.push(daily_wage);
            total_working_hours += PART_TIME_HOURS
            total_working_days =+1;
            break;
        
        default: 
            count +=1;
            total_working_days +=1;
            break;             
    }
    wage_per_month = calculate_monthly_wage(daily_wages)
}
console.log(`\nDaily wages: ${daily_wages}`)
console.log(`Employee was absent for ${count} days.`)
console.log(`Total working days: ${daily_wages.length}`)
console.log(`Total working hours: ${total_working_hours}`)
console.log(`Employee's total wage for the month is: ${wage_per_month}`)