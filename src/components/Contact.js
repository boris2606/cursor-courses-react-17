import React, { useState } from 'react';
import "../styles/Contact.css"

const Contract = (state) => {
    const[show,setShow]= useState(false); // Перевірка стану додаткового блок при отриманні додаткової інформації контакту
    
    function handleSearchChange () {
        for(let value of Object.values(state.contacts)){ // Перебираю значення ключів контакту
            for(let valueCheck of Object.values(state.checkedPerson)){ // Перебераю значення чекбоксу
                if (value.toLowerCase().includes(state.search.toLowerCase().trim()) && valueCheck === state.contacts.gender) { // Роблю звірку значень
                    // Формую вихідний блок
                    return <div>
                        <div className='wrapper_contact_info'>
                            <p className='contact_info'>{state.contacts.firstName} {state.contacts.lastName}</p>
                            {/* Кнопка розкриття додаткової інформації та зміни значення show */}
                            <button className='btn_info' onClick={()=>setShow(!show)}>i</button> 
                        </div>
                        {/* якщо значення show true то показую блок */}
                        { show ? <div className='wrapp_contact_deep_info'>
                                    <p>{state.contacts.phone}</p>
                                    <p>{state.contacts.gender === "male" ? " стать: чоловіча" : state.contacts.gender !== undefined ? 'стать: жіноча' : null}</p>
                        </div> : null}
                        <hr noshade="true" className='hr_block'/>
                    </div>
                }
            }
        };
    }
    return (
        <div className='wrapper_contact'>
            {handleSearchChange()}
        </div>
    );
};

export default Contract;