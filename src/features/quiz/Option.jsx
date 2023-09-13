import React from 'react'
import { useDispatch } from 'react-redux';
import { selectOption } from './questionsSlice';

function Option({option,id,selectedOption}) {
    const dispatch = useDispatch();
  return (
    <div className="options">
    <p>
      <label>
        <input
          type="radio"
          value={option}
          name={id}
          checked={option === selectedOption}
          onChange={() => {
            dispatch(selectOption({ id: id, option }));
          }}
        />
        &nbsp;
        {option}
      </label>
    </p>
  </div>
  )
}

export default Option