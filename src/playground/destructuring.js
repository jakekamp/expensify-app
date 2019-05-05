
// object destructuring

const person = {
    name: 'Jake',
    age: 45,
    location: {
        city: 'Indy',
        temp: 75
    }
}

const { name: firstName = 'Annonomous' , age } = person

console.log (`${firstName} is ${age}`)


const { city = 'New York' , temp: temperature } = person.location

if (city && temperature) {
    console.log(`it is ${temperature} in ${city} right now`)
}



const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'penguin'
    }
}

const { name: publisherName = 'self published' } = book.publisher

console.log(publisherName)



// array destrructuring

const address = ['123 main', , 'Indiana', '46236']


const [ , cityy = 'unknown' , state , zip ] = address


console.log(`You are in ${cityy} ${state}`)


const menu = ['shake', '$5', '$6', '$7']

const [ item ,  , m_price ] = menu
 
console.log(`A medium ${item} is ${m_price}`)


