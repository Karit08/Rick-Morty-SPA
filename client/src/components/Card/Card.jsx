import style from './Card.module.css';

export default function Card(props) {
   return (
      <div  key={props.id} width="350px" height="200px"  background="red" className={style.card}>
          <button onClick={props.onClose} className={style.button}>X</button>
          <img src={props.image} alt={props.name} />
          <h2 className={style.name}>{props.name}</h2> 
          <h2>{props.status}</h2>
          <h2>{props.species}</h2>
          <h2>{props.gender}</h2>
          <h2>{props.origin}</h2>
          
      </div>
   );
};
