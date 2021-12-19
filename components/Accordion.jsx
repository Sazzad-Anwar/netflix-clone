import { useState } from "react";

const Accordion = ({ faq }) => {
    const [show, setShow] = useState(false);
    return (
        <article key={faq.id} className='w-auto lg:w-[51rem] text-left mx-auto mb-2'>
            <h2 onClick={() => setShow(!show)} className='text-[1.125rem] cursor-pointer flex justify-between items-center py-2 lg:py-5 bg-[#303030] text-left lg:text-[1.625rem] text-white font-medium px-5 lg:px-10 lg:leading-8'>
                <span>{faq.title}</span>
                {!show ? <i className="bi bi-plus-lg text-2xl lg:text-4xl font-light"></i> : <i className="bi bi-x-lg text-2xl lg:text-4xl font-light"></i>}

            </h2>
            <p className={` ${show ? 'h-auto opacity-100 bg-[#303030] text-left text-[1.125rem] lg:text-[1.525rem] transition duration-300 ease-in-out text-white font-medium px-10 py-5 mt-px' : 'h-0 opacity-0 px-0 py-0'}`}>
                {faq.description}
            </p>
        </article >
    )
}

export default Accordion
