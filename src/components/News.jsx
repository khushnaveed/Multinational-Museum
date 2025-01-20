/* eslint-disable no-unused-vars */
import React from "react";
import NewsBackground from "../assets/NewsImage/NewsBackground.mp4"

export default function News() {
  const newsArticles = [
    {
      title: "Arts of Iran",
      description:
        "The modern-day country of Iran, known in ancient times as Persia, has a history of civilization dating back approximately ten thousand years..",
      image: "src/assets/NewsImage/IranNews.jpg",
      link: "https://www.sdmart.org/exhibition/arts-of-iran/ ",
    },
    {
      title: "Solomon R. Guggenheim Museum NewYork",
      description:
        "Frank Lloyd Wright's landmark nautilus-like building is renowned as much for its famous architecture as for its superlative collection of modern and contemporary art and well-curated shows, some of which utilize the entire museum.",
      image: "src/assets/NewsImage/UsaNews.jpg",
      link: "https://www.guggenheim.org/",
    },
    {
      title: "Pakistan Monument Museum",
      description:
        "The Pakistan Monument is a national monument in Islamabad that is shaped like a petal. It is situated in the western Shakarparian Hills and the best place to visit in Islamabad. The magnificent Monument was erected to reflect Pakistanis’ unity and patriotism. It also honors the martyrs who laid down their lives for the sake of our country and its people.",
      image: "src/assets/NewsImage/PakistanNews.jpg",
      link: "https://www.tripadvisor.com/Attraction_Review-g293960-d2164348-Reviews-Pakistan_Monument_Museum-Islamabad_Islamabad_Capital_Territory.html#/media/2164348/?albumid=-160&type=ALL_INCLUDING_RESTRICTED&category=-160",
    },
    {
      title: "The Obelisk of Axum: the stages of return, Ethiopia",
      description:
        "By a ceremony to whom Ethiopian Authorities have ascribed an admirable simbolical and political value, on the 4 September 2008 the obelisk of Axum was brought back  to the site where it was found in 1935 by an italian archaeological expedition. The discovery also concerned other similar examples, which are nowadays located on the area of the Axumita Reign’s ancient capital.",
      image: "src/assets/NewsImage/EthiopiaNews.jpg",
      link: "https://www.lattanzisrl.it/en/the-obelisk-of-axum-the-stages-of-return/",
    },
    {
      title: "Linden Museum Stuttgart – Afghanistan",
      description:
        "It was developed by the Linden-Museum together with the Entangled: Stuttgart – Afghanistan working group. Since 2019, people from the Stuttgart region have been taking part, many of them with an international, Afghanistan-related history, as well as partners from academia and the arts. They have contributed to the exhibition in terms of concept, content and, in some cases, very personal memories and thoughts. Throughout the exhibition there are always references to the present – even with historical themes. This also happens through personal and critical comments or artistic positions.",
      image: "src/assets/NewsImage/AfganistanNews.jpg",
      link: "https://lindenmuseum.de/?lang=en",
    },
  ];

  return (
    <div className="bg-gray-900 min-h-screen py-12 text-gray-200 relative">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover opacity-60">
          <source src={NewsBackground} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-8">
        <h1 className="text-4xl font-bold text-center mb-12">News</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article, index) => (
            <div
              key={index}
              className="bg-gray-800 shadow-md rounded-lg overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                <p className="text-gray-400 mb-4">{article.description}</p>
                <a
                  href={article.link}
                  className="text-blue-400 hover:text-blue-300 hover:underline font-medium"
                  target="_blank"
                  rel="noopener noreferrer">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
