import React from 'react'


export default function Alert(props) {

    const capitalize = (word)=>{   //this function is use to convert first letter small to capital
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
    props.alert &&  <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
</div>
   
  )
}

