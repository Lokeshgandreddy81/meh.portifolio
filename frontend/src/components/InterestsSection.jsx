import React from 'react';

const InterestsSection = () => {
  const interests = {
    playing: ['Elden Ring', 'Animal Crossing (late to the party)'],
    listening: ['Fred Again', 'Mac Miller', 'Lofi beats', 'Khruangbin', 'The Daily'],
    reading: ['Do comic books count?']
  };

  return (
    <section className="py-32 px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-3 gap-16 mb-32">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-[#e8e8e8]">Playing:</h3>
            <ul className="space-y-3 text-[#999] text-lg">
              {interests.playing.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6 text-[#e8e8e8]">Listening to:</h3>
            <ul className="space-y-3 text-[#999] text-lg">
              {interests.listening.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6 text-[#e8e8e8]">Reading:</h3>
            <ul className="space-y-3 text-[#999] text-lg">
              {interests.reading.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-32 text-center space-y-12">
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Always down to collaborate when I have the time. Reach out for case studies.
          </h2>
          <p 
            className="text-4xl md:text-5xl font-light text-[#999]"
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