import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    window.alert("Form submitted:", formData);
    // Clear form fields after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const toggleChat = () => {
    setChatOpen(!chatOpen);
  };

  const sendMessage = () => {
    if (chatInput.trim() !== "") {
      setChatMessages([...chatMessages, { user: "You", message: chatInput }]);
      setChatInput("");
    }
  };

  return (
    <div className="min-h-screen bg-black text-gray-200">
      {/* Hero Section */}
      <div
        className="h-80 bg-cover bg-center relative"
        style={{
          backgroundImage:
            'url("https://cdn.pixabay.com/photo/2018/08/14/11/03/acapulco-3605307_1280.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="container mx-auto px-6 h-full flex items-center z-10 relative">
          <div>
            <h1 className="text-4xl font-bold mb-2 animate-fadeIn">
              Contact Us
            </h1>
            <p className="text-xl animate-fadeInDelay">
              We'd love to hear from you
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-200 mb-8">
                Have questions? We're here to help. Send us a message and we'll
                respond as soon as possible.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 group">
                <MapPin className="w-6 h-6 text-blue-600 group-hover:text-blue-700transition duration-300" />
                <div>
                  <h3 className="font-semibold">Our Location</h3>
                  <p className="text-gray-200">Vulkanstraße 1, 10367 Berlin</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <Phone className="w-6 h-6 text-blue-600 group-hover:text-blue-700 transition duration-300" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-200">03056795008</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <Mail className="w-6 h-6 text-blue-600 group-hover:text-blue-700 transition duration-300" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-200">contact@company.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <Clock className="w-6 h-6 text-blue-600 group-hover:text-blue-700transition duration-300" />
                <div>
                  <h3 className="font-semibold">Business Hours</h3>
                  <p className="text-gray-200">
                    Monday - Friday: 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.1084450799835!2d13.482704376679906!3d52.52340657872514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e9ab1163a17%3A0x700b4ec74a47a34d!2sDCI%20Digital%20Career%20Institute!5e0!3m2!1sen!2sde!4v1709667892733!5m2!1sen!2sde"
                className="w-full h-64 rounded-lg shadow-md"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900 rounded-lg shadow-lg p-8 lg:col-span-2 ">
            <form
              onSubmit={handleSubmit}
              className="space-y-7 animate-slideUp  ml-auto"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-200 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800 text-gray-200 rounded-md focus:ring-2 focus:ring-gray-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-200 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800 text-gray-200 rounded-md focus:ring-2 focus:ring-gray-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-200 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800 text-gray-200 rounded-md focus:ring-2 focus:ring-gray-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-200 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-2 bg-gray-800 text-gray-200 rounded-md focus:ring-2 focus:ring-gray-500 focus:outline-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-auto py-3 px-4 font-medium text-gray-200 transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Chat Popup Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-16 right-6 bg-blue-600 hover:bg-blue-700 text-gray-200 rounded-full p-4 shadow-lg transition"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      {chatOpen && (
        <div className="fixed bottom-24 right-6  text-gray-200 w-80 backdrop-blur-lg rounded-lg shadow-xl p-6 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-gray-200 text-lg">Chat with us</h3>
            <button onClick={toggleChat} className="text-gray-200">
              X
            </button>
          </div>
          <div className="mt-4 space-y-3 overflow-y-auto max-h-60">
            {chatMessages.map((chat, index) => (
              <div key={index} className="text-sm">
                <strong className="text-gray-200">{chat.user}:</strong>{" "}
                {chat.message}
              </div>
            ))}
          </div>
          <div className="mt-4 flex flex-col items-center space-x-3">
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              className="flex-1 px-4 py-2 border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-gray"
              placeholder="Type a message"
            />
            <button
              onClick={sendMessage}
              className="px-4 py-2 font-medium text-gray-200 bg-blue-600 hover:bg-blue-700 m-4 rounded-md 0 focus:outline-none focus:ring-2 transition duration-200"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactUs;
