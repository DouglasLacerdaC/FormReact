import React from 'react'

export default function form(props){

    return(

        <div className='inputs'>
            <div>
                <label>{props.nome}</label>
                <input type='text'/>
            </div>
            <div>
                <label>{props.sobrenome}</label>
                <input type='text'/>
            </div>
            <div>
                <label>{props.email}</label>
                <input type='email'/>
            </div>
        </div>
    )
}