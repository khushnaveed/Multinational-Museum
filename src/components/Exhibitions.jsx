import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FaCreditCard, FaPaypal } from "react-icons/fa";




const exhibitions = [
  {
    country: "Afghanistan",
    description: "Discover the rich history and art of Afghanistan.",
    image: [
      "https://npr.brightspotcdn.com/dims4/default/954ee5d/2147483647/strip/true/crop/3000x3000+0+0/resize/880x880!/quality/90/?url=https%3A%2F%2Fmedia.npr.org%2Fassets%2Fimg%2F2022%2F08%2F31%2Fartifact_grid_custom-bc1342fd9df4c76e67f71127c8ba5aac960a8f49.jpg",
      "https://pbs.twimg.com/media/EadrDH8WoAAI2l-.jpg",
      "https://smarthistory.org/wp-content/uploads/2023/10/standing_buddha_bamiyan.png",
      "https://i.pinimg.com/736x/32/be/7c/32be7cd01dbe88b435cb817aefa9a613.jpg",
    ],

    exhibitions: [
      "Afghan Tribal Jewelry Showcase",
      "Miniature Paintings from the Timurid Era",
      "Bamiyan Buddhas: A Lost Heritage",
      "Afghan Textiles: Patterns of Culture and Tradition",
    ],
  },
  {
    country: "Pakistan",
    description: "Explore the vibrant traditions of Pakistan.",
    image: [
      "https://pbs.twimg.com/media/FEDL1afWUAI1jNc.jpg",
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
      "https://www.christies.com/-/jssmedia/Images/features/articles/2024/04/1-5/Silk-Carpets-from-the-George-Farrow-Collection/hero-George-Farrow-carpet-collection.jpg?hash=",
      "https://farsicalligraphy.com/wp-content/uploads/2016/11/Rumi_when_lovers.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/5/5a/Faravahar_Atashkadeh_Yazd.jpg",
      "https://i.pinimg.com/736x/0d/43/e8/0d43e8298bd51fc99cd53254b31becca.jpg",
    ],

    exhibitions: [
      "The Art of Persian Rugs: Stories Woven in Silk",
      "Persian Poetry and Calligraphy",
      "Zoroastrian Heritage and Symbols",
      "The Evolution of Persian Ceramics: From Earth to Artistry",
    ],
  },
  {
    country: "USA",
    description: "Experience the innovation and diversity of the USA.",
    image: [
      "https://cdn.sanity.io/images/cxgd3urn/production/87ca5271214d2a048d7aea307d3f6982495bd2fe-2485x1420.jpg?rect=1,0,2484,1420&w=1200&h=686&fit=crop&auto=format",
      "https://hocokatati.org/wp-content/uploads/2021/08/20210430_Spring-Native-Artist-Pop-Up-Shop_SM-002.jpg",
      "https://press.moma.org/wp-content/uploads/2021/10/Mike-Kelleys-Deodorized-Central-Mass-with-Satellites--2000x1333.jpg",
      "https://media.licdn.com/dms/image/v2/D4D12AQE057WgB37qhg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1677244412460?e=2147483647&v=beta&t=eVmOjyA_df3ohsMploG_uzAJropZ3yocVewL98JexuA",
    ],
    exhibitions: [
      "Hollywood and the Evolution of Cinema",
      "Native American Art and Crafts",
      "MoMA: A Journey Through Modern Art and Innovation",
      "American Innovation: Design and Technology",
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
      "Ancient Ethiopian Manuscripts and Scripts",
      "The Rock-Hewn Churches of Lalibela",
      "The Origins of Coffee: A Cultural History",
      "Traditional Ethiopian Ceremonial Artifacts",
    ],
  },
];




const Exhibitions = ({ exhibits }) => {
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
  font-size: 3rem;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 700;
  color: white;
  text-shadow: 
    2px 2px 5px rgba(255, 255, 255, 0.8),
    -2px -2px 5px rgba(255, 255, 255, 0.8);
  animation: glow 3s ease-in-out infinite alternate;
}

/* Center the gallery container */
.gallery {
  display: flex;
  justify-content: center;  /* Centers horizontally */
  align-items: center;      /* Centers vertically */
  margin-bottom: 2rem;
  position: relative;
  width: 100%;
  height: 70vh;
  max-width: 800px;
  margin-left:140px;
}

/* Center the card within the gallery */
.card {
  position: absolute;
  width: 80%;
  height: 100%;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  transition: transform 0.3s ease, opacity 0.3s ease;
  opacity: 0.3;
  transform: scale(0.9);
  transition: all 0.3s ease;
}

/* When a card is active (visible) */
.card.active {
  opacity: 1;
  transform: scale(1);
}

/* Ensure the image fills the card */
.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease;
  border-radius: 12px;
}

/* Style for content inside cards */
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

/* Navigation buttons (previous and next) */
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
    margin-right:150px;

}

.prev-btn {
  left: 0;
}

.next-btn {
  right: 0;
}

/* Style for the back button */
.back-btn {
  background-color: #fff;
  color: #121212;
  padding: 0.8rem 1.6rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  text-transform: uppercase;
  width: 120px;
  margin: 1rem auto;
  transition: background-color 0.3s ease, transform 0.3s ease, color 0.3s ease;
}

