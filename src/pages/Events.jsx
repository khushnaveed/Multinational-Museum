import React, { useState } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  ArrowRight,
  Calendar as CalendarIcon,
} from "lucide-react";

// Sample events data
const events = [
  {
    id: 1,
    title: "Lahore Literary Festival 2023",
    date: "2023-02-12T10:00:00",
    location: "Lahore, Pakistan",
    description:
      "A cultural and literary festival featuring writers, poets, and artists from across Pakistan.",
    image:
      "https://cdn.pixabay.com/photo/2021/09/13/18/18/books-6622139_640.jpg",
    page: "https://lahorelitfest.com/llf-2023/,",
  },
  {
    id: 2,
    title: "Kabul Music Festival 2019",
    date: "2019-12-10T09:00:00",
    location: "Kabul, Afghanistan",
    description:
      "Celebrating Afghanistan's rich music and cultural traditions through performances and exhibitions.",
    image:
      "https://cdn.pixabay.com/photo/2016/09/08/21/09/piano-1655558_640.jpg",
    page: "https://afghanistan.tmembassy.gov.tm/en/news/42130",
  },
  {
    id: 3,
    title: "American Folk Festival 2021",
    date: "2021-08-27T12:00:00",
    location: "Bangor, Maine, USA",
    description:
      "A celebration of American folk music, arts, and crafts, bringing together musicians from around the country.",
    image:
      "https://cdn.pixabay.com/photo/2016/11/29/06/17/audience-1867754_640.jpg",
    page: "https://www.nationalfolkfestival.com/",
  },
  {
    id: 4,
    title: "Timkat Festival 2020",
    date: "2020-01-19T08:00:00",
    location: "Addis Ababa, Ethiopia",
    description:
      "A traditional Ethiopian Orthodox Christian celebration of the Epiphany, featuring a colorful procession and rituals.",
    image:
      "https://cdn.pixabay.com/photo/2015/03/25/13/30/timkat-fixed-688994_640.jpg",
    page: "https://www.cpafrica.org.uk/african-culture/timkat-timket-ethiopia-christian-festival/",
  },
  {
    id: 5,
    title: "Tehran International Theater Festival 2022",
    date: "2022-12-04T10:00:00",
    location: "Tehran, Iran",
    description:
      "An annual event showcasing theatrical performances from around the world, focusing on Iranian culture and international exchanges.",
    image:
      "https://cdn.pixabay.com/photo/2013/11/15/13/57/wells-theatre-210914_1280.jpg",
    page: "https://fitf.theater.ir/en/page/1898",
  },
  {
    id: 6,
    title: "Lahore International Film Festival 2025",
    date: "2025-03-10T10:00:00",
    location: "Lahore, Pakistan",
    description:
      "An exciting international film festival showcasing cinema from around the world.",
    image: "https://cdn.pixabay.com/photo/2018/10/17/03/21/tv-3753021_640.jpg",
    page: "https://www.facebook.com/filums/",
  },
  {
    id: 7,
    title: "Kabul International Film Festival 2025",
    date: "2025-05-20T09:00:00",
    location: "Kabul, Afghanistan",
    description:
      "An annual event celebrating Afghan and international films with a focus on storytelling.",
    image:
      "https://cdn.pixabay.com/photo/2017/02/23/21/35/cinema-2093264_1280.jpg",
    page: "https://www.mediamatic.net/en/page/306794/kabul-film-festival",
  },
  {
    id: 8,
    title: "CMA Music Festival 2025",
    date: "2025-06-05T18:00:00",
    location: "Nashville, Tennessee, USA",
    description:
      "The premier country music festival in Nashville featuring performances by top country music stars.",
    image:
      "https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_1280.jpg",
    page: "https://cmafest.com/",
  },
  {
    id: 9,
    title: "Addis Ababa Arts Festival 2025",
    date: "2025-07-12T10:00:00",
    location: "Addis Ababa, Ethiopia",
    description:
      "A celebration of African and global art forms through visual arts, dance, and music performances.",
    image:
      "https://cdn.pixabay.com/photo/2015/08/28/11/37/painting-911804_1280.jpg",
    page: "https://www.instagram.com/addis_video_art_festival/?hl=en",
  },
  {
    id: 10,
    title: "Tehran International Film Festival 2025",
    date: "2025-11-01T09:00:00",
    location: "Tehran, Iran",
    description:
      "An international film festival that showcases Iranian and world cinema to a global audience.",
    image:
      "https://cdn.pixabay.com/photo/2016/10/10/09/00/spectacular-room-1727890_1280.jpg",
    page: "https://www.fajriff.com/en/",
  },
];

export default function Events() {
  const [filter, setFilter] = useState("all");

  const currentDate = new Date();

  const filteredEvents = events
    .filter((event) => {
      const eventDate = new Date(event.date);
      if (filter === "upcoming") return eventDate >= currentDate;
      if (filter === "past") return eventDate < currentDate;
      return true;
    })
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const formatDate = (dateString) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <div className="relative min-h-screen  ">
 {/*      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-40"
      >
        <source
          src="https://cdn.pixabay.com/video/2023/09/25/182287-868067162_large.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-200 mb-4">
            Events Calendar
          </h1>
          <div className="inline-flex rounded-lg bg-gray-900 border-gray-200 p-1">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === "all"
                  ? "bg-blue-600 text-gray-200 "
                  : "text-gray-200 hover:text-white"
              }`}
            >
              All Events
            </button>
            <button
              onClick={() => setFilter("upcoming")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === "upcoming"
                  ? "bg-blue-600 text-gray-200 "
                  : "text-gray-200  hover:text-white"
              }`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setFilter("past")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === "past"
                  ? "bg-blue-600 text-gray-200 "
                  : "text-gray-200  hover:text-white"
              }`}
            >
              Past Events
            </button>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover "
                />
                <div className="absolute top-4 right-4 bg-blue-600 px-3 py-1 rounded-full text-sm font-medium text-gray-200 shadow">
                  {new Date(event.date) >= currentDate ? "Upcoming" : "Past"}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-200 mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-400 mb-4">{event.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-200 ">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center text-gray-200 ">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <button className="mt-4 w-full bg-blue-600 text-gray-200  py-2 px-4 rounded-lg hover:bg-indigo-600 transition-colors duration-200 flex items-center justify-center">
                  <a href={event.page} target="_blank">
                    View Details
                  </a>

                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
