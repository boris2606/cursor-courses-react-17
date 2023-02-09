import React,{useState}from 'react';

const Anonim = (state) => {
    console.log(state);
    const[show,setShow]= useState(false);
    function createAnonim (){
        for(let value of Object.values(state.anonim)){
            if (value.toLowerCase().includes(state.search.toLowerCase().trim()) && state.checkedPerson.checkedPersonAnon === 'finded'){
                return <div>
                    <div className='wrapper_contact_info'>
                        <p className='contact_info'>{state.anonim.firstName} {state.anonim.lastName}</p>
                        <button className='btn_info' onClick={()=>setShow(!show)}>i</button>
                    </div>
                    { show ? <div className='wrapp_contact_deep_info'>
                                <p>{state.anonim.phone}</p>
                    </div> : null}
                    <hr noshade className='hr_block'/>
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