import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Send, Loader } from 'lucide-react';
import ScrollReveal from '../shared/ScrollReveal';

// --- STEP 1: Import the EmailJS library ---
import emailjs from '@emailjs/browser';

function ContactSection() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = (data) => {
    setIsSubmitting(true);

    // --- STEP 2: Access your credentials from the .env file ---
    // These variables are now securely loaded from your .env file.
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    // The `data` object from react-hook-form maps directly to your template variables
    const templateParams = {
      name: data.name,
      email: data.email,
      message: data.message,
    };

    // --- STEP 3: Send the email using EmailJS ---
    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        toast.success("Message sent! I'll get back to you soon.");
        reset(); // Clear the form
      })
      .catch((err) => {
        console.error('FAILED...', err);
        toast.error('Failed to send message. Please try again.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section className="w-full py-20 px-4 md:px-8 bg-[#1a1a1a]">
      <div className="container mx-auto max-w-2xl">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Let's build something together.</h2>
          <p className="mt-4 text-white/80">
            Have a project in mind? Send me a message below or email me directly at{' '}
            <a href="mailto:kamleshkhatod42@gmail.com" className="text-[#A367B1] hover:underline">
              kamleshkhatod30@gmail.com
            </a>
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-4">
            <div>
              <input
                {...register('name', { required: 'Name is required' })}
                placeholder="Name"
                className="w-full p-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A367B1] transition-all"
              />
              {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <input
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Please enter a valid email'
                  }
                })}
                placeholder="Email"
                type="email"
                className="w-full p-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A367B1] transition-all"
              />
              {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <textarea
                {...register('message', { required: 'Message is required' })}
                placeholder="Message"
                rows="4"
                className="w-full p-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A367B1] transition-all"
              />
              {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center p-3 bg-[#A367B1] text-white font-bold rounded-lg hover:bg-[#b175bf] disabled:bg-[#a367b1]/50 transition-colors"
            >
              {isSubmitting ? (
                <>
                  <Loader className="animate-spin mr-2" size={20} />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2" size={20} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default ContactSection;
