import React from 'react';

const InterestsSection = () => {
  const interests = {
    playing: ['Elden Ring', 'Animal Crossing (late to the party)'],
    listening: ['Fred Again', 'Mac Miller', 'Lofi beats', 'Khruangbin', 'The Daily'],
    reading: ['Do comic books count?']
  };

  return (
    <section className="py-20 px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#e8e8e8]">Playing:</h3>
            <ul className="space-y-2 text-[#999]">
              {interests.playing.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#e8e8e8]">Listening to:</h3>
            <ul className="space-y-2 text-[#999]">
              {interests.listening.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#e8e8e8]">Reading:</h3>
            <ul className="space-y-2 text-[#999]">
              {interests.reading.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-20 text-center">
          <h2 
            className="text-4xl md:text-5xl font-light leading-tight mb-8"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Always down to collaborate when I have the time. Reach out for case studies.
          </h2>
          <p 
            className="text-3xl font-light text-[#999]"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            All the best,<br />Daniel
          </p>
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;