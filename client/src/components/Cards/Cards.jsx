import Card from '../Card/Card';
import style from './Cards.module.css';

export default function Cards(props) {
   return (
      <div className={style.conteinerCard}>
         {
            props.characters.length ? (props.characters.map(c =>{
               return (
                  <Card
                     key={c.id}
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