import React from 'react'

export default () => (
  <form>
    <div className='field'>
      <label className='label'>Name</label>
      <div className='control'>
        <input className='input' type='text' placeholder='Text input' />
      </div>
    </div>
    <div className='field'>
      <label className='label'>Email</label>
      <div className='control'>
        <input className='input' type='text' placeholder='Text input' />
      </div>
    </div>
    <div className='field'>
      <label className='label'>Subject</label>
      <div className='control'>
        <input className='input' type='text' placeholder='Text input' />
      </div>
    </div>
    <div className='field'>
      <label className='label'>Message</label>
      <div className='control'>
        <textarea className='textarea' placeholder='Textarea' />
      </div>
    </div>
    <div className='field'>
      <div className='control'>
        <input type='submite' className='button is-link' value='Submit' />
      </div>
    </div>
  </form>
)
