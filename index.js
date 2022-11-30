function marks (studentMark){
    let result;
    if(studentMark > 79 ){
        return result = "A"
    }
    else if (studentMark >= 60 && studentMark <= 79){
        return result = "B"
    }
    else if (studentMark >= 49 && studentMark <=59){
        return result = "C"
    }
    else if (studentMark >= 40 && studentMark < 49){
        return result = "D"
    }
    else if (studentMark < 40){
      return result = "E"
    }
}

console.log(marks(81.1))

//Challenge 2: Speed Detector (Toy Problem)
function speedOfCar(speed){
    if (speed < 70){
        return result = "OK"
    }
    else {
        if((Math.round(speed - 70)/5)>12){
            return result = " Licence suspended"
        }
        else {
            return result = "Demerit points" + Math.round((speed - 70)/5)
        }
    }
}
console.log(speedOfCar(121))

//Challenge 3: Net Salary Calculator (Toy Problem)
let benefits;
let salary;
let NSSF;
let PAYE;
let gross;
//NetSalary
function netSalary(individualPay,benefits){
    let grosspay = individualPay + benefits
    if (grosspay <= 24000){
        PAYE = 0.1 * grosspay
    }
    else if (grosspay > 24001 && grosspay <= 32333){
         PAYE =0.25 * grosspay
    }
    else if(grosspay > 32,333){
         PAYE =0.3 * grosspay
    }
    //NHIF
    if (grosspay <= 5999){
        NHIF =150
    }
    else if (grosspay > 6000 && grosspay <= 7999){
         NHIF = 300
    }
    else if (grosspay > 8000 && grosspay <= 11999){
         NHIF =400
    }
    else if (grosspay > 12000 && grosspay <= 14999){
         NHIF =500
    } 
    else if (grosspay > 15000 && grosspay <= 19999){
          NHIF =600
    }
    else if (grosspay > 20000 && grosspay <= 24999){
        NHIF =750
    }
    else if (grosspay > 25000 && grosspay <= 29999){
         NHIF=850
    }
    else if (grosspay > 30000 && grosspay <= 34999){
         NHIF =900
    }
    else if (grosspay > 35000 && grosspay <= 39999){
         NHIF =950
    } 
    else if (grosspay > 40000 && grosspay <= 44999){
         NHIF =1000
    }
    else if (grosspay > 45000 && grosspay <= 49999){
         NHIF =1100
    }
    else if (grosspay > 50000 && grosspay <= 59999){
         NHIF =1200
    }
    else if (grosspay > 60000 && grosspay <= 69999){
         NHIF =1300
    }
    else if (grosspay > 70000 && grosspay <= 79999){
         NHIF =1400
    }
    else if (grosspay > 80000 && grosspay <= 89999){
        NHIF =1500
    }
    else if (grosspay > 90000 && grosspay <= 99999){
        NHIF =1600
    }
    else if (grosspay >= 100000){
         NHIF =17000
    }
//NSSF
NSSF = gross * 0.06;
console.log('Gross salary:',grosspay)
console.log('PAYE deduction:', PAYE)
console.log('NSSF deduction:', NSSF)
console.log('NHIF deduction:', NHIF)
let salaryNet = 'Net Salary:' + (grosspay - (NSSF + PAYE + NHIF))
console.log('Taxes; result + NHIF + NSSF :', (result + NHIF + NSSF ))
return salaryNet;
} 

console.log(netSalary(82000,9000));
            
       
