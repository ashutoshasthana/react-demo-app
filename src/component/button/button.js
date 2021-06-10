import React from 'react';

//Creating custome button
export const CustomButton = (props)=>{

    const { handleClick , buttonTitile } = props;

    return (<button onClick={handleClick} > 
     {
      buttonTitile   
     }
    </button>)

}