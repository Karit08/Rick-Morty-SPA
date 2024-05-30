import style from './Search.module.css';

export default function SearchBar(props) {
    return (
       <div className={style.search}>
          <input type='search' className={style.input}/>
          <button onClick={props.onSearch} className={style.buton}>Add</button>
          <i className="fa-thin fa-magnifying-glass"></i>
       </div>
    );
}