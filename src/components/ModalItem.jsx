import React from 'react'

export const ModalItem = ({item, checkedItem, setCheckedItem}) => {
  return (
    <div className="modal__content-list__item">
        <input type="radio" id={`contactChoice${item.index}`} className="modal__content-list__item-input" name='contact' value={item.name} checked={checkedItem === item.index ? true : false} onChange={() => setCheckedItem(item.index)}/>
        <label htmlFor={`contactChoice${item.index}`} className="modal__content-list__item-label">{item.name}</label>
    </div>
)
}
