import React, { useState } from "react";

const DocumentaryData = [
  {
    id: 1,
    title: "Inside the New United States Army Museum",
    description: `We are excited that you’re here and planning a visit to this beautiful, state-of-the-art national museum. Here, we proudly tell the comprehensive story of America’s oldest military service, the United States Army.`,
    video: "https://www.youtube.com/embed/A0eLYMJGomo", // Proper embed link
    link: "https://www.youtube.com/watch?v=A0eLYMJGomo",
    updated: "Last updated 3 mins ago",
  },
  {
    id: 2,
    title: "IRAN - Golestan Palace - A UNESCO World Heritage Site",
    description:
      "Golestan Palace in Tehran used to be the royal residence of the Qajar Kings during their reign of 131 years.  During this period the palace was practically rebuilt.  The complex, as it stands today, was last renovated in 1865.  It consists of a group of buildings and halls, each with their own unique character and purpose.",
    video: "https://www.youtube.com/embed/4qe4to3RW-g", // Proper embed link
    link: "https://www.youtube.com/watch?v=4qe4to3RW-g",
    updated: "Last updated 3 mins ago",
  },
  {
    id: 3,
    title: "Los Angeles Skyscrapers",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
    video: "https://www.youtube.com/embed/Zi_XLOBDo_Y", // Proper embed link
    link: "https://www.youtube.com/watch?v=Zi_XLOBDo_Y",
    updated: "Last updated 3 mins ago",
  },
  {
    id: 4,
    title: "Exclusive Documentary of The Lahore Museum | Discover Pakistan",
    description:
      "لاہور کا تاریخی میوزیم، جہاں پورے خطے  کے ثقافتی اور تاریخی ادوار مجود ہیں۔اس عجائب گھر کو برطانوی دور میں 1864 میں قائم کیا گیا، یہ عجائب گھرمیں صدیوں پر محیط تاریخی نمونوں کا ذخیرہ ہے، جو جنوبی ایشیا کی فن اور آثار قدیمہ کی سیر کرواتا ہے۔ مغل اور برطانوی طرز کے امتزاج کے ساتھ اس کے فن تعمیر کی عظمت میوزیم کی تاریخی اہمیت کو ظاہر کرتی ہے جس میں قدیم مخطوطات، شاندار مغل پینٹنگز، گندھارا تہذیب  کے مجسمے، اور جنوبی ایشیا کی تاریخ کے مختلف ادوار کی نمائندگی کرنے والے نوادرات شامل ہیں۔ لاہور میوزیم ماضی کے لیے ایک کھڑکی کا کام کرتا ہے  ",
    video: "https://www.youtube.com/embed/1yvmp1-rFJE", // Proper embed link
    link: "https://www.youtube.com/watch?v=1yvmp1-rFJE",
    updated: "Last updated 5 mins ago",
  },
  {
    id: 5,
    title: "New York City Skyline",
    description:
      "A breathtaking view of the New York City skyline with its towering skyscrapers and bustling atmosphere.",
    video: "https://www.youtube.com/embed/LXb3EKWsInQ", // Proper embed link
    link: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
    updated: "Last updated 8 mins ago",
  },
  // Add other documentaries here...
];

function Documentaries() {
  const [expandedDescription, setExpandedDescription] = useState(null);
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleDescription = (id) => {
    if (expandedDescription === id) {
      setExpandedDescription(null);
      setExpandedCard(null); // Reset card size/position
    } else {
      setExpandedDescription(id);
      setExpandedCard(id); // Expand the card
    }
  };

  return (
    <div className="flex flex-col space-y-6 sm:space-y-0 sm:flex-row sm:flex-wrap sm:justify-center sm:space-x-6">
      {DocumentaryData.map((doc) => (
        <a
          key={doc.id}
          href={doc.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex flex-col rounded-lg bg-black text-white shadow-lg hover:shadow-xl transition-all duration-300 sm:w-full md:w-[40%] lg:w-[30%] xl:w-[25%] p-6 ${
            expandedCard === doc.id ? "transform scale-110 z-50" : "z-10"
          }`}
        >
          <div className="rounded-t-lg h-72 w-full overflow-hidden">
            <iframe
              className="w-full h-full"
              src={doc.video}
              title={doc.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-6">
            <h5 className="mb-4 text-2xl font-semibold">{doc.title}</h5>
            <p className="mb-6 text-lg">
              {expandedDescription === doc.id
                ? doc.description
                : doc.description.substring(0, 150) + "..."}
              <span
                onClick={(e) => {
                  e.preventDefault(); // Prevent navigation when clicking "Read More"
                  toggleDescription(doc.id);
                }}
                className="text-blue-500 cursor-pointer ml-2"
              >
                {expandedDescription === doc.id ? "Read Less" : "Read More"}
              </span>
            </p>
            <p className="text-sm text-gray-400">
              <small>{doc.updated}</small>
            </p>
          </div>
        </a>
      ))}
    </div>
  );
}

export default Documentaries;
