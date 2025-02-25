



import React from 'react'
import BaseLayout from '../layouts/base.layout'

function ContactPage() {
  return (
    <BaseLayout>
        <h2> this is my contact page haha </h2>
        <form >
          <div>
            <label htmlFor=""> User-Name : </label>
            <input type="text" name="" id="userName" />
          </div>
        </form>

    </BaseLayout>
  )
}

export default ContactPage