import React from 'react';

const About = () => {
    return (
        <div>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-7 mx-20 mt-10'>
                <div style={{ width: '80%', marginLeft: '40px', justifyContent: 'center', alignItems: 'center' }}>
                    <img src="images\dslr.jpg" alt="" />
                </div>
                <div>
                    <h1 className='text-xl font-bold text-slate-600'>Mohu's DSLR Gallery Is One Of The Largest E-Commerce Sites In Bangladesh. Techland  BD Sells Almost All  IT Products In Bangladesh.TechLand BD Selles Different Types Of  DSLR Brands Like Canon, Nikon, Sony.

                        Do Good Research And Make Informed Decisions. Buying A New DSLR Is Definitely A Huge Investment. And You Will Definitely Want To Choose A Camera That Will Serve Your Particular Purpose And Buy It At A Price That Is Most Affordable For Your Budget. By Comparing The Sensor Size Of Each Camera, The Calculation Of Megapixels And The Various Specifications Of Different Cameras Including The Image Quality, You Can Know Exactly How You Are Getting The Performance With Your Hard-Earned Money.</h1>

                </div>
            </div>
        </div>
    );
};

export default About;