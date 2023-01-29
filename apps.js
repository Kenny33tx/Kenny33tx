function printEmployeeForm(name, jobTitle, Salary, Status ){
    this.name = name
    this.jobTitle = jobTitle
    this.Salary = Salary
    this.Status = Status
    
}
var bob = new printEmployeeForm("bob", "V School instructor", "$3000/hr", "Full time")
console.log(bob)
var megan = new printEmployeeForm("megan", "Pilot","$20,000/month","Full time" )
console.log(megan)
var jim = new printEmployeeForm("jim", "mail packager", "$15/hr","Part time")
console.log(jim)