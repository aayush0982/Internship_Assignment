import React from 'react'
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const Services = () => {
    return (
        <div className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
            {/* heading and sub-heading */}
            <div className="max-w-7xl mx-auto">
                <h2 className='font-bold text-2xl sm:text-3xl lg:text-4xl text-[#1E2938] text-center leading-tight'>
                    Supporting Your Journey to Wellness
                </h2>
                <p className='font-medium text-base sm:text-lg lg:text-xl text-[#404041d8] text-center mt-3 sm:mt-4 mx-auto max-w-4xl leading-relaxed px-2'>
                    A gentle space where healing begins. Explore our personalized therapeutic services designed to nurture your mind, restore balance, and help you move forward with clarity and confidence.
                </p>

                {/* services grid */}
                
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-10 lg:mt-12'>
                    <Card className="border-2 border-gray-400 hover:shadow-lg transition-shadow duration-300 h-full">
                        <CardHeader>
                            <div className="aspect-square w-full mb-4 overflow-hidden rounded-lg bg-gray-100">
                                <img 
                                    src="/assets/ser1.png" 
                                    alt="Individual Therapy" 
                                    className='w-full h-full object-cover rounded-lg' 
                                />
                            </div>
                            <CardTitle className="text-center text-lg sm:text-xl font-semibold text-[#1E2938] mb-3">
                                Individual Therapy
                            </CardTitle>
                            <CardDescription className="text-center text-sm sm:text-base text-[#404041d8] leading-relaxed">
                                A safe, one-on-one space to explore your thoughts, emotions, and life challenges. Whether you're navigating anxiety, grief, or personal growth, we're here to guide you with compassion and clarity.
                            </CardDescription>
                        </CardHeader>
                    </Card>
                    
                    <Card className="border-2 border-gray-400 hover:shadow-lg transition-shadow duration-300 h-full">
                        <CardHeader >
                            <div className="aspect-square w-full mb-4 overflow-hidden rounded-lg bg-gray-100">
                                <img 
                                    src="/assets/ser2.png" 
                                    alt="Relationship Counseling" 
                                    className='w-full h-full object-cover rounded-lg' 
                                />
                            </div>
                            <CardTitle className="text-center text-lg sm:text-xl font-semibold text-[#1E2938] mb-3">
                                Relationship Counseling
                            </CardTitle>
                            <CardDescription className="text-center text-sm sm:text-base text-[#404041d8] leading-relaxed">
                                Strengthen communication, rebuild trust, and foster deeper connection. This service supports couples and families in creating healthier, more harmonious relationships.
                            </CardDescription>
                        </CardHeader>
                    </Card>
                    
                    <Card className="border-2 border-gray-400 hover:shadow-lg transition-shadow duration-300 h-full">
                        <CardHeader>
                            <div className="aspect-square w-full mb-4 overflow-hidden rounded-lg bg-gray-100">
                                <img 
                                    src="/assets/ser3.png" 
                                    alt="Mindfulness & Stress Management" 
                                    className='w-full h-full object-cover rounded-lg' 
                                />
                            </div>
                            <CardTitle className="text-center text-lg sm:text-xl font-semibold text-[#1E2938] mb-3">
                                Mindfulness & Stress Management
                            </CardTitle>
                            <CardDescription className="text-center text-sm sm:text-base text-[#404041d8] leading-relaxed">
                                Learn practical tools to calm your mind, regulate emotions, and stay grounded. Ideal for anyone seeking inner peace in the midst of life's demands.
                            </CardDescription>
                        </CardHeader>
                    </Card>
                    
                    <Card className="border-2 border-gray-400 hover:shadow-lg transition-shadow duration-300 h-full">
                        <CardHeader>
                            <div className="aspect-square w-full mb-4 overflow-hidden rounded-lg bg-gray-100">
                                <img 
                                    src="/assets/ser4.png" 
                                    alt="Trauma Recovery Support" 
                                    className='w-full h-full object-cover rounded-lg' 
                                />
                            </div>
                            <CardTitle className="text-center text-lg sm:text-xl font-semibold text-[#1E2938] mb-3">
                                Trauma Recovery Support
                            </CardTitle>
                            <CardDescription className="text-center text-sm sm:text-base text-[#404041d8] leading-relaxed">
                                Heal at your own pace in a nurturing environment. We use trauma-informed approaches to help you process past experiences and reclaim a sense of safety and strength.
                            </CardDescription>
                        </CardHeader>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Services