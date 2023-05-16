//question 2

function getLastElements(arr, n = 1) {
    if (n >= arr.length) {
        return arr;
    } else {
        return arr.slice(-n);
    }
}
const numbers = [1, 2, 3, 4, 5];

console.log(getLastElements(numbers)); // Output: [5] (last element)

console.log(getLastElements(numbers, 3)); // Output: [3, 4, 5] (last 3 elements)



//question 3

const a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

for (let i = 0; i < a.length; i++) {
    console.log(`"row ${i}"`);
    for (let j = 0; j < a[i].length; j++) {
        console.log(`"${a[i][j]}"`);
    }
    console.log("------");
}

//question 4



function difference(arr1, arr2) {
    const diffArray = [];

    for (let i = 0; i < arr1.length; i++) {
        if (!arr2.includes(arr1[i])) {
            diffArray.push(arr1[i]);
        }
    }

    for (let j = 0; j < arr2.length; j++) {
        if (!arr1.includes(arr2[j])) {
            diffArray.push(arr2[j]);
        }
    }

    return diffArray;
}
console.log(difference([1, 2, 3], [100, 2, 1, 10]));

//question 5


function filter_array_values(arr) {
    return arr.filter(value => {
        // Check for false, null, 0, and blank values
        if (value === false || value === null || value === 0 || value === '') {
            return false;
        }
        return true;
    });
}

console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));


//question 1

let employees = [
    {
        firstName: 'John',
        lastName: 'Doe',
        age: 27,
        joinedDate: 'December 15, 2017'
    },
    {
        firstName: 'Ana',
        lastName: 'Rosy',
        age: 25,
        joinedDate: 'January 15, 2019'
    },
    {
        firstName: 'Zion',
        lastName: 'Albert',
        age: 30,
        joinedDate: 'February 15, 2011'
    }
];

employees.sort((a, b) => a.age - b.age);
console.log(employees);

