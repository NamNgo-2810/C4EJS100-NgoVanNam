// Init
let movies = ['The Boys', 'The Avengers', 'The Dear and the Cauldron'];

// Create
let newMovie = prompt('Enter the new movie');
movies.push(newMovie);

// Read
let i = prompt('Enter i');
if (i < movies.length) console.log(movies[i]);
else alert('Invalid index');

// Update
// 1
let newTitle = prompt('Enter the new title');
movies[0] = newTitle;

// 2
i = prompt('Enter the position need to be updated');

if (i < movies.length) {
    newTitle = prompt('Enter the new title');
    movies[i] = newTitle;
}
else alert('Invalid index');

// Delete
i = prompt('Enter i');
movies.splice(i,0);

let n = prompt('Enter n');
movies.splice(i,n);

// Read all
// 1
for (let j = 0; j < arr.length; j++) {
    console.log(movies[j]);
}
// 2
for (let j = 0; j < arr.length/2; j++) {
    console.log(movies[j]);
}
// 3
for (let j = 0; j < arr.length; j++) {
    console.log(`${j+1}. ${movies[j]}`);
}

// Update all
for (let j = 0; j < arr.length; j++) {
    arr[j] = arr[j].toLowerCase();
}