const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
]

// Q. Give array of inventors ' first and last name '

// ['Albert entn', ' isaac newton',]

// let fulname = [];   

// for(var i=0; i<inventors.length; i++){
//     var nm = inventors[i].first+' '+inventors[i].last;
//     fulname.push(nm);
// }

// console.log(fulname);
    
// Map()    


// let fullname = inventors.map(function(ele,i,arr){
//     return `${ele.first} ${ele.last}`
// });

let fullname = inventors.map(ele => `${ele.first} ${ele.last}`)
console.log(fullname);

Array.prototype.myMap = function(cb) {

    //storage

    let storage = [];

    for(var i=0; i<this.length; i++ ){
        let value = cb(this[i],i,this);
        storage.push(value)
    }
    return storage;
}

let fN = inventors.myMap(function(ele,i,arr){
    return `${ele.first} ${ele.last}`
})

console.log('My map', fN);



// Q. Filter the list of inventors for those who were born in the 1500's


// let fifteens = [];

// for(var i=0; i<inventors.length; i++){
//     if(inventors[i].year >= 1500 && inventors[i].year < 1600) {
//         fifteens.push(inventors[i]);
//     }
// }

// filter();


let fifteens = inventors.filter(function(ele,i,arr){
    if(ele.year >= 1500 && ele.year < 1600){
        return true 
    }else{
        return false
    }
})

let ft = inventors.filter(ele => ele.year >= 1500 && ele.year < 1600)
console.log(fifteens);

Array.prototype.myfilter = function(cb) {
    let storage = [];

    for(var i=0; i<this.length; i++){

        if(cb(this[i],i,this)){
            storage.push(this[i]);
        }
    }
    return storage;
}

let ftn = inventors.filter(ele => ele.year >= 1500 && ele.year < 1600)
console.log(ftn ,'My filter');


// 3. Sort the inventors by birthdate, oldest to youngest

let ordr = inventors.sort(function(a,b){
    if(a.year > b.year){
        return -1
    }else{
        return 1
    }
})

let order = inventors.sort((a,b) => a.year > b.year ? 1 : -1 );

console.log(order);


// Q. How many years did all the inventors live?

// let totalyears = 0;

// for( var i=0; i<inventors.length; i++){
//     totalyears += inventors[i].passed - inventors[i].year;
// }

// console.log(totalyears);

let totalyear = inventors.reduce(function (total, ele){
    total += ele.passed - ele.year;
    return total
}, 0);  // intial value

console.log(totalyear);

console.log(typeof inventors);

let check = Array.isArray(inventors);
console.log(check);



let arr = [2,4,3,6];

let rev = arr.reverse();

console.log(rev);


















