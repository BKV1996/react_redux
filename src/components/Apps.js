import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../redux/slice/todoSlice'
import React from 'react'

const Apps = () => {
    const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log('state', state);
  if (state.todoSlice.isLoading) {
    return <h1>Loading ... </h1>
  }
  return (
    <div>
      <button onClick={(e) => dispatch(fetchTodos())}>Fetch API</button>
      {
        state.todoSlice.data && state.todoSlice.data.map(e =>
          <div>
            <div>{e.bookName}</div>
            <div>{e.authorName}</div>
            <div>{e.bookPrice}</div>
            <div>{e.date}</div>
            <div>{e.isbnCode}</div>
            <div>{e.availblity}</div>
            <div>{e.locAvailblity}</div>
            <div>{e.subjectCode}</div>
            <div>{e.publisher}</div>
            <div>{e.edition}</div>
          </div>
        )
      }
    </div>
  )
}

export default Apps
