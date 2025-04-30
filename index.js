var util = require('util');
var isUndefinedOrNull = function (element) {
    // This validates both undefined and null values because of the '=='
    return element == null;
};
// Created a recursive function in order to attack both nested arrays and objects
var cleanse = function (objectElement) {
    if (typeof objectElement === 'object' && objectElement !== null) {
        // If the element is an object
        var tempObject = {};
        for (var property in objectElement) {
            // Iterate over the element keys
            if (Array.isArray(objectElement[property])) {
                // In case of being an array then iterate over each element of it
                var tempArray = [];
                var arrayCopy = objectElement[property];
                for (var i = 0; i < arrayCopy.length; i++) {
                    var newObjectCleansed = cleanse(arrayCopy[i]);
                    // recursion on each element of the array since contains a new object
                    if (newObjectCleansed) {
                        // If not null then push it
                        tempArray.push(newObjectCleansed);
                    }
                }
                tempObject[property] = tempArray;
            }
            else if (typeof objectElement[property] === 'object' && objectElement[property] !== null) {
                // If the object contains another object inside, then recursion
                tempObject[property] = cleanse(objectElement[property]);
            }
            else if (!isUndefinedOrNull(objectElement[property])) {
                // Validates if the element is not null in order to add it to the returning object
                tempObject[property] = objectElement[property];
            }
        }
        return tempObject;
    }
    return null;
};
var data = {
    nickname: 'spiderman',
    firstName: 'Peter',
    lastName: 'Parker',
    age: undefined,
    address: {
        address: '20 Ingram St.',
        state: 'New York',
        zip: null,
        city: null
    },
    friends: [{
            nickname: 'hulk',
            firstName: undefined,
            lastName: 'Banner',
            age: 0,
            address: {
                address: null,
                state: 'New York',
                zip: null,
                city: null
            },
            friends: null,
        }, {
            nickname: 'iron man',
            firstName: 'Tony',
            lastName: 'Stark',
            age: undefined,
            address: false,
            friends: [{
                    nickname: 'war machine',
                    firstName: null,
                    lastName: null,
                    age: undefined,
                    address: undefined,
                    friends: []
                }]
        }]
};
// Testing Scenario
// Using util inspect to print all of the object, and not having [array] or [object] in the logs
console.log(util.inspect(cleanse(data), false, null, true /* enable colors */));
