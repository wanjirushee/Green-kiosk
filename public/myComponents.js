import React from 'react';

function myComponents(props){
    <div className="myComponents">
    console.log(props)
    return(
      <img src ={Props.contact.imgUrl}/>
      <h2>Type:{props.contact.type}</h2>
      <p>Quantity:{props.contact.quantity}</p>
      </div>
    );
}
export default myComponents;