/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })
    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!
    return payable
}


function createEmployeeRecord(employeeDeetsArray){
    const employeeDeetsObject = {
        'firstName':employeeDeetsArray[0],
        'familyName':employeeDeetsArray[1],
        'title':employeeDeetsArray[2],
        'payPerHour':employeeDeetsArray[3],
        'timeInEvents':[],
        'timeOutEvents':[]
    };
    return employeeDeetsObject
};


function createEmployeeRecords(employeeDeetsArrays){
    let newEmployeeDeetsArray = [];
    employeeDeetsArrays.forEach(employeeDeetsArray=>{newEmployeeDeetsArray.push(createEmployeeRecord(employeeDeetsArray))})
    return newEmployeeDeetsArray
};

function createTimeInEvent(dateStamp){
    this['timeInEvents'].push({'type': 'TimeIn',
                                         'hour': parseInt(dateStamp.split(" ")[1]),
                                         'date': dateStamp.split(" ")[0]
                                        })
    return this
}

function createTimeOutEvent(dateStamp){
    this['timeOutEvents'].push({'type': 'TimeOut',
                                         'hour': parseInt(dateStamp.split(" ")[1]),
                                         'date': dateStamp.split(" ")[0]
                                        })
    return this
}

function hoursWorkedOnDate(formDate){
    let TimeOut = this['timeOutEvents'].filter(e =>{return e.date === formDate})
    let TimeIn = this['timeInEvents'].filter(e =>{return e.date === formDate})
         let result = TimeOut[0]['hour'] - TimeIn[0]['hour']
         let result2 = result.toString()
        return parseInt(result2.substring(0,result2.length -2))   
 }
 
 function wagesEarnedOnDate(formDate){
         return parseInt(hoursWorkedOnDate.call(this,formDate) * this['payPerHour'])   
  }

  function calculatePayroll(empRecArray){
    let allWages = empRecArray.map(empRec => {let allWagesInside = allWagesFor.bind(empRec)
                                             return allWagesInside(empRec)})
    let totalWagesEarned = allWages.reduce(function(total,element){return element + total})
    return totalWagesEarned
 }
 



 function findEmployeeByFirstName(srcArray,firstName){
    let results = srcArray.filter(employeeRecord =>{return employeeRecord['firstName'] === firstName})
    return results[0]
  }