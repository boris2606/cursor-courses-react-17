import React, { useState } from 'react';
import '../styles/Contracts.css'
import Anonim from './Anonim';
import Contact from './Contact';

const Contracts = () => {
    const contacts = [{
        firstName: "Барней",
        lastName: "Стинсовський",
        phone: "+380956319521",
        gender: "male"
        }, {
        firstName: "Робін",
        lastName: "Щербатська",
        phone: "+380931460123",
        gender: "female"
        }, {
        firstName: "Анонімний",
        lastName: "Анонімус",
        phone: "+380666666666",
        }, {
        firstName: "Лілія",
        lastName: "Олдровна",
        phone: "+380504691254",
        gender: "female"
        }, {
        firstName: "Маршен",
        lastName: "Еріксонян",
        phone: "+380739432123",
        gender: "male"
        }, {
        firstName: "Теодор",
        lastName: "Мотсбес",
        phone: "+380956319521",
        gender: "male"
    }];

    const [inputValue,setInput] = useState(''), // Слідкування за станом інпута
          [checkedMale,setCheckedMale] = useState(true), // Слідкування за станом чекбоксу чоловіків
          [checkedFemale,setCheckedFemale] = useState(true), // Слідкування за станом чекбоксу жінок
          [checkedAnon,setCheckedAnon] = useState(true) // Слідкування за станом чекбоксу аноніма (му*ак ще той)

    let [anonim] = contacts.filter(person => person.gender === undefined ), // Отримання аноніма з масиву та приведення до обєкту
        notAnonimContacts = contacts.filter(person => person.gender !== undefined ), // Отримання не анонімних з масиву та приведення до обєкту
        checkedPersonMale, // Змінні для призначення інформації з чекбоксу
        checkedPersonFemale, // Змінні для призначення інформації з чекбоксу
        checkedPersonAnon // Змінні для призначення інформації з чекбоксу

    // Призначення інформації 
    if (checkedMale) {
        checkedPersonMale = 'male'
    } 
    if (checkedFemale) {
        checkedPersonFemale = 'female'
    }
    if (checkedAnon) {
        checkedPersonAnon = 'finded'
    }

    return (
        // Основний блок отримання інформації
        <div className='phone_border'>
            <p className='tit_text'>Контакти</p>
            {/* Інпут пошуку та призначення поточного стану */}
            <input 
                className='search_input'
                value={inputValue}
                onChange = {contact => setInput(contact.target.value)}
                placeholder='Пошук'/>
            {/* Чекбокси та зміна статусу при обиранні */}
            <div className='wrapperLabels'>
                <label>
                    <input
                        className='check_input'
                        type="checkbox"
                        checked={checkedMale}
                        onChange={() => setCheckedMale(!checkedMale)}/>
                    Ч
                </label>
                <label>
                    <input
                        className='check_input'
                        type="checkbox"
                        checked={checkedFemale}
                        onChange={() => setCheckedFemale(!checkedFemale)}/>
                    Ж
                </label>
                <label>
                    <input
                        className='check_input'
                        type="checkbox"
                        checked={checkedAnon}
                        onChange={() => setCheckedAnon(!checkedAnon)}/>
                        не вказаний
                </label>
            </div>
            {/* Формування блоку виводу інформації по контактам */}
            <div className='wrapper_content'>
                {/* Перебір всіх контактів та передача до компоненту Contact props-ів */}
                {notAnonimContacts.map( (contact,index) => {
                    return <Contact contacts = {contact} key = {index} search = {inputValue} checkedPerson = {{checkedPersonMale,checkedPersonFemale,checkedPersonAnon}}/>
                })}
                {/* Отримання аноніма та передача компоненту Anonim props-ів  */}
                <Anonim anonim={anonim} search = {inputValue} checkedPerson = {{checkedPersonMale,checkedPersonFemale,checkedPersonAnon}}/>
            </div>
        </div>
    );
};

export default Contracts;