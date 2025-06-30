import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const Faq = () => {
  return (
    <div>
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1E2938]">
        FAQs
      </h2>
      <p className="text-center text-[#475569] mt-2 text-base md:text-lg max-w-xl mx-auto">
        Have questions? Here are some answers to help you feel confident and informed as you begin your healing journey.
      </p>

      {/* Accordion */}
      <Accordion
        type="single"
        collapsible
        className="w-full max-w-2xl mx-auto mt-10"
        defaultValue="item-1"
      >
        {/* FAQ 1 */}
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg font-semibold">
            Do you accept insurance?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-base font-normal text-[#334155] text-balance">
            <p>
              No we do not accept insurance. However, we can provide you with a superbill that you can submit to your insurance company for potential reimbursement. This allows you to take advantage of your out-of-network benefits.
            </p>
          </AccordionContent>
        </AccordionItem>

        {/* FAQ 2 */}
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-lg font-semibold">
            Are online sessions available?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-base font-normal text-[#334155] text-balance">
            <p>
              Yes, all virtual therapy sessions are conducted via Zoom. This
              allows you to connect from the comfort of your home while receiving
              the same high-quality care as in person.
            </p>
          </AccordionContent>
        </AccordionItem>

        {/* FAQ 3 */}
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-lg font-semibold">
            What is your cancellation policy?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-base font-normal text-[#334155] text-balance">
            <p>
              A 24-hour notice is required to cancel or reschedule an appointment
              without incurring a cancellation fee. This helps ensure fair
              scheduling for all clients.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default Faq
