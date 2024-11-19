import React from "react";
import Image from 'next/image';
import { useState, useEffect } from "react";
import { useRouter } from 'next/router';

interface GalleryProps {
  title: string;
  description: string;
  address: string;
  images: string[]; // Array of image URLs passed from the backend
}

const Gallery = ({ 
  images,
  title,
  address,
  description, }: GalleryProps) => {
 // State to control the modal visibility
 const [showModal, setShowModal] = useState(false);
 // State to track copy success
 const [copySuccess, setCopySuccess] = useState(false); 

 // Function to show the modal
 const openModal = () => {
   setShowModal(true);
 };

 // Function to close the modal
 const closeModal = () => {
   setShowModal(false);
 };

// Function to save button
// Define state for heart status and the button text
const [heartState, setHeartState] = useState<'active' | 'inactive'>('inactive');

// This effect runs once to initialize the heartState from localStorage
useEffect(() => {
  // Get the saved heart state from localStorage, default to 'inactive'
  const savedHeartState = localStorage.getItem('heartState') as 'active' | 'inactive' || 'inactive';
  setHeartState(savedHeartState);
}, []);

// Function to toggle the heart state
const toggleHeartState = () => {
  const newHeartState = heartState === 'active' ? 'inactive' : 'active';
  setHeartState(newHeartState);
  
  // Save the updated state to localStorage
  localStorage.setItem('heartState', newHeartState);
};
const router = useRouter();
const { slug, hotelId } = router.query;
const hotelUrl = `http://localhost:3000/hotel-details/${slug}/${hotelId}`;

// Function to handle copying the link to the clipboard
  const copyLinkToClipboard = () => {
    const currentUrl = window.location.href; // Get the current URL
    navigator.clipboard.writeText(currentUrl)
      .then(() => {
        setCopySuccess(true); // Set copy success to true
        setTimeout(() => setCopySuccess(false), 2000); // Reset after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
        setCopySuccess(false);
      });
  };

// For  Gallery Modal
const [galleryModal, setGalleryModal] = useState(false);
const [currentImageIndex, setCurrentImageIndex] = useState(0);

const openGalleryModal = () => {
  //setCurrentImageIndex(index); // Set the clicked image as the starting point
  setGalleryModal(true); // Show the modal
};

const closeGalleryModal = () => {
  setGalleryModal(false); // Hides the modal
  setCurrentImageIndex(0); // Resets to the first image
};

// Function to go to the next image
const nextImage = () => {
  if (currentImageIndex < images.length - 1) {
    setCurrentImageIndex((prevIndex) => prevIndex + 1);
  }
};
// Function to go to the previous image
const prevImage = () => {
  if (currentImageIndex > 0) {
    setCurrentImageIndex((prevIndex) => prevIndex - 1);
  }
};

  return (
    <div className="gallery-section px-24 py-8">
      <div className="gallery-nav">
            <a href="#" className="back-link">
                <i className="fas fa-arrow-left"></i>
                See all properties
            </a>
            <div className="action-buttons">
                <button className="btn" onClick={openModal}>
                    <i className="fas fa-share"></i>
                    <span className="share-text">Share</span>
                </button>
                {/*<!-- HTML for the modal Starts--> */}
                {showModal && (
                  <div className="share-modal">
                    <div className="share-modal-content">
                      <span className="close" onClick={closeModal}>&times;</span>
                      <div className="sharemodal-title-img">
                        <div className="sharemodal-img">
                            {/* Display the first image dynamically */}
                            {images && images.length > 0 ? (
                              <img src={images[0]} alt={`${title} Main View`} />
                            ) : (
                              <img src="/images/default.jpg" alt="Default Vacation Home View" />
                            )}
                        </div>
                        <div className="sharemodal-title">
                          <h1>{title}: {description}</h1>
                          <h6>{address} <br /> 9.8/10</h6>
                        </div>
                      </div>
                      <div className="social-icon">
                        <a href="#" id="copyLink" className="share-icon"  onClick={copyLinkToClipboard}>
                          <Image src="/images/copylink.jpg" alt="Copy Link" 
                          width={500}
                          height={300}
                          aria-label="Copy hotel link to clipboard"
                          role="link"/>
                        </a>
                        <a href={`https://wa.me/?text=${encodeURIComponent(hotelUrl)}`}
                           target="_blank"
                           rel="noopener noreferrer" 
                           className="share-icon">
                           <Image src="/images/msg.png" alt="Message" 
                           width={500}
                           height={300} />
                        </a>
                        <a href={`https://wa.me/?text=${encodeURIComponent(hotelUrl)}`}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="share-icon">
                           <Image src="/images/WhatsApp.webp" alt="WhatsApp" 
                           width={500}
                           height={300}
                           />
                        </a>
                        <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(hotelUrl)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="share-icon" >
                            <Image src="/images/fb.jpeg" alt="Facebook" 
                            width={500}
                            height={300} 
                            />
                        </a>
                        <a 
                          href={`https://www.facebook.com/dialog/send?link=${encodeURIComponent(hotelUrl)}&app_id=YOUR_APP_ID`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="share-icon">
                          <Image src="/images/mssngr.png" alt="Messenger" 
                          width={500}
                          height={300}
                          />
                        </a>
                        <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(hotelUrl)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="share-icon">
                          <Image src="/images/twitter.webp" alt="Twitter" 
                          width={500}
                          height={300}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                )}
                {/*<!-- HTML for the modal Ends --> */}
                <button className="btn btn-save" onClick={toggleHeartState}>
                  <i className={`fa ${heartState === 'active' ? 'fa-heart' : 'fa-heart-o'}`}></i>
                  <span className="share-text">{heartState === 'active' ? 'Saved' : 'Save'}</span>
                </button>
            </div>
            {/* Optional Alert to show when link is copied */}
            {copySuccess && (
              <div className="alert">
                <p>Link copied to clipboard!</p>
              </div>
            )}
      </div>
      <div className="gallery-grid">
        {images.length > 0 ? (
          <>
            {/* Main Photo */}
            <div className="gallery-item main-photo">
              <img
                className="w-full h-full object-cover rounded-lg"
                src={images[0]} // The first image
                alt="Main property view"
              />
            </div>

            {/* Grid of Remaining Photos */}
            <div className="gallery-grid-right grid grid-cols-2 gap-4">
              {images.slice(1, 4).map((image, index) => (
                <div key={index} className="gallery-item">
                  <img
                    className="w-full h-full object-cover rounded-lg"
                    src={image}
                    alt={`Gallery Image ${index + 1}`}
                  />
                </div>
              ))}

              {/* Photo Count Overlay on the Last Image */}
              {images.length > 5 && (
                <div className="gallery-item relative" onClick={openGalleryModal}>
                  <img
                    className="w-full h-full object-cover rounded-lg"
                    src={images[4]} // Show the 6th image
                    alt="More images"
                  />
                  <div className="photo-count " >
                    <i className="fas fa-images text-sm"></i>
                    <strong className="ml-2 text-sm">{`${images.length - 5}+`}</strong>
                  </div>
                </div>
              )}
            </div>
          </>
        ) : (
          <p>No images available.</p>
        )}
      </div>
      {/*<!-- Modal for Image Sliders --> */}

      {
        galleryModal && (
          <div className="gallery-img-modal dialog" id="GalleryModal" role="dialog" aria-labelledby="modal-title" data-testid="gallery-modal">
          <div className="gallery-modal-content">
            <span 
              className="gallery-close cursor-pointer text-white text-2xl absolute top-4 right-4" 
              onClick={closeGalleryModal}
            >
              &times;
            </span>
  
            <img
              src={images[currentImageIndex]} 
              alt={`Gallery Image ${currentImageIndex + 1}`} 
              className="slider-image w-full h-auto"
            />
  
            <div className="slider-buttons flex justify-between items-center mt-4">
              <button
                id="prevBtn"
                onClick={prevImage}
                disabled={currentImageIndex === 0}
                className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded disabled:opacity-50"
              >
                ⬅️ 
              </button>
              <button
                id="nextBtn"
                onClick={nextImage}
                disabled={currentImageIndex === images.length - 1}
                className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded disabled:opacity-50"
              >
                ➡️
              </button>
            </div>
  
            <div className="modal-photo-count text-center mt-2">
              <h1>{title} | {description}</h1>
              <strong>{`${currentImageIndex + 1} / ${images.length}`}</strong>
            </div>
          </div>
        </div>
  
        )
      }
     


    </div>
  );
};

export default Gallery;
