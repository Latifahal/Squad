
const data = [ // its an array of objects

/// you will find a way to iterate over the array of objects
// create a dynamic list, blocks to insert the data to view on the front end

    {
        name: "Latifah",
        age: "19"
    },
    {
        name: "Cynthia",
        age: "20"
    },
    {
        name: "Adwa",
        age: "21"
    },
    {
        name: "Nouf",
        age: "22"
    },
    {
        name: "Fatima",
        age: "23"
    },
    {
        name: "Ahmad",
        age: "24"
    },
    {
        name: "Ali",
        age: "25"
    },
    {
        name: "Faisal",
        age: "26"
    },
    {
        name: "Huzaifa",
        age: "26"
    },
    {
        name: "Raad",
        age: "28"
    },
    {
        name: "Liv",
        age: "29"
    },
    {
        name: "Saif",
        age: "30"
    },
    {
        name: "Salwa",
        age: "31"
    },
]


//________________________FOR LOOP_________________________________//
// for (const person in data){
// console.log(data[person]['age']);

// const list = document.getElementById('data-cont');

// list.innerHTML += '<div>' + data[person]['name'] + ' </div>';
// list.innerHTML += '<div>' + data[person]['age'] + ' </div>';
// }
//________________________________________________________________//




//_______________________FOREACH LOOP____________________________//

const container = document.getElementById('data-cont');

data.forEach(person =>{
    const personElement = document.createElement('div');
    //display data in text
    personElement.textContent = `${person.name}, ${person.age}`;
   
    
    if (person.age >= 19) {
        personElement.classList.add('highlight');
    }
    //add child to container
    container.appendChild(personElement);
})
//________________________________________________________________//




//________________________________________________________________//
//________________________________________________________________//


