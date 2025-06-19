
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { indie_flower } from '@/app/fonts/fonts';

const EmailModal = ({ contactMe, handleCloseEmailModal }) => {
    const form = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendEmail = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const result = await emailjs.sendForm(
                'service_2zwbc7b',
                'template_yh9r14i',
                form.current,
                'TRW6b4IexpjJSyK4A'
            );
            console.log(result.text);
            alert('Email Sent!');
            handleCloseEmail(false);
        } catch (error) {
            console.error('Email sending error:', error.text);
            setError('Failed to send email. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        contactMe && (
            <div className={`${indie_flower.className} fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50`}>
                <div className="relative w-full max-w-md p-8 bg-pink-600 rounded-md shadow-lg">
                    <button
                        className="absolute top-2 right-2 p-2 text-gray-600 hover:text-gray-800 transition-colors"
                        onClick={() => handleCloseEmailModal(false)}
                        aria-label="Close Modal"
                    >
                        <svg
                            className="h-8 w-8"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                    <h1 className="text-3xl font-bold mb-4 text-center">Contact Me</h1>
                    <p className="mb-6 text-center">Fill out the form below to shoot me a message!</p>
                    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
                        <label htmlFor="name" className="text-xl border-b-2 border-blue-500 max-w-fit">
                            Name:
                        </label>
                        <input
                            type="text"
                            name="to_name"
                            id="name"
                            className="border-2 border-blue-500 rounded p-2 text-slate-900"
                            required
                        />
                        <label htmlFor="email" className="text-xl border-b-2 border-blue-500 max-w-fit">
                            Email:
                        </label>
                        <input
                            type="email"
                            name="reply_to"
                            id="email"
                            className="border-2 border-blue-500 rounded p-2 text-slate-900"
                            required
                        />
                        <label htmlFor="message" className="text-xl border-b-2 border-blue-500 max-w-fit">
                            Message:
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            defaultValue="Hey James"
                            rows={5}
                            className="border-2 border-blue-500 rounded p-2 text-slate-900"
                            required
                        />
                        <button
                            type="submit"
                            className={`self-center text-2xl uppercase font-bold mt-4 p-2 rounded bg-blue-500 text-white ${
                                isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600 transition-colors'
                            }`}
                            disabled={isLoading}
                        >
                            {isLoading ? 'Sending...' : 'Send'}
                        </button>
                        {error && <p className="text-red-600 mt-2">{error}</p>}
                    </form>
                </div>
            </div>
        )
    );
};

export default EmailModal;



