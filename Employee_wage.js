function check_attendance(){
    let attendance = Math.floor(Math.random() * 2);

    if(attendance === 1){
        return "Employee is present";
    }else{
        return "Employee is absent";
    }
}

let wage = (wage_per_hour, full_day_hours) => {
    return wage_per_hour * full_day_hours;
}


console.log(check_attendance());
console.log(`Daily wage: ${wage(20,8)}`)