.back-btn:hover {
  background-color: gray;
  color: #fff;
  transform: scale(1.05);
}

  
            /* Media Query for Mobile Screens */
       @media (max-width: 640px) {
  .gallery {
    height: 60vh; /* Adjust the height on mobile screens */
  }

  .card {
    width: 70%; /* Full width for smaller screens */
    height: 70%; /* Adjust height for mobile */
      margin-left: 10px; /* Adds 20px of space to the left side of the element, outside its border */
      margin-right:25px;
  }

  .card img {
    width: 100%; /* Ensure image takes full width */
    height: 100%; /* Adjust image height automatically */
  }

  .card-content {
    font-size: 0.9rem; /* Adjust font size for mobile */
    padding: 0.6rem; /* Adjust padding for mobile */
  }

  .nav-btn {
    font-size: 1.5rem; /* Smaller font size for mobile */
    padding: 0.8rem; /* Adjust padding for mobile */
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    margin-left:20px;
  }

 
  /* Adjust back button */
  .back-btn {
    font-size: 0.9rem;
    padding: 0.6rem 1.2rem; /* Reduce padding */
  }
  h1{
              font-size: 2rem;
  }
}
          </style>
        </head>
        <body>
          <h1>${exhibit.country} Exhibitions</h1>
          <div class="gallery">
            ${exhibit.image
              .map(
                (img, index) => `
                  <div class="card ${index === 0 ? "active" : ""}" id="card-${index}">
                    <img src="${img}" alt="${exhibit.country} - Image ${index + 1}" />
                    <div class="card-content">
                      <h3><a href="http://localhost:5173/artwork" style="color: white; text-decoration: none;" class="hover:text-gray-300">${exhibit.exhibitions[index]}</a></h3>
                      <p><a href="http://localhost:5173/artwork" style="color: white; text-decoration: none;" class="hover:text-gray-300">${exhibit.description}</a></p>
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
              cards[currentIndex].classList.remove('active');
              currentIndex = (currentIndex + direction + cards.length) % cards.length;
              cards[currentIndex].classList.add('active');
              updateCardOpacity(currentIndex);
            }
  
            function updateCardOpacity(activeIndex) {
              cards.forEach((card, index) => {
                if (index === activeIndex) {
                  card.style.opacity = '1';
                  card.style.transform = 'scale(1)';
                  card.style.left = '0';
                } else if (index === (activeIndex - 1 + cards.length) % cards.length) {
                  card.style.opacity = '0.1';
                  card.style.transform = 'scale(0.9)';
                  card.style.left = '-85%';
                } else if (index === (activeIndex + 1) % cards.length) {
                  card.style.opacity = '0.1';
                  card.style.transform = 'scale(0.9)';
                  card.style.left = '85%';
                } else {
                  card.style.opacity = '0.1';
                  card.style.transform = 'scale(0.8)';
                  card.style.left = '100%';
                }
              });
            }
            updateCardOpacity(currentIndex);
          </script>
        </body>
        </html>
      `);
    }
  };
  


  return (
    <div className="min-h-screen relative text-gray-200">
      {/* Video Background */}
  
      {/* Whole Page Background Animation */}
      <div className="gradient-animation min-h-screen">
        {/* Hero Section */}
     <section className="text-gray-200 py-4 sm:py-6 md:py-14 bg-opacity-60 ">
          <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-2xl  sm:text-sm  md:text-4xl font-bold text-center mb-12 text-gray-200 flex items-center justify-center">
  Exhibitions
</h1>

          </div>
        </section>
  
        {/* Overlapping Exhibitions Section */}
        <section
          className="relative py-0 px-8 "
          style={{
            backgroundImage: 'url("")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: "0",
          }}
        >
          <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-10 ">
            {exhibitions.map((exhibit, index) => (
              <div
                key={index}
                className={`relative group w-[250px] h-[350px] sm:w-[50%] sm:h-[50px]  md:w-[300px] md:h-[450px] lg:w-[400px] lg:h-[600px] bg-gray-200 rounded-[10px] transform transition duration-500 sm:hover:scale-110
                  sm:hover:rotate-12 sm:hover:translate-y-[-10px] hover:z-10 shadow-[rgba(255,255,255,0.5)_0px_0px_15px_0px,_rgba(255,255,255,0.3)_4px_4px_20px_0px,_rgba(0,0,0,0.5)_8px_8px_30px_0px,_rgba(0,0,0,0.3)_12px_12px_40px_0px]
                  mb-6 sm:mb-0 sm:p-0`}
                style={{
                  marginTop: window.innerWidth <= 640 ? "0px" : `${index !== 0 ? index * -70 : 0}px`, // Prevent overlap on mobile
                  zIndex: window.innerWidth <= 640 ? "1" : `${100 - index}`, // Set zIndex to 1 for mobile to remove layering
                }}
                onClick={() => openPopupWindow(exhibit)}
              >
                <img
                  src={exhibit.image[0]}
                  alt={exhibit.country}
                  className="w-full h-full rounded object-cover group-hover:opacity-80"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition duration-300 flex items-end">
                  <div className="p-4 w-full text-gray-200">
                    <h2 className="text-3xl font-bold">{exhibit.country}</h2>
                    <p className="mt-2">{exhibit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
  

  
};

export default Exhibitions;
