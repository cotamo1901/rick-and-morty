export const getCard = async(event) => {
    const url = `https://rickandmortyapi.com/api/character/?name=${event}`;
    const resp = await fetch(url);
    const { results } = await resp.json();
  
    const card=results.map(img=>{
        return{
           id: img.id,
           name:img.name,
           gender: img.gender,
           species: img.species,
           url: img.image 
        }
    })
    console.log(card)
    return card
  };