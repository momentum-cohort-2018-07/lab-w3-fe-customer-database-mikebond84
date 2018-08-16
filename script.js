console.log('Write your code here!')
console.log('customers and moment are available to you.')

function titleCase (word) {
  return word[0].toUpperCase() + word.slice(1)
}

class Customer {
  constructor (customerInfo) {
    this.info = customerInfo
  }

  getName () {
    return titleCase(this.info.name.first) +
      ' ' +
      titleCase(this.info.name.last)
  }
  
   getthumbnailPic() {
        return this.thumbnailPic
   }

  generateDOM () { 
    
    let div = document.createElement('div')
    div.classList.add('customer') 

    let headshotImg = document.createElement ('img')
    div.classList.add('customerPhoto')
    headshotImg.src = this.info.picture.large

    let nameH2 = document.createElement('h2')
    div.classList.add('customerName')
    nameH2.innerText = this.getName ()
    
    let emailP = document.createElement ('p')
    emailP.classList.add ('emailContact')
    emailP.innerText = this.emailP 

    let locationH2 = document.createElement('h2')
    locationH2.classList.add ('location')
    locationH2.innerText = this.locationH2 
    
    div.appendChild(nameH2)
    div.appendChild(headshotImg)
    div.appendChild(locationH2)
    div.appendChild(emailP)
    


    return div
  }
}



let outputDiv = document.getElementById('Customers')
for (let customerInfo of customers) {
  let customer = new Customer(customerInfo)
  outputDiv.appendChild(customer.generateDOM())
}



// class Customer {
//     constructor(name, location, phone, cell, thumbnailPic) {
//         this.name = name;
//         this.location = location;
//         this.phone = phone;
//         this.cell = cell;
//         this.thumbnailPic = thumbnailPic;
//         this.dob = dob;
//         this.registered = registered;
//         }
    
   
    // }
    // getBirthDate() {
    //     return this.birthDate()
    // }
    