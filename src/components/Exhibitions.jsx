import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';


const exhibitions = [
  {
    country: "Afghanistan",
    description: "Discover the rich history and art of Afghanistan.",
    image: "https://npr.brightspotcdn.com/dims4/default/954ee5d/2147483647/strip/true/crop/3000x3000+0+0/resize/880x880!/quality/90/?url=https%3A%2F%2Fmedia.npr.org%2Fassets%2Fimg%2F2022%2F08%2F31%2Fartifact_grid_custom-bc1342fd9df4c76e67f71127c8ba5aac960a8f49.jpg",
    exhibitions: [
      "Miniature Paintings from the Timurid Era",
      "Bamiyan Buddhas: A Lost Heritage",
      "Afghan Tribal Jewelry Showcase",
      "Traditional Afghan Carpets and Weaving Techniques",
    ],
  },
  {
    country: "Pakistan",
    description: "Explore the vibrant traditions of Pakistan.",
    image: "https://i.dawn.com/primary/2019/03/5c9688da4ae9c.jpg",
    exhibitions: [
      "Indus Valley Civilization Artifacts",
      "Truck Art: A Journey of Colors",
      "Mughal Architecture and Calligraphy",
      "Traditional Pakistani Textiles and Embroidery",
    ],
  },
  {
    country: "Iran",
    description: "Immerse yourself in the Persian heritage of Iran.",
    image: "https://iranontour.com/wp-content/uploads/2020/10/persian-carpet-museum.jpg",
    exhibitions: [
      "Persian Poetry and Calligraphy",
      "The Art of Persian Rugs: Stories Woven in Silk",
      "Zoroastrian Heritage and Symbols",
      "Achaemenid Empire: Persepolis Reimagined",
    ],
  },
  {
    country: "USA",
    description: "Experience the innovation and diversity of the USA.",
    image: "https://www.museum.de/public/uploads/museum/573/m/Vorschaubild_Museumde.jpg",
    exhibitions: [
      "Hollywood and the Evolution of Cinema",
      "Native American Art and Crafts",
      "The Jazz Age: Music and Culture of the 1920s",
      "Modern Art Movements in the United States",
    ],
  },
  {
    country: "Ethiopia",
    description: "Celebrate the ancient culture and artistry of Ethiopia.",
    image: "https://toledomuseum.org/img/http/aHR0cHM6Ly9kOG9nYmdraTU5bmg5LmNsb3VkZnJvbnQubmV0L2ltYWdlcy9ldGhpb3BpYS1wc2FsdGVyLmpwZw==?w=700&q=80+fit%3D&s=b018ada7998e642d61e4d42f6739f82b",
    exhibitions: [
      "The Rock-Hewn Churches of Lalibela",
      "Ancient Ethiopian Manuscripts and Scripts",
      "The Origins of Coffee: A Cultural History",
      "Traditional Ethiopian Ceremonial Artifacts",
    ],
  },
];

const Exhibitions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b text-white bg-black">
      {/* Hero Section */}
      <section className="bg-black text-white py-8 bg-opacity-60">
  <div className="max-w-7xl mx-auto text-center ">
    <h1 className="text-5xl font-extrabold mb-4 flex items-center justify-center">
      <i className="fas fa-globe mr-3"></i>Exhibitions
    </h1>
  </div>
</section>


      {/* Overlapping Exhibitions Section */}
      <section
        className="relative py-16 px-8"
        style={{
          backgroundImage:
            'url("")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-10">
          {exhibitions.map((exhibit, index) => (
            <div
              key={index}
              className="relative group w-[400px] h-[600px] bg-white rounded-lg shadow-lg  transform transition duration-500 hover:scale-110 hover:z-10"
              style={{
                marginTop: `${index * -70}px`,
                zIndex: `${100 - index}`,
              }}
              onClick={() => window.location.href = `/exhibitions/${exhibit.country.toLowerCase()}`}
            >
              <img
                src={exhibit.image}
                alt={exhibit.country}
                className="w-full h-full object-cover group-hover:opacity-80"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition duration-300"></div>
              <div className="absolute bottom-0 p-6 text-white z-10">
                <h2 className="text-3xl font-bold">{exhibit.country}</h2>
                <p className="mt-2 text-white">{exhibit.description}</p>
                <ul className="mt-4 text-sm text-white">
                  {exhibit.exhibitions.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                {/* Arrow Icon */}
                <div className="absolute bottom-1 right-4 text-4xl text-white opacity-80 group-hover:opacity-100 cursor-pointer sm:mr-8 md:mr-8">
    <span>&rarr;</span>
  </div>


              </div>
            </div>
          ))}
        </div>
      </section>

     
    </div>
  );
};

export default Exhibitions;
