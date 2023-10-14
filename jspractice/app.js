console.log("Hello world!!!");
console.warn("you are crossing the limits of html !!!!");
console.info("you are at the boundaries of nagasakli environment!!!!!!");
console.error("something went wrong!!!!");

let student={name:'makenow',address:'nanakramaguda'}
console.log(student);

let a=10;
let b=10;
let c=a+b;
console.log(c);
console.log("sum of two number is::::::" +c);

let t="makenow";
let s="academy";
console.log(`${t} and ${s}`)


/*primitive Datatypes:-
1.Number
2.string
3.boolean
4.undefined
5.null
6.symbol
7.Bigint
*/
/*
References Datatypes:
1.arrays
2.objects
3.functions
*/
let age=45;
console.log(typeof(age));
let firstName="Andhra";
console.log(typeof(firstName));
let data;
console.log(typeof(data));
let data1=null;
console.log(typeof(data1));
let data2=true;
console.log(typeof(data2));
const sym3=Symbol("foo");
console.log(typeof(sym3));
let q=789546213654799221n;
console.log(typeof(q));
let w=BigInt(78954621325622);
console.log(typeof(w));
console.log(w);


//arrays :-are like list in python.

let colors=["Red" ,"Green","Yellow","Orange"];
let colors2=["Red",34,'c',true,54.2];
console.log(colors);
console.log(colors2);


//objects

let studentDetails = {
    firstname:"Tanuja",
    age:23,
    ID:100001
};

console.log(studentDetails);

//functions
 function add( ){
       return 2+3;
 }
console.log("*************string method*************");
let sentence1="An umbrella and its companion!!";
let city=new String("Ramsam is the song");
console.log(city);
//to uppercase and tolowercase 
console.log(sentence1.toLowerCase());
console.log(sentence1.toUpperCase());
//concatination
console.log("**************string concatenation**************");
console.log("2"+"6");
console.log(2+6);
console.log("aplha" +","+"betta");
string1="sweatha";
string2="Naidu";
console.log(`${string1} ${string2}`);
console.log(string1 +" "+string2);
console.log("******Length function in string*********");
console.log(string2.length);
let poem="A Bird in a Hand";
console.log(poem[0]);
console.log(poem.length);
console.log(poem[poem.length-1]);
let song="  swallow ";
let sng="     swallow";
console.log(song);
console.log(song.trim());
console.log(poem.charAt("3"));
console.log(poem.indexOf("i"));
console.log(poem.slice(6));
console.log(poem.slice(1,6));
console.log(poem.includes('w'));
console.log(poem.replace("in","is"));


console.log("****** Arithmetic Operators *********");

//Operators
let a1=15;
let a2=20;
console.log(a1+a2);
console.log(a1-a2);
console.log(a2/a1);
console.log(a2%a1);
console.log(a1*a2);
console.log(5**2);

 /*arrays
     An array is a collection objects;
     It can be similar or different datatypes;
     The elements in an array starting from zero;
     */

     let Numbers=[1,21,13,41,53,66,77,88,79,30];
     console.log(Numbers);
     console.log(Numbers[5]);
     console.log("**************For Loop********************");

     let result="";
     for(let i=0;i<=Numbers.length-1;i++)
          result+=`${Numbers[i]} ,`
    console.log("The elements in the array is :-"+result);

    console.log("**************For in loop*********************")

    result=" ";
    for(let ct in Numbers)
    {
        result+=`${Numbers[ct]}  `
    }
    console.log("For In Loop::::::"+result);

    console.log("**************ForEach loop*********************")

    result=" ";
    Numbers.forEach(function(j){
       // console.log(j)
       result+=`${j}  `
    })
    console.log("foreach function for arrays::::"+result);
    console.log("**************For Of loop*********************")
    result="";
    for(let z of Numbers)
    {
        result+=`${z}  `

    }
   console.log("for of loop result "+result); 
   console.log("**************ForEach with=>*********************")
   result="";
   Numbers.forEach(p=>{(result+=`${p} `)});
   console.log("for each loop with arrow function:::: "+result);

   console.log("*****************Arrays with objectc**********")
   let employees=[
    {
        id:1001 , name:"A" , age:22
    },
    {
        id:1002 , name:"B" , age:23

    },
    {
        id:1003 , name:"C" , age:24

    },
    {
        id:1004 , name:"D" , age:22

    },

   ]
   console.log(employees);
   console.log(employees[1]);
   console.log(employees.length);
   console.log(employees[1].name);
   result="";
   //display all names of employees
   console.log("*****************ALL Employees names**********")

   for(let r=0;r<=employees.length-1;r++)
   {
       result+=`${employees[r].name}  `
   }
   console.log("All employees name:::: "+result);

   let resultarray=[];
   for(let employee of employees)
   {
        if(employee.age==22)
        {
            //console.log(employees[employee].name);
            result+=resultarray.push(employees);
        }

   }
   console.log(resultarray);
//objects
   console.log("*****************Objects**********");
   fan={
    cost:2300,
    colour:'black',
    mfgyear:2021
   }
   console.log(fan);
   console.log(fan.colour);
   console.log(fan['mfgyear']);
   console.log(fan.mfgyear);

   let val='mfgyear';
   console.log(fan[val]);

   //Nested Objects
   console.log("*******************Nested Objects************");
   let studentdata={
        name:"Ashok",
        age:8,
        address:{
            street:"Father balaah",
            city:"alwal",
            district:"hyderabad"
        }

   };
   console.log(studentdata.address);
   console.log(studentdata.address.city);
//crud operations
   console.log("*****************CRUD OPERATIONS************");
   let mobile={
    mfg:2019
   }
console.log(mobile);
console.log(mobile.owner);
mobile.owner="vk company."
console.log(mobile);
delete mobile.mfg;
console.log(mobile);

 //functions
 console.log("*****************Functions************");
 /*1.Isolated Functions
 2..function without returntype
 3.function with returntype*/

 //Isolated functions
 console.log("*****************Isolated Functions************");
 //Isolated functions does not have returntype and parameters

 function greet(){
    console.log("How are you!!!!!");
 }
greet();
console.log("*******Functions without returntype and parameters*********");
let count=0;
function adddata(a,b){

    return count=a+b;
    console.log(count);
}
 let td=adddata(23,45);
 console.log("function with parameter " `${td}`);

 console.log("*******Functions without return*********");
 function studentName(firstname, lastname)
{
    return `${firstname} ${lastname}`
}
let ts=studentName("makenow", "Academy")
console.log("function with parameters::: "+ts);

console.log("*******object has a parameter*********");
function objAsPara(at)
{
    console.log(at);
}
let mobile1={
    colour:"blue",
    price:20000,
    mfgyeardate:2021

};
objAsPara(mobile1);

console.log("*******Array has function parameter*********");
let array=["blue",90,55.67,'c'];
function arrAsPara(ar)
{
    console.log("Normal way::: "+ar);
}
arrAsPara(array);

/*let printarray=function(arrPara){
    for(let index of arrPara)
    {
        console.log(index);
    }
};
printarray(0,32,55,66,88);*/


console.log("*******function inside an object*********");
let student11={  
    firstName:"makenow",
    lastName:"Academy",
    fullName:function(){
        return `${this.firstName},${this.lastName}`
    }

};
console.log(student11.lastName);
console.log(student11.fullName());

//Nested Function

console.log("*******Nested Function*********");
let outerfn=function(){
    console.log("I'm an outer function");
    let innerfn=function(){
        console.log("I'm an inner function");

    };
    innerfn();
};
outerfn();

        



    
    

    
