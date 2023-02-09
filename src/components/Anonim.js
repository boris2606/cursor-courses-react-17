import React,{useState}from 'react';

const Anonim = (state) => {
    const[show,setShow]= useState(false);// Перевірка стану додаткового блок при отриманні додаткової інформації контакту
    function createAnonim (){
        for(let value of Object.values(state.anonim)){ // Перебір значень аноніму
            if (value.toLowerCase().includes(state.search.toLowerCase().trim()) && state.checkedPerson.checkedPersonAnon === 'finded'){ // Звірка значень аноніма з полями пошуку та значенням чекбоксу
               // Формую вихідний блок
                return <div>
                    <div className='wrapper_contact_info'>
                        <p className='contact_info'>{state.anonim.firstName} {state.anonim.lastName}</p>
                        {/* Кнопка розкриття додаткової інформації та зміни значення show */}
                        <button className='btn_info' onClick={()=>setShow(!show)}>i</button>
                    </div>
                    {/* якщо значення show true то показую блок */}
                    { show ? <div className='wrapp_contact_deep_info'>
                                <p>{state.anonim.phone}</p>
                    </div> : null}
                    <hr noshade="true" className='hr_block'/>
                </div>
                
            }
        }
    }
    return (
        <div>
            {createAnonim()}
        </div>
    );
};

export default Anonim;