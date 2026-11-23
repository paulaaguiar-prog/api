async function dados(){
    const api = await fetch ("https://jsonplaceholder.typicode.com/users");
    console.log (await api.jason());
}

await dados();