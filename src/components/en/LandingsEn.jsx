import React from 'react'

const Landings = () => {
    const NAV_HEIGHT = 110;
    const values = [
        {
            title: "Visibility and Reach",
            text: "A website allows your business to be visible anywhere, 24 hours a day. This expands your market and helps you reach more potential customers.",
        },
        {
            title: "Credibility and Trust",
            text: "Having a professional website generates trust with your customers. Most consumers expect a legitimate business to have an online presence.",
        },
        {
            title: "Effective Marketing and Promotion",
            text: "You can promote your products or services in a more cost-effective and efficient way through digital marketing strategies like SEO, social media advertising, or content marketing.",
        },
        {
            title: "Availability and Customer Support",
            text: "A website allows your customers to get information about your products or services at any time. Additionally, you can offer support through live chat, contact forms, or FAQ sections.",
        }
    ];
    
    return (
        <>
    <div className="relative flex flex-col mb-12 md:mb-100 md:flex-row px-2 sm:px-4 lg:px-8">
      <div className="scroll-cards">
        {values.map((value, index) => (
            
          <div
            key={index}
            style={{
                zIndex: `calc(5 * ${index + 1})`
            }}
            className=
            {`scroll-cards__item bg-[#171717]`}
         
          >
            <h2 className="text-base uppercase md:text-xl lg:text-2xl pb-4 font-bold leading-none text-slate-50">
              <span className="block py-2">{value.title}</span>
            </h2>
            <p className='text-left text-xl md:text-2xl'>{value.text}</p>
          </div>
        ))}
      </div>
    </div>

        </>
    )
}

export default Landings