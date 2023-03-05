import React from 'react'
import { useState } from 'react'

export const ModalItem = ({item, checkedList, setCheckedList, index}) => {

  const toggleCheckBox = (list, id) => {
    return list.map((item, index) => index === id ? !item : item);
  }

  return (
    <div className="modal__content-list__item">
        <input type="checkbox" id={`contactChoice${item.index}`} className="modal__content-list__item-input" 
          name='contact'
          value={item.name || ' '}
          checked={checkedList[index] || false} // Если не успеют прогрузиться стейты - будет false
          onChange={() => setCheckedList(toggleCheckBox(checkedList, index))}
        />
        <label htmlFor={`contactChoice${item.index}`} className="modal__content-list__item-label">{item.name}</label>
    </div>
)
}
