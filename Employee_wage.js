const WAGE_PER_HOUR = 20;
const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4;

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

employee_status = check_attendance();
 
if(employee_status === "Full_time"){
    daily_wage = wage(FULL_TIME_HOURS);
    console.log(`The employee is ${employee_status}.`);
    console.log(`Daily Wage: ${daily_wage}`);
}
else if(employee_status === "Part_time"){
    daily_wage = wage(PART_TIME_HOURS);
    console.log(`The employee is ${employee_status}.`);
    console.log(`Daily Wage: ${daily_wage}`);
}else{
    console.log(`The employee is ${employee_status}.`);
}
