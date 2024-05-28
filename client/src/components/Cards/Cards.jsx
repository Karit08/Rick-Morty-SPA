import Card from '../Card/Card';

export default function Cards(props) {
   return (
      <div>
         {
            props.characters.length ? (props.characters.map(c =>{
               return (
                  <Card
                     id={c.id}
                     name={c.name}
                     status={c.status}
                     species={c.species}
                     gender={c.gender}
                     origin={c.origin.name}
                     image={c.image}
                     onClose={c.onClose}
                  />
               )
            })) : <div>No found a character</div>
         }            
      </div>
   )
}