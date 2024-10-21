const WAGE_PER_HOUR = 20;
const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4;
const WORKING_DAYS_PER_MONTH = 20 

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

daily_wages = []
count =0
for(let day=0 ; day<WORKING_DAYS_PER_MONTH ; day++)
{
    employee_status = check_attendance();
 
    switch(employee_status){
        case "Full_time": 
            daily_wage = wage(FULL_TIME_HOURS);
            daily_wages.push(daily_wage);
            break;
        
        case "Part_time":
            daily_wage = wage(PART_TIME_HOURS);
            daily_wages.push(daily_wage);
            break;
        
        default: 
            count +=1;
            break;             
    }
    wage_per_month = calculate_monthly_wage(daily_wages)
}
console.log(daily_wages);
console.log(`Employee is absent for ${count}`)
temp = 20 - count
console.log(`Employee wage for ${temp} working days is : ${wage_per_month}`)