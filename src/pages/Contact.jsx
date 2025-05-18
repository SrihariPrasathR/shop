
import React, { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
      {submitted ? (
        <p className="text-green-700 text-center">Thank you for your message, {form.name}!</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />
          <textarea
            name="message"
            placeholder="Your message"
            value={form.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full border rounded px-3 py-2"
          />
          <button
            type="submit"
            className="bg-green-600 text-white py-2 rounded w-full hover:bg-green-700 transition"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}

export default Contact;
