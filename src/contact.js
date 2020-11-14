import Validator from 'fastest-validator'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const v = new Validator({
  messages: {
    email: 'Invalid {field}',
    stringEmpty: 'Missing {field}',
    emailEmpty: 'Missing {field}',
    string: 'Missing {field}'
  }
})
const check = v.compile({
  email: {
    type: 'email',
    empty: false
  },
  name: { type: 'string', empty: false },
  message: { type: 'string', empty: false }
})

export default () => {
  const [{ errors, disabled, form }, setState] = useState({
    errors: {},
    disabled: true,
    loading: false,
    form: {}
  })

  const validate = (value, key = null) => {
    if (key !== null) form[key] = value
    const newErrors = {}
    const validation = check(form)
    if (validation !== true) validation.forEach(({ message, field }) => { newErrors[field] = message })
    setState({
      errors: newErrors,
      disabled: Object.keys(newErrors).length > 0,
      loading: false,
      form
    })
    return validation === true
  }

  const history = useHistory()

  const submit = async () => {
    setState({
      disabled: true,
      loading: true
    })
    try {
      const res = await fetch('https://formspree.io/f/xknpjdwz', {
        method: 'POST',
        mode: 'cors',
        headers: {
          accept: 'application/json'
        },
        body: JSON.stringify(form)
      })
      if (res.ok) history.push(`/thanks?name=${form.name}`)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <form
      className='contact is-lato'
      onSubmit={(evt) => {
        evt.preventDefault()
        const valid = validate()
        if (valid) submit()
      }}
    >
      <h1 className='title'>Contact Momentum Images</h1>
      <div className='field'>
        <label className='label' htmlFor='name'>Name</label>
        <div className='control'>
          <input
            name='name'
            id='name'
            className='input'
            type='text'
            placeholder='Name'
            onChange={(evt) => { validate(evt.target.value, 'name') }}
          />
          {'name' in (form || {}) && 'name' in errors && <p className='contact-message has-text-danger'>{errors.name}</p>}
        </div>
      </div>
      <div className='field'>
        <label className='label' htmlFor='email'>Email</label>
        <div className='control'>
          <input
            className='input'
            type='text'
            placeholder='Email'
            name='email'
            id='email'
            onChange={(evt) => { validate(evt.target.value, 'email') }}
          />
          {'email' in (form || {}) && 'email' in errors && <p className='contact-message has-text-danger'>{errors.email}</p>}
        </div>
      </div>
      <div className='field'>
        <label className='label' htmlFor='message'>Message</label>
        <div className='control'>
          <textarea
            name='message'
            id='message'
            className='textarea'
            placeholder='Textarea'
            onChange={(evt) => { validate(evt.target.value, 'message') }}
          />
          {'message' in (form || {}) && 'message' in errors && <p className='contact-message has-text-danger'>{errors.message}</p>}
        </div>
      </div>
      <input type='hidden' name='_subject' value='Contact Form Submission' />
      <div className='field'>
        <div className='control'>
          <input
            disabled={disabled}
            type='submit'
            className='button is-dark is-large'
            value='Submit'
          />
          {Object.keys((form || {})).length === 0 && <p className='contact-message has-text-primary'>All fields are required</p>}
        </div>
      </div>
    </form>
  )
}
