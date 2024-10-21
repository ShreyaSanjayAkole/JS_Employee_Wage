class EmployeeWage {
    constructor() {
        this.WAGE_PER_HOUR = 20;
        this.FULL_TIME_HOURS = 8;
        this.PART_TIME_HOURS = 4;
        this.WORKING_DAYS_PER_MONTH = 20;
        this.MAX_WORKING_HOURS = 100;
    }

    check_attendance() {
        const attendance = Math.floor(Math.random() * 3);

        if (attendance === 1) {
            return "Full_time";
        } else if (attendance === 2) {
            return "Part_time";
        } else {
            return "Absent";
        }
    }

    wage(working_hour) {
        return this.WAGE_PER_HOUR * working_hour;
    }

    calculate_monthly_wage(daily_wages) {
        return daily_wages.reduce((total, wage) => total + wage, 0);
    }

    calculateWages() {
        let total_working_hours = 0;
        let daily_wages = [];
        let count = 0;
        let total_working_days = 0;

        while (
            total_working_hours < this.MAX_WORKING_HOURS &&
            total_working_days < this.WORKING_DAYS_PER_MONTH
        ) {
            const employee_status = this.check_attendance();
            let daily_wage = 0;

            switch (employee_status) {
                case "Full_time":
                    daily_wage = this.wage(this.FULL_TIME_HOURS);
                    total_working_hours += this.FULL_TIME_HOURS;
                    break;

                case "Part_time":
                    daily_wage = this.wage(this.PART_TIME_HOURS);
                    total_working_hours += this.PART_TIME_HOURS;
                    break;

                default:
                    count += 1; 
                    break;
            }

            daily_wages.push(daily_wage);
            total_working_days++;
        }

        const wage_per_month = this.calculate_monthly_wage(daily_wages);
        return { daily_wages, count, total_working_hours, wage_per_month };
    }

    displayResult(results) {
        console.log(`\nDaily wages: ${results.daily_wages}`);
        console.log(`Employee was absent for ${results.count} days.`);
        console.log(`Total working days: ${results.daily_wages.length}`);
        console.log(`Total working hours: ${results.total_working_hours}`);
        console.log(`Employee's total wage for the month is: ${results.wage_per_month}`);
    }
}

const wageCalculator = new EmployeeWage();
const results = wageCalculator.calculateWages();
wageCalculator.displayResult(results);
