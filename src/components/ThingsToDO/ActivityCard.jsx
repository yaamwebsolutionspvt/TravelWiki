import React from "react";

const ActivityCard = ({
  id,
  title,
  description,
  image,
  highlights = [],
  info = [],
  imageOnRight = true, // Default to true (current behavior)
}) => {
  return (
    <section id={id} className="mb-16">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="grid md:grid-cols-2">
          
          {/* TEXT COLUMN - Position depends on imageOnRight prop */}
          <div className={`p-8 flex flex-col justify-center ${imageOnRight ? 'order-1' : 'order-2'}`}>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{title}</h2>

            <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>

            <div className="grid sm:grid-cols-2 gap-8">
              {/* Highlights */}
              {highlights.length > 0 && (
                <div>
                  <h4 className="text-xl font-semibold text-emerald-800 mb-3">
                    Experience Highlights
                  </h4>
                  <ul className="text-gray-700 space-y-2">
                    {highlights.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Practical Info */}
              {info.length > 0 && (
                <div>
                  <h4 className="text-xl font-semibold text-emerald-800 mb-3">
                    Practical Information
                  </h4>
                  <ul className="text-gray-700 space-y-2">
                    {info.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* IMAGE COLUMN - Position depends on imageOnRight prop */}
          <div className={`flex items-center justify-center bg-gray-50 p-8 ${imageOnRight ? 'order-2' : 'order-1'}`}>
            <div className="rounded-2xl overflow-hidden shadow-xl transform transition-transform duration-300 hover:scale-105">
              <img
                src={image}
                alt={title}
                loading="lazy"
                className="w-120 h-90 object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivityCard;
