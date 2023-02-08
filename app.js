const ulList = document.getElementById('ulList')
const form = document.querySelector('form')
const submit = document.getElementById('submit')
const fname = document.getElementById('fname')
const lname = document.getElementById('lname')
const address = document.getElementById('address')
const city = document.getElementById('city')
const zipCode = document.getElementById('zipCode')
const state = document.getElementById('state')
const country = document.getElementById('country')
const job = document.getElementById('job')
const email = document.getElementById('email')
let employeeARR = []
var i = 0

class Employee{
  constructor(fname, lname, job, email){
    this.fname = fname
    this.lname = lname
    this.job = job
    this.email = email
  }
  addEmployee() {
    let createLI = document.createElement('LI')
    createLI.innerHTML = `<h1>${this.fname} ${this.lname}</h1>
                          Job: ${this.job} <br>
                          Email: ${this.email}`
    ulList.appendChild(createLI)
    console.log(employeeARR[i])
    i++
    // reset()
    return
  }  
}

class AddressTemplate extends Employee{
  constructor(fname, lname, job, email, address, city, zipCode, state, country){
    super(fname, lname, job, email)
    this.address = address
    this.city = city
    this.zipCode = zipCode
    this.state = state
    this.country = country
  }
  addAddress() {
    let createLI = document.createElement('LI')
    createLI.innerHTML = `<h1>${this.address}</h1> <br>
                          ZipCode: ${this.zipCode}
                          State: ${this.state}
                          Country: ${this.country}
                          City: ${this.city} <br>
                          Email: ${this.email}`
    ulList.appendChild(createLI)
    console.log(employeeARR[i])
    i++
    // reset()
    return
  }  
}


function reset(){
  fname.value = ""
  lname.value = ""
  grade.value = ""
  program.value = ""
  homeSchool.value = ""
  email.value = ""
}



form.addEventListener("submit", e => {
  e.preventDefault()
  let fName = fname.value
  let lName = lname.value
  let Job = job.value
  let Email = email.value
  let Address = address.value
  let City = city.value
  let ZipCode = zipCode.value
  let State = state.value
  let Country = country.value
  employeeARR[i] = new AddressTemplate(fName, lName, Job, Email, Address, City, ZipCode, State, Country)
  return employeeARR[i].addAddress()
})




