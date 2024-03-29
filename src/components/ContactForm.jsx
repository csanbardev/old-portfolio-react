import { useForm } from "../hooks/useForm";
import '../css/components/contact.css'

const initialForm = {
  name: "",
  email: "",
  message: ""
}

const validationsForm = (form) => {
  let errors = {}

  if (!form.name.trim()) {
    errors.name = "'Name' is required"
  }

  return errors
}

export function ContactForm() {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit
  } = useForm(initialForm, validationsForm)

  return (
    <>
      <form id="contact-form" onSubmit={handleSubmit}>
        <h3>Want a talk?</h3>
        <input className="contact-input" placeholder='NAME' type='text' name="name" onChange={handleChange} value={form.name} onBlur={handleBlur} required />
        <input className="contact-input" placeholder='EMAIL' type='email' name="email" onChange={handleChange} value={form.email} onBlur={handleBlur} required />
        <textarea className="contact-input" placeholder='WRITE YOUR MESSAGE' name="message" onChange={handleChange} value={form.message} onBlur={handleBlur} required />
        <section className="contact-area--buttons">
          <input className="btn primary-button" type="submit" value="Send" />
          <input className="btn primary-button" type="reset" value="Cancel" />
        </section>
      </form>
    </>
  )
}