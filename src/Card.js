import React from 'react';
import './Card.css';

const Card=(props) => {  
  return (
    <div className='Card'>
      <button type='button' onClick={()=> props.deleteItem(props.id)}
      >
        delete
      </button>
      <h3>{ props.title }</h3>
      <p>{ props.content }</p>
    </div>
  )
}

Card.propTypes = {
  deleteItem: () => {

  }
}

export default Card;