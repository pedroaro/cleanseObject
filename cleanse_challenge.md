# Cleanse Challenge

Create a function `cleanse` that removes all the `null` and `undefined` props of a given object. Consider a deep cleanse of the object, not only the first level.

## Rules

You can use VainillaJS, RamdaJS, or TypeScript to solve the problem. 

- You can use this [Ramda Repl Link](https://tinyurl.com/ygvvpxfs) playground.
- Provide a solution in another **Ramda Repl Link** or a gist link.
- You SHOULD NOT mutate the original data

HAVE FUN!!

### Example

Given the following data:

```javascript
const data = {
  nickname  : 'spiderman',
  firstName : 'Peter',
  lastName  : 'Parker',
  age       : undefined,
  address   : {
    address : '20 Ingram St.',
    state   : 'New York',
    zip     : null,
    city    : null
  },
  friends   : [{
    nickname  : 'hulk',
    firstName : undefined,
    lastName  : 'Banner',
    age       : 0,
    address   : {
      address : null,
      state   : 'New York',
      zip     : null,
      city    : null
    },
    friends   : null,
  }, {
    nickname  : 'iron man',
    firstName : 'Tony',
    lastName  : 'Stark',
    age       : undefined,
    address   : false,
    friends   : [{
      nickname  : 'war machine',
      firstName : null,
      lastName  : null,
      age       : undefined,
      address   : undefined,
      friends   : []
    }]
  }]
};
```

the output of the function should be:
```javascript
{
  nickname  : 'spiderman',
  firstName : 'Peter',
  lastName  : 'Parker',
  address   : {
    address : '20 Ingram St.',
    state   : 'New York'
  }
  friends   : [{
    nickname  : 'hulk',
    lastName  : 'Banner',
    age       : 0,
    address   : {
      state   : 'New York'
    }
  }, {
    nickname  : 'iron man',
    firstName : 'Tony',
    lastName  : 'Stark',
    address   : false,
    friends   : [{
      nickname  : 'war machine',
      friends   : []
    }]
  }]
};
```