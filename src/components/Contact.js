import React, { useState } from 'react';
import "../styles/Contact.css"

const Contract = (state) => {
    const[show,setShow]= useState(false);
    
    function handleSearchChange () {
        for(let value of Object.values(state.contacts)){
            for(let valueCheck of Object.values(state.checkedPerson)){
                if (value.toLowerCase().includes(state.search.toLowerCase().trim()) && valueCheck === state.contacts.gender) {
                    return <div>
                        <div className='wrapper_contact_info'>
                            <p className='contact_info'>{state.contacts.firstName} {state.contacts.lastName}</p>
                            <button className='btn_info' onClick={()=>setShow(!show)}>i</button>
                        </div>
                        { show ? <div className='wrapp_contact_deep_info'>
                                    <p>{state.contacts.phone}</p>
                                    <p>{state.contacts.gender === "male" ? " стать: чоловіча" : state.contacts.gender !== undefined ? 'стать: жіноча' : null}</p>
                        </div> : null}
                        <hr noshade className='hr_block'/>
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