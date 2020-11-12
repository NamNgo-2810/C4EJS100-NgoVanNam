async function load() {
    const conn = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu/?fbclid=IwAR2PuEMZhSQ0H-b-f879aUQ_g6BMHfkOlINd_45lray8DXChdGmCEGX9TrY`);
    const data = await conn.json();
    console.log(data);
}

//load();

function generateId() {
    const x = Math.random();
    const y = x.toString(36);
    const z = y.substr(2, 9);
    return z;
}
