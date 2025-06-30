import React from 'react'
import Form from './form'

const GetinTouch = () => {
    return (
        <div className='px-8 py-8 md:py-16 md:px-16'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                <div className='flex flex-col'>
                    <p className='font-bold text-2xl text-center'>Invest in Your Well-Being</p>
                    <p className='font-md text-lg text-center'>Your mental health is a priority — not a luxury. Transparent and flexible pricing to support your healing journey.</p>
                    <p className='mt-8 text-center md:text-left'><b>Ready to begin your journey?</b><br />
                        Once you reach out, we’ll schedule a complimentary 15-minute consultation to talk about your needs, answer any questions, and help you feel confident about the next step. There’s no commitment — just a safe, open space to explore whether this support feels right for you. Your path to healing can begin with a simple message. </p>
                    <div className="text-[#1E2938] mt-8 text-center md:text-left">
                        <p className="font-bold mb-1">Session Fees:</p>
                        <ul className="list-disc list-inside space-y-1">
                            <li>$200 / individual session</li>
                            <li>$240 / couples session</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <Form />
                </div>
            </div>
        </div>
    )
}

export default GetinTouch
