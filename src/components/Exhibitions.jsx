import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

const exhibitions = [
  {
    country: "Afghanistan",
    description: "Discover the rich history and art of Afghanistan.",
    image:[
         
      
      "https://npr.brightspotcdn.com/dims4/default/954ee5d/2147483647/strip/true/crop/3000x3000+0+0/resize/880x880!/quality/90/?url=https%3A%2F%2Fmedia.npr.org%2Fassets%2Fimg%2F2022%2F08%2F31%2Fartifact_grid_custom-bc1342fd9df4c76e67f71127c8ba5aac960a8f49.jpg",
      "https://sahandcarpet.com/wp-content/uploads/2024/09/%D8%B4%DA%A9%D9%88%D9%81%D8%A7%DB%8C%DB%8C-%D9%87%D9%86%D8%B1-%D9%81%D8%B1%D8%B4_%D8%A8%D8%A7%D9%81%DB%8C-%D8%AF%D8%B1-%D8%AF%D9%88%D8%B1%DB%80-%D8%B5%D9%81%D9%88%DB%8C%D9%87-1.webp",
      "https://i.pinimg.com/474x/d8/7d/b3/d87db3c32e9dceaa0ac870d0998a9a34.jpg",
      "https://i.etsystatic.com/19229681/r/il/4bb146/2301287411/il_570xN.2301287411_7ce6.jpg",
    ],
    
    
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
    image: [
      "https://i.dawn.com/primary/2019/03/5c9688da4ae9c.jpg",
      "https://i.pinimg.com/736x/4d/ce/0f/4dce0f04fe438238824591ce4f57a108.jpg",
      "https://thumbs.dreamstime.com/b/mughal-architecture-indo-islamic-architectural-style-developed-india-under-patronage-empire-33543864.jpg",
      "https://civilisable.com/wp-content/uploads/2024/02/Pakistani-fashion-Salwar-Kameez-26.2.2024.jpg",
    ],
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
    image: [    
      "https://iranontour.com/wp-content/uploads/2020/10/persian-carpet-museum.jpg",

      "https://farsicalligraphy.com/wp-content/uploads/2016/11/Rumi_when_lovers.jpg",
      "https://www.carpetu2.co.uk/images/nmd16020-812_details.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/5/5a/Faravahar_Atashkadeh_Yazd.jpg",
    ],
    
    exhibitions: [
     "The Art of Persian Rugs: Stories Woven in Silk", 
     "Persian Poetry and Calligraphy",
      
      
      "",
      "Zoroastrian Heritage and Symbols",
    ],
  },
  {
    country: "USA",
    description: "Experience the innovation and diversity of the USA.",
    image:  [
       "https://www.museum.de/public/uploads/museum/573/m/Vorschaubild_Museumde.jpg",
      "https://cdn.sanity.io/images/cxgd3urn/production/87ca5271214d2a048d7aea307d3f6982495bd2fe-2485x1420.jpg?rect=1,0,2484,1420&w=1200&h=686&fit=crop&auto=format",
      "https://i.pinimg.com/236x/65/7f/a7/657fa7574d1060a64607575009b58b3e.jpg",
      "https://media.timeout.com/images/105949695/750/562/image.jpg",
    ],
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
    image: [
      "https://toledomuseum.org/img/http/aHR0cHM6Ly9kOG9nYmdraTU5bmg5LmNsb3VkZnJvbnQubmV0L2ltYWdlcy9ldGhpb3BpYS1wc2FsdGVyLmpwZw==?w=700&q=80+fit%3D&s=b018ada7998e642d61e4d42f6739f82b",
      "https://i0.wp.com/ethioamericantours.com/wp-content/uploads/2021/09/Lalibe-la.jpg?resize=640%2C541",
      "https://www.connollycove.com/wp-content/uploads/2024/04/image-427.jpeg",
      "https://media.rnztools.nz/rnz/image/upload/s--97WaG3QG--/c_scale,f_auto,q_auto,w_1050/v1643868100/4M0R893_image_crop_134216?_a=BACCd2AD",
    ],
    exhibitions: [
      "The Rock-Hewn Churches of Lalibela",
      "Ancient Ethiopian Manuscripts and Scripts",
      "The Origins of Coffee: A Cultural History",
      "Traditional Ethiopian Ceremonial Artifacts",
    ],
  },
];
const Exhibitions = ({ exhibit }) => {
  const openPopupWindow = (exhibit) => {
    const popup = window.open("", "width=800,height=600");
    if (popup) {
      popup.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${exhibit.country} Exhibitions</title>
          <style>
            body {
              font-family: 'Roboto', sans-serif;
              margin: 0;
              padding: 0;
              background-color: #121212;
              color: #fff;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              min-height: 100vh;
              overflow: hidden;
            }
            h1 {
              font-size: 2.5rem;
              margin-bottom: 2rem;
              text-align: center;
              font-weight: 700;
              color: #e63946;
              text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);
            }
            .gallery {
              display: flex;
              justify-content: center;
              align-items: center;
              margin-bottom: 2rem;
              position: relative;
              width: 100%;
              height: 70vh;
              max-width: 800px;
            }
            .card {
              position: absolute;
              width: 80%; /* Adjust width to leave space for adjacent cards */
              height: 100%;
              background-color: #fff;
              border-radius: 16px;
              box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
              overflow: hidden;
              transition: transform 0.3s ease, opacity 0.3s ease;
              opacity: 0.3; /* Low opacity for non-active cards */
              transform: scale(0.9); /* Slightly reduced size for non-active cards */
              transition: all 0.3s ease; /* Smooth transition for opacity and transform */
            }
            .card.active {
              opacity: 1;
              transform: scale(1);
              transition: all 0.3s ease;
            }
            .card img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              transition: opacity 0.3s ease;
              border-radius: 12px;
            }
            .card-content {
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              padding: 1rem;
              background-color: rgba(0, 0, 0, 0.5);
              border-top-left-radius: 12px;
              border-top-right-radius: 12px;
              color: #fff;
              font-size: 1.2rem;
            }
            .nav-btn {
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              background-color: rgba(0, 0, 0, 0.5);
              color: #fff;
              font-size: 2rem;
              border: none;
              padding: 1rem;
              cursor: pointer;
            }
            .prev-btn {
              left: 0;
            }
            .next-btn {
              right: 0;
            }
            .back-btn {
              background-color: #e63946;
              color: #fff;
              padding: 0.8rem 1.6rem;
              border: none;
              border-radius: 4px;
              cursor: pointer;
              font-weight: 600;
              text-transform: uppercase;
              width: 120px;
              margin: 1rem auto;
              transition: background-color 0.3s ease, transform 0.3s ease;
            }
            .back-btn:hover {
              background-color: #d62828;
              transform: scale(1.05);
            }
          </style>
        </head>
        <body>
          <h1>${exhibit.country} Exhibitions</h1>
          <div class="gallery">
            ${exhibit.image
              .map(
                (img, index) => `
                  <div class="card ${index === 0 ? 'active' : ''}" id="card-${index}">
                    <img src="${img}" alt="${exhibit.country} - Image ${index + 1}" />
                    <div class="card-content">
                      <h3>${exhibit.exhibitions[index]}</h3>
                      <p>${exhibit.description}</p>
                    </div>
                  </div>
                `
              )
              .join("")}
            <button class="nav-btn prev-btn" onclick="navigateGallery(-1)">&#10094;</button>
            <button class="nav-btn next-btn" onclick="navigateGallery(1)">&#10095;</button>
          </div>
          <button class="back-btn" onclick="window.close()">Back</button>
          <script>
            let currentIndex = 0;
            const cards = document.querySelectorAll('.card');

            function navigateGallery(direction) {
              // Remove active class from the current card
              cards[currentIndex].classList.remove('active');
              
              // Update the current index
              currentIndex = (currentIndex + direction + cards.length) % cards.length;
              
              // Add active class to the new card
              cards[currentIndex].classList.add('active');

              // Update opacity and positioning for the new card
              updateCardOpacity(currentIndex);
            }

            function updateCardOpacity(activeIndex) {
              cards.forEach((card, index) => {
                // Set opacity and scaling for the active card
                if (index === activeIndex) {
                  card.style.opacity = '1';
                  card.style.transform = 'scale(1)';
                  card.style.left = '0'; // Active card is centered
                } else if (index === (activeIndex - 1 + cards.length) % cards.length) {
                  // Set previous card's opacity and position
                  card.style.opacity = '0.1';
                  card.style.transform = 'scale(0.9)';
                  card.style.left = '-85%'; // Previous card on the left
                } else if (index === (activeIndex + 1) % cards.length) {
                  // Set next card's opacity and position
                  card.style.opacity = '0.1';
                  card.style.transform = 'scale(0.9)';
                  card.style.left = '85%'; // Next card on the right
                } else {
                  // Set opacity for other non-adjacent cards
                  card.style.opacity = '0.1';
                  card.style.transform = 'scale(0.8)';
                  card.style.left = '100%'; // Cards far away are hidden
                }
              });
            }

            // Initialize opacity settings for the first card
            updateCardOpacity(currentIndex);
          </script>
        </body>
        </html>
      `);
    }
  };




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
          backgroundImage: 'url("")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-10">
          {exhibitions.map((exhibit, index) => (
            <div
              key={index}
              className="relative group w-[400px] h-[600px] bg-white rounded-lg shadow-lg transform transition duration-500 hover:scale-110 hover:z-10"
              style={{
                marginTop: `${index * -70}px`,
                zIndex: `${100 - index}`,
              }}
              onClick={() => openPopupWindow(exhibit)}
            >
              <img
                src={exhibit.image[0]}
                alt={exhibit.country}
                className="w-full h-full object-cover group-hover:opacity-80"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition duration-300"></div>
              <div className="absolute bottom-0 p-6 text-white z-10">
                <h2 className="text-3xl font-bold">{exhibit.country}</h2>
                <p className="mt-2 text-white">{exhibit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Exhibitions;
