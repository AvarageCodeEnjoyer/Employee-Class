const
employeeBox = document.getElementById('employeeBox'),
addressBox = document.getElementById('addressBox'),
form = document.querySelector('form'),
submit = document.getElementById('submit'),
fname = document.getElementById('fname'),
lname = document.getElementById('lname'),
job = document.getElementById('job'),
email = document.getElementById('email'),
age = document.getElementById('age'),
address = document.getElementById('address'),
city = document.getElementById('city'),
zipCode = document.getElementById('zipCode'),
state = document.getElementById('state'),
country = document.getElementById('country'),
printAddress = document.getElementById('printAddress')

let employeeARR = []
let i = 0

class Employee{
  constructor(fname, lname, job, email, age){
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
      Age: ${this.age} <br> <br>
      Job: ${this.job} <br> <br>
      Email: ${this.email}`

    employeeBox.appendChild(createLI)
    reset()
  }  
}

/* -- Add the address to the Employee class to display address if chosen to - */

class AddressTemplate extends Employee{
  constructor(fname, lname, job, email, age, address, city, zipCode, state, country){
    super(fname, lname, job, email, age)
    this.address = address
    this.city = city
    this.zipCode = zipCode
    this.state = state
    this.country = country
  }
  
  addAddress(){
    let createLI2 = document.createElement('LI')

    createLI2.innerHTML = 
      `<h2>Home Address</h2> <br>
      Address: ${this.address} <br>
      ZipCode: ${this.zipCode} <br>
      City: ${this.city} <br>
      State: ${this.state} <br> 
      Country: ${this.country} <br>`

    addressBox.appendChild(createLI2)
    this.addEmployee()
    reset()
  }  
}

/* ------------------------------- Reset form ------------------------------- */

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
  printAddress.checked = false
}

/* ----- Make addressBox say "ADDRESS HIDDEN" if checkbox is not clicked ---- */

function createHidden(){
  let create = document.createElement('LI')
  create.innerHTML = `<br><br><br><h1>ADDRESS HIDDEN</h1>`
  addressBox.appendChild(create)
}

form.addEventListener("submit", e => {
  e.preventDefault()
  let 
    fName = fname.value,
    lName = lname.value,
    Job = job.value,
    Email = email.value,
    Age = age.value,
    Address = address.value,
    City = city.value,
    ZipCode = zipCode.value,
    State = state.value,
    Country = country.value

  employeeARR[i] = new AddressTemplate(fName, lName, Job, Email, Age, Address, City, ZipCode, State, Country)
  if(printAddress.checked){
    employeeARR[i].addAddress()
    i++
    return
  }
  employeeARR[i].addEmployee()
  createHidden()
  i++
  return
})


/* function login(){
  for(i = 0; i < employeeARR.length; i++){

  }
} */




