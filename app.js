const employeeBox = document.getElementById('employee')
const addressBox = document.getElementById('address')
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
  constructor(fname, lname, job, age, email){
    this.fname = fname
    this.lname = lname
    this.job = job
    this.age = age
    this.email = email
  }
  addEmployee() {
    let createLI = document.createElement('LI')

    createLI.innerHTML = 
      `<h1>${this.fname} ${this.lname}</h1> <br>
      Age: ${this.age} <br>
      Job: ${this.job} <br>
      Email: ${this.email}`

    employeeBox.appendChild(createLI)
    // reset()
 
  }  
}

class AddressTemplate extends Employee{
  constructor(fname, lname, job, age, email, address, city, zipCode, state, country){
    super(fname, lname, job, email, age)
    this.address = address
    this.city = city
    this.zipCode = zipCode
    this.state = state
    this.country = country
  }
  addAddress() {
    let createLI = document.createElement('LI')

    createLI.innerHTML = 
      `<h1>${this.address}</h1> <br>
      ZipCode: ${this.zipCode} <br>
      State: ${this.state} <br> 
      Country: ${this.country} <br>
      City: ${this.city} <br>
      Email: ${this.email}`

    addressBox.appendChild(createLI)
    console.log(employeeARR[i].addEmployee)
    employeeARR[i].addEmployee()
    // reset()
  }  
}

function reset(){
  fname.value = ""
  lname.value = ""
  job.value = ""
  age.value = ""
  email.value = ""
  address.value = ""
  city.value = ""
  zipCode.value = ""
  state.value = ""
  country.value = ""
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
  employeeARR[i].addAddress()
  return
})




