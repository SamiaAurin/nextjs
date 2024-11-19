import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import Gallery from '../../components/Gallery'; 
import { useRouter } from 'next/router';

// Mock Next.js useRouter hook
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('Gallery Component', () => {
  // 1. Testing if the Share Button is working  
  it('opens the modal when share button is clicked', () => {
    // Mock the router query
    (useRouter as jest.Mock).mockReturnValue({
      query: { slug: 'hotel-slug', hotelId: '123' },
    });

    // Define the mock props with all required fields
    const mockProps = {
      title: "Lameridian",
      description: "A luxurious five-star hotel",
      address: "123 Test St, Juneau, AK",
      images: ["image1.jpg", "image2.jpg", "image3.jpg"], // Assuming the images prop is an array
    };

    // Render the Gallery component with the mock props
    render(<Gallery {...mockProps} />);

    // Find the share button and click it
    const shareButton = screen.getByRole('button', { name: /share/i });
    fireEvent.click(shareButton);

  });
  // 2. Testing Image Rendering:
  it('renders the gallery images correctly', () => {
    const mockProps = {
      title: "Lameridian",
      description: "A luxurious five-star hotel",
      address: "123 Test St, Juneau, AK",
      images: [
        "http://example.com/image1.jpg", 
        "http://example.com/image2.jpg", 
        "http://example.com/image3.jpg",
        "http://example.com/image4.jpg",
        "http://example.com/image5.jpg"
      ],
    };
  
    render(<Gallery {...mockProps} />);
  
    // Test that the main image is rendered
    const mainImage = screen.getByAltText("Main property view") as HTMLImageElement;
    expect(mainImage).toBeTruthy(); // Ensure the image exists
    expect(mainImage.src).toBe("http://example.com/image1.jpg"); // Check the src attribute directly
  
    // Test that the grid images are rendered
    const galleryImages = screen.getAllByAltText(/^Gallery Image/);
    expect(galleryImages).toHaveLength(3); // Assuming you have at least 5 images in the gallery

  });

  // 3. Testing Gallery Modal Behavior:
 
  
 
  // 4. Testing the  Heart Button
  it('toggles the heart button state correctly', () => {
    const mockProps = {
      title: "Lameridian",
      description: "A luxurious five-star hotel",
      address: "123 Test St, Juneau, AK",
      images: ["image1.jpg", "image2.jpg", "image3.jpg"],
    };
  
    render(<Gallery {...mockProps} />);
  
    // Check initial heart state
    const heartButton = screen.getByRole('button', { name: /save/i });
    expect(heartButton).toHaveTextContent('Save'); // Button initially should be "Save"
    expect(heartButton).toContainHTML('<i class="fa fa-heart-o"></i>');
  
    // Click the heart button to toggle its state
    fireEvent.click(heartButton);
  
    // Check toggled heart state
    expect(heartButton).toHaveTextContent('Saved'); // Button should now show "Saved"
    expect(heartButton).toContainHTML('<i class="fa fa-heart"></i>');
  });
  

  // 5. Testing Copy Link

});
