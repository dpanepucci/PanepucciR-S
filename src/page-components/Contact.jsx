import '../styles/PagesStyle.css';
import { useState } from 'react';

// Form handling
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    //  email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    let formIsValid = true;
    let newErrors = { name: '', email: '', message: '' };

    try {
      const response = await fetch('https://formspree.io/f/mwpbbndg',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
            body: JSON.stringify({formData})
          })
          

    // Validate each field
    if (!formData.name) {
      newErrors.name = 'Name is required';
      formIsValid = false;
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
      formIsValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      formIsValid = false;
    }

    if (!formData.message) {
      newErrors.message = 'Message is required';
      formIsValid = false;
    }

    setErrors(newErrors);

    if (formIsValid) {
      // Handle successful form submission
      console.log('Form submitted:', formData);
      setFormData({ name: '', email: '', message: '' }); // Clear the form
      window.alert('Request has successfully been submitted!');
    }
  } catch (error) {
    console.error('Error Submitting Request', error)
  }
  };

  return (
    <div>
      <p className="main-para">
        Submit a ticket. Or call for immediate help
      </p>
      <form id="form" onSubmit={handleSubmit}>
        <input
          type="input"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        

        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        

        <input
          className="message"
          type="input"
          placeholder="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <p className="error">{errors.message}</p>}
        {errors.email && <p className="error">{errors.email}</p>}
        {errors.name && <p className="error">{errors.name}</p>}
        
        <button id="submit" type="submit">Submit</button>
      </form>

      <a
  href="tel:+17403914137"
  style={{
    display: 'inline-block',
    background: '#007bff',
    color: 'white',
    fontWeight: 'bold',
    textDecoration: 'none',
    padding: '10px 24px',
    borderRadius: '6px',
    border: 'none',
    textAlign: 'center',
    cursor: 'pointer',
    marginTop: '32px'
  }}
>
  Call Now
</a>
    </div>
  );
}
