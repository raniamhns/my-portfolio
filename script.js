// self-executing function 
(function()  {
    //constant
    const API_URL =' https://jsonplaceholder.typicode.com/posts';


    //Ellementen selection and manipulation
    const form= document. querySelector(contact-form');
    const fetchDataBtn= document.querySelector(fetch-data');
    const jsonDatacontainer= document.querySelector('json-data');

    // Event binding
    form.addEventistener('submit', validateform);
    fetchDataBtn.addEventistener(' click', fetchdata);


    // form validation
    function validateform(event) (
        event.preventDefault();
    const name =document.querySelector('name').value;
    const email= document.querySelector(email').value;
    
    if (!name // !email)  (
        alert('please fill in all field.');
     ) else (
        alert ('thanks you $(name)! your form has been submitted.') ;

     )
    )

    // Fetch to get data 
    async function fetchdata() (
        try (

            const response= await fetch (API_URL);
             displayData (data);

        ) catch (error (

            console.error('error fetching data:', error);

        )
        )
        // JSON manipulation and display
        function displayData(data) (
            const formattedData= JSON.stringify(data,null,)
            jsonDatacontainer.textcontent= formattedData;

        )

        //Template literals
        const greet =(name) => 'hello 'grils'!';
        console.log(greet('student'));

        //Destructuring
        const user = ( name: 'Alice', age: 25);
        const (name, age )= user;
        consol.log('name: $(name), age:'
        
//Spread & Rest oprator
const numbers= (1,2,3);
const (name,age)= (...numbers,4),5);
console.log(newNumber);

// Iteration over an array
NewNumbers.forEach(num=> console.log(num));

// Arrow functions
const square=num => nu:*num));
console.log(square(4));
// Callback function
function fetchDatacallback(callback) 
fetch(API_URL)
- TouchEvent(response=> response.json())
- then (data=> resolve (data))
-catch (error=> reject (error));

        ];
    ];


    fetchDataPromise()
    - then (data=> console.log(data))
    -catch(error=> console.error('error':, error));


    //consumer methods (forEach used above)



    //Async & Await (used in etchData above)
    // Basic CSS animation
     const button= document.querySelector(' button');
     button.styl . transition= 'background-color 0,3s';
     button. styl .backgroundColor='#218740';

]];
button.addEventListener('mouseoout',())=> (
    button . styl. backgroundColor= '#27a785';

]];

// use of flexbox or css grid (used in the css above)


// Use of LocalStorage
localStorage.setItlem('user', JSON,stringify(user));
const storedUser= JSON.parse(localLstorage.getItem('user'));
console.log(storedUser);

)