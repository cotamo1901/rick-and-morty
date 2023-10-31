
export const CardItem = ({url,species,name,gender}) => {
  return (
   <div className="card">
<img src={url} alt={species} />
<p>{name}</p>
<p>{gender}</p>
<p>{species}</p>

   </div>
  )
}
