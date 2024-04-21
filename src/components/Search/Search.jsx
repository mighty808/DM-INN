import React from 'react'
import './Search.css'

function Search() {
  return (

      <div className='search-area'>
        <form>
        <div>
            <label>Destination</label> <br />
            <input type='text' placeholder='Ghana, Kwahu'></input>
        </div>

        <div>
            <h4>Check In</h4>
            <input type='text' placeholder='09/04/2024'></input>
        </div>

        <div>
            <h4>Check Out</h4>
            <input type='text' placeholder='15/04/2024'></input>
        </div>

        <div>
            <h4>Rooms for</h4>
            <input type='text' placeholder='1 room, 2 guests'></input>
        </div>

        <div>
            <h4>Promo Code</h4>
            <input type='text' placeholder=''></input>
        </div>

        <div>
            <button>Search</button>
        </div>
        </form>
        </div>
        
  )
}

export default Search
