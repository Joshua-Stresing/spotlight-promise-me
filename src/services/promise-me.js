// 'https://officeapi.dev/api/quotes/random'

/**
 * TODO: Exercise 1: use `fetch` & async/await to get data from an API
 */

export async function asyncGetQuotes() {
    console.log('1.Before Async fetch complete');

    const res = await fetch ('https://futurmaapi.herokuapp.com/api/quotes/1');
    console.log('2.Async fetch complete')
    const result = await res.json;
    console.log('3.After async fetch')
    const quote = result[0];
    const totalResults = result.length;

    return { quote: result[0], totalResults: result.length };
} 

/**
 * TODO: Exercise 2: use `fetch` & `.then` syntax to get the same data from the first exercise.
 */

export async function getQuotes() {
    return fetch ('https://futurmaapi.herokuapp.com/api/quotes/1')
    .then((res) => res.json())
    .then((result) => ({ quote: result[0], totalResults: result.length }))
    .then (({quote}) => quote);
}

/**
 * TODO: Exercise 3: use `fetch`, async/await, and a try/catch statement to get data from an API and handle errors
 */

export async function asyncTryGetQuotes() {
    try {
        console.log('1. Before async fetch');
        const res = await fetch ('https://futurmaapi.herokuapp.com/api/quotes/1');
        console.log('2. Async fetch complete')
        const result = await res.json;
        console.log('3.After async fetch')
        const quote = result[0];
        const totalResults = result.length
    } catch (error) {
        console.error('Oops! An error has occured')
    }
}


/**
 * TODO: Exercise 4: use `fetch`, `.then`, and `.catch` to get the same data from exercise 3 while handling errors
 */

 export async function thenTryGetQuotes() {
    return fetch ('https://futurmaapi.herokuapp.com/api/quotes/1')
    .then((res) => res.json())
    .then((result) => ({ quote: result[0], totalResults: result.length }))
    .then(() => console.log('2.then fetch complete'))
    .catch((error) => console.error('Oops! An error has occured'))

/**
 * TODO: Exercise 5: use `fetch`, async/await, and a try/catch/finally statement to get data from an API, handle errors, then console.log('All done!') upon completion
 */

 export async function asyncFinallyGetQuotes() {
    try {
        console.log('1. Before async fetch');
        const res = await fetch ('https://futurmaapi.herokuapp.com/api/quotes/1');
        console.log('2. Async fetch complete')
        const result = await res.json;
        console.log('3.After async fetch')
        const quote = result[0];
        const totalResults = result.length
    } catch (error) {
        console.error('Oops! An error has occured')
    }finally{
        console.log('All Done!')
    }
}


/**
 * TODO: Exercise 6: use `fetch`, `.then`, `.catch`. and `.finally` to get the same data from exercise 5 while handling errors and calling console.log('All done!') upon completion
 */

 export async function thenTryGetQuotes() {
    return fetch ('https://futurmaapi.herokuapp.com/api/quotes/1')
    .then((res) => res.json())
    .then((result) => ({ quote: result[0], totalResults: result.length }))
    .then(() => console.log('2.then fetch complete'))
    .catch((error) => console.error('Oops! An error has occured'))
    .finally(() => console.log('Alldone!'));

/**
 * TODO: Exercise 7: Call your function from exercise 7 using .then
 */

export function thenAsyncGetQuotes() {
    return asyncFinallyGetQuotes().then((result)=> console.log('completed running async finally get quotes with results:', result));
}

/**
 * TODO: Exercise 8: Call your function from exercise 6 using async/await
 */

 export async function thenTryGetQuotes() {
    return fetch ('https://futurmaapi.herokuapp.com/api/quotes/1')
    .then((res) => res.json())
    .then((result) => ({ quote: result[0], totalResults: result.length }))
    .then(() => console.log('2.then fetch complete'))
    .catch((error) => console.error('Oops! An error has occured'))
    .finally(() => console.log('Alldone!'));
