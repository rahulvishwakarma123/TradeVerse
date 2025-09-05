import React from 'react'

const Hero = () => {
    return (
        <div>
            <h1 className='text-3xl font-semibold text-center py-20 border-b-1 border-b-gray-300'>We are pioneered the dicound broking model in India. <br /> Now we are breaking ground with our technology.</h1>
            <div className="flex my-20">
                <div className="basis-1/2 px-20">
                    <p className='text-gray-700 mb-6 text-lg/relaxed '>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.</p>
                    <p className='text-gray-700 mb-6 text-lg/relaxed '>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>
                    <p className='text-gray-700 mb-6 text-lg/relaxed '>Over 1+ Crore clients place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
                </div>

                <div className="basis-1/2 px-20">
                <p className='text-gray-700 mb-6 text-lg/relaxed '>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>
                <p className='text-gray-700 mb-6 text-lg/relaxed '><span className='text-blue-600 font-semibold'>Rainmatter</span>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>
                <p className='text-gray-700 mb-6 text-lg/relaxed '>And yet, we are always up to something new every ~ Catch up on the latest updates on our blog or ~ the media is saying about us.</p>
                </div>
            </div>
        </div>
    )
}

export default Hero