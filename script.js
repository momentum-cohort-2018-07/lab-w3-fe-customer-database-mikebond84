function titleCase (word) {
  return word[0].toUpperCase() + word.slice(1)
}

function toTitleCase (str) {
  str = str.toLowerCase().split(' ')
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1)
  }
  return str.join(' ')
}

function stateToAbbrev (state) {
  let statesObject = {
    'Alabama': 'AL',
    'Alaska': 'AK',
    'American Samoa': 'AS',
    'Arizona': 'AZ',
    'Arkansas': 'AR',
    'California': 'CA',
    'Colorado': 'CO',
    'Connecticut': 'CT',
    'Delaware': 'DE',
    'District Of Columbia': 'DC',
    'Federated States Of Micronesia': 'FM',
    'Florida': 'FL',
    'Georgia': 'GA',
    'Guam': 'GU',
    'Hawaii': 'HI',
    'Idaho': 'ID',
    'Illinois': 'IL',
    'Indiana': 'IN',
    'Iowa': 'IA',
    'Kansas': 'KS',
    'Kentucky': 'KY',
    'Louisiana': 'LA',
    'Maine': 'ME',
    'Marshall Islands': 'MH',
    'Maryland': 'MD',
    'Massachusetts': 'MA',
    'Michigan': 'MI',
    'Minnesota': 'MN',
    'Mississippi': 'MS',
    'Missouri': 'MO',
    'Montana': 'MT',
    'Nebraska': 'NE',
    'Nevada': 'NV',
    'New Hampshire': 'NH',
    'New Jersey': 'NJ',
    'New Mexico': 'NM',
    'New York': 'NY',
    'North Carolina': 'NC',
    'North Dakota': 'ND',
    'Northern Mariana Islands': 'MP',
    'Ohio': 'OH',
    'Oklahoma': 'OK',
    'Oregon': 'OR',
    'Palau': 'PW',
    'Pennsylvania': 'PA',
    'Puerto Rico': 'PR',
    'Rhode Island': 'RI',
    'South Carolina': 'SC',
    'South Dakota': 'SD',
    'Tennessee': 'TN',
    'Texas': 'TX',
    'Utah': 'UT',
    'Vermont': 'VT',
    'Virgin Islands': 'VI',
    'Virginia': 'VA',
    'Washington': 'WA',
    'West Virginia': 'WV',
    'Wisconsin': 'WI',
    'Wyoming': 'WY'
  }
  return statesObject[state]
}

class Customer {
  constructor (customerInfo) {
    this.info = customerInfo
  }

  getEmail () {
    return this.info.email
  }

  getName () {
    return titleCase(this.info.name.first) +
      ' ' +
      titleCase(this.info.name.last)
  }

  getThumbnail () {
    return this.info.picture.large
  }

  getLocation () {
    return toTitleCase(this.info.location.street)
  }

  getLocationState () {
    return toTitleCase(this.info.location.city) + ',' + ' ' +
    stateToAbbrev(toTitleCase(this.info.location.state)) + ' ' + (this.info.location.postcode)
  }

  getDOB () {
    return 'DOB: ' + moment(this.info.dob).format('MMM Do, YYYY')
  }

  getInfo () {
    return 'Customer since: ' + moment(this.info.registered).format('MMM D, YYYY')
  }

  generateDOM () {
    let customerDiv = document.createElement('div')
    customerDiv.classList.add('customer')

    let headshotImg = document.createElement('img')
    customerDiv.classList.add('customerPhoto')
    headshotImg.src = this.info.picture.large

    let nameH2 = document.createElement('h2')
    customerDiv.classList.add('customerName')
    nameH2.innerText = this.getName()

    let emailP = document.createElement('p')
    emailP.classList.add('emailContact')
    emailP.innerText = this.getEmail()

    let location = document.createElement('div')
    location.classList.add('address')
    location.innerHTML = this.getLocation()

    let locationState = document.createElement('div')
    locationState.classList.add('locationState')
    locationState.innerHTML = this.getLocationState()

    let DOB = document.createElement('div')
    DOB.classList.add('DOB')
    DOB.innerHTML = this.getDOB()

    let info = document.createElement('div')
    info.classList.add('info')
    info.innerHTML = this.getInfo()

    customerDiv.appendChild(headshotImg)
    customerDiv.appendChild(nameH2)
    customerDiv.appendChild(emailP)
    customerDiv.appendChild(location)
    customerDiv.appendChild(locationState)
    customerDiv.appendChild(DOB)
    customerDiv.appendChild(info)

    return customerDiv
  }
}

let outputDiv = document.getElementById('customers')
for (let customerInfo of customers) {
  let customer = new Customer(customerInfo)
  outputDiv.appendChild(customer.generateDOM())
}
