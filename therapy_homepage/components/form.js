"use client";
import React, { useState } from 'react';

const Form = () => {
    const [form, setForm] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
        preferredTime: '',
        agree: false,
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
    };

    const validate = () => {
        const newErrors = {};

        // Name
        if (!form.name.trim()) newErrors.name = 'Name is required.';

        // Phone 
        const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/;
        if (!form.phone.trim()) {
            newErrors.phone = 'Phone number is required.';
        } else if (!phoneRegex.test(form.phone)) {
            newErrors.phone = 'Please enter a valid phone number.';
        }

        // Email
        if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) {
            newErrors.email = 'A valid email is required.';
        }

        // Message
        if (!form.message.trim()) {
            newErrors.message = 'Please tell us what brings you here.';
        }

        // Preferred Time
        const timeRegex = /^(0?[1-9]|1[0-2])(:[0-5][0-9])?\s?(AM|PM)?$|^([01]?[0-9]|2[0-3]):[0-5][0-9]$/i;

        if (!form.preferredTime.trim()) {
            newErrors.preferredTime = 'Preferred contact time is required.';
        } else if (!timeRegex.test(form.preferredTime.trim())) {
            newErrors.preferredTime = 'Please enter a valid time (e.g., 3 PM or 14:00).';
        }


        // Agreement
        if (!form.agree) {
            newErrors.agree = 'You must agree to be contacted.';
        }

        return newErrors;
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            console.log('Form submitted:', form);
            alert('Thank you! We’ll be in touch soon.');
            setForm({ name: '', phone: '', email: '', message: '', preferredTime: '', agree: false });
        }
    };

    return (
        <div className="max-w-full mx-auto p-6 bg-white rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-[#1E2938] mb-6 text-center">
                Get in Touch
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                    <label className="block text-sm font-medium">Name *</label>
                    <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2 mt-1"
                        type="text"
                    />
                    {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                </div>

                {/* Phone */}
                <div>
                    <label className="block text-sm font-medium">Phone *</label>
                    <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2 mt-1"
                        type="tel"
                    />
                    {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
                </div>

                {/* Email */}
                <div>
                    <label className="block text-sm font-medium">Email *</label>
                    <input
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2 mt-1"
                        type="email"
                    />
                    {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                </div>

                {/* What brings you here */}
                <div>
                    <label className="block text-sm font-medium">What brings you here? *</label>
                    <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2 mt-1"
                        rows={4}
                    />
                    {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
                </div>

                {/* Preferred Time */}
                <div>
                    <label className="block text-sm font-medium">Preferred time to reach you *</label>
                    <input
                        name="preferredTime"
                        value={form.preferredTime}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2 mt-1"
                        type="text"
                    />
                    {errors.preferredTime && (
                        <p className="text-sm text-red-500">{errors.preferredTime}</p>
                    )}
                </div>

                {/* Agreement */}
                <div className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        name="agree"
                        checked={form.agree}
                        onChange={handleChange}
                        className="mt-1"
                    />
                    <label className="text-sm">I agree to be contacted *</label>
                </div>
                {errors.agree && <p className="text-sm text-red-500">{errors.agree}</p>}

                {/* Submit */}
                <button
                    type="submit"
                    className="w-full bg-[#1E2938] hover:bg-[#334155] text-white py-2 rounded-md font-semibold transition"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Form;
