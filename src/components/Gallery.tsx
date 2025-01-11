import React from 'react';

const images = [
  'https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1531747056595-07f6cbbe10ad?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1562572159-4efc207f5aff?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1566753323558-f4e0952af115?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1571513800374-df1bbe650e56?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?auto=format&fit=crop&w=800&q=80',
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Miss Global Event ${index + 1}`}
              className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            />
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Meet Our Queen: Patience Bumbom</h2>
          <img
            src="https://images.unsplash.com/photo-1623091411395-09e79fdbfcf3?auto=format&fit=crop&w=800&q=80"
            alt="Patience Bumbom"
            className="w-full h-96 object-cover rounded-lg shadow-lg mb-8"
          />
          <div className="prose lg:prose-xl">
            <p className="mb-4">
              We are thrilled to announce that Patience Bumbom has been appointed as the queen to represent Miss Bloom Global 2024. 
              This talented and beautiful individual embodies the values of our organization, and we are confident that she will make 
              a lasting impact as our ambassador.
            </p>
            <h3 className="font-bold mt-6">About Patience Bumbom</h3>
            <p>
              Patience Bumbom is a 23-year-old Ghanaian lady studying at the University of Media Arts and Communication - Institute 
              of Journalism. Singing and acting are her hobbies. With her captivating smile, charming personality, and passion for 
              helping girls' education, Patience is the perfect representative for Miss Bloom Global.
            </p>
            <blockquote className="italic border-l-4 border-purple-500 pl-4 my-6">
              "I am honored and humbled to be appointed as the queen of Miss Bloom Global 2024. I promise to dedicate myself to 
              promoting the values of our organization and making a positive impact on the lives of others. Thank you for this 
              incredible opportunity!"
              <footer className="text-right">- Patience Bumbom</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}