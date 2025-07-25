import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Send, Loader } from 'lucide-react';
import ScrollReveal from '../shared/ScrollReveal';

// NOTE: This form requires a backend endpoint to send emails.
// The `onSubmit` function currently simulates an API call.
// You would replace this with a fetch call to your serverless function or API.
// Example services: EmailJS, Resend, SendGrid.

function ContactSection() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    // --- Replace with your actual API endpoint ---
    console.log("Form data:", data);
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API delay
    // const response = await fetch('/api/send-email', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data),
    // });
    // --- ------------------------------------ ---
    
    // Assuming the API call is successful
    toast.success("Message sent! I'll get back to you soon.");
    reset();
    setIsSubmitting(false);
  };

  return (
    <section className="w-full py-20 px-4 md:px-8 bg-[#1a1a1a]">
      <div className="container mx-auto max-w-2xl">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Let's build something together.</h2>
          <p className="mt-4 text-white/80">
            Have a project in mind? Send me a message below or email me directly at{' '}
            <a href="mailto:lraihan@hackermail.com" className="text-[#A367B1] hover:underline">
              lraihan@hackermail.com
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