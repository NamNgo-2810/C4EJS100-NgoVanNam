// async function load() {
//     const conn = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu/`);
//     const data = await conn.json();
//     return data;
// };
// console.log(load());

const fetchPromise = fetch(`https://pokeapi.co/api/v2/pokemon/pikachu/`);
fetchPromise.then(connect => {
    console.log('connected');
    console.log(connect);
    const data = connect.json();
    console.log(data);
})