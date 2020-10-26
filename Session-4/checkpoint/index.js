// Init
let movie = {
    title: 'Forrest Gump',
    year: '1994',
    rate: '8.8'
}

// Read
// Approach 1:
console.log(movie);
// Approach 2:
console.log(movie['title']);
console.log(movie['year']);
console.log(movie['rate']);

console.log(movie['director']);

// let property = prompt('Enter the property')
// if (movie[property] == null || movie[property] == undefined) {
//     alert(`${property} is null or undefined`);
// }
// else alert(`${property} is a real value`);

// Update
movie['rate'] = 8.7;
movie['rate'] += 0.5;
console.log(movie);

let updateField = prompt('Enter the property you want to update');
if (movie[updateField] == undefined) {
    alert(`'${updateField}' does not exist in our data, we will add new`);
    let newValue = prompt('Enter the new data');
    movie[updateField] = newValue;
    console.log(movie);
}
else {
    let updateValue = prompt('What is the update');
    movie[updateField] = updateValue;
    console.log(movie);
}

let movies = []
let titles = ['AoT', 'Avengers', 'The boys'];
let years = ['2013', '2012', '2019'];
let rates = ['8.8', '8.4', '8.7'];
movies.push(movie);
for (let i = 0; i < 3; i++) {
    movies.push({
        title: titles[i],
        year: years[i],
        rate: rates[i]
    });
}
console.log(movies[0]);
console.log(movies[3].title);

for (let item of movies) {
    console.log('---------------------');
    console.log(item['title']);
    console.log(item['year']);    
    console.log(item['rate']);
}

movies[1].cast = [];
movies[1].cast.push('Eren');
movies[1].cast.push('Mikasa');
movies[1].cast.push('Armin');
console.log(`Title: ${movies[1].title}`);
console.log(`Year: ${movies[1].year}`);
console.log(`Rate: ${movies[1].rate}`);
console.log(`Casts: ${movies[1].cast}`);