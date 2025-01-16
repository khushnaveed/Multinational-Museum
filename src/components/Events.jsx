import React from 'react'

export default function Events() {
  return (
    <div className="relative h-screen bg-black flex items-center justify-center overflow-hidden">

      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover opacity-60"
        >
          <source src="https://cdn.pixabay.com/video/2023/09/25/182287-868067162_large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      </div>
  )
}
