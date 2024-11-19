import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import PropertySection from '../../components/PropertySection';  

// Mock props for the test
const mockProps = {
  title: "Lameridian",
  description: "A luxury five star hotel",
  guestCount: 22,
  bedroomCount: 1,
  bathroomCount: 2,
  amenities: ["🏊 Pool", "💆🏼 Spa", "🛜 Free WiFi", "🌊 Beach Access"],
  address: "123 Test St, Juneau, AK",
  latitude: 58.3019,
  longitude: -134.4197,
  host: "Host",
  rooms: [
    {
      roomTitle: "Room 1",
      bedroomCount: 2,
      roomImage: []
    }
  ]
};

describe('PropertySection Component', () => {
   /*
  it('renders hotel title and description', () => {
    render(<PropertySection {...mockProps} />);
    
    // Check if the title and description are rendered correctly
    expect(screen.getByText(/Lameridian/i)).toBeInTheDocument();
    expect(screen.getByText(/A luxury five star hotel/i)).toBeInTheDocument();
  });
 
  it('renders amenities list correctly', () => {
    render(<PropertySection {...mockProps} />);
    
    // Check if amenities are rendered
    mockProps.amenities.forEach(amenity => {
      expect(screen.getByText(new RegExp(amenity, 'i'))).toBeInTheDocument();
    });
  });

  it('renders room details', () => {
    render(<PropertySection {...mockProps} />);
    
    // Check if room details are rendered correctly
    expect(screen.getByText(/Room 1/i)).toBeInTheDocument();
    expect(screen.getByText(/2 bedrooms/i)).toBeInTheDocument();
  });
  */
  it('renders address and map link', () => {
    render(<PropertySection {...mockProps} />);
    
    // Check if address is rendered
    expect(screen.getByText(/123 Test St, Juneau, AK/i)).toBeInTheDocument();

    // Check if map link is rendered
    const mapLink = screen.getByRole('link', { name: /view in a map/i });
    expect(mapLink).toBeInTheDocument();
    expect(mapLink).toHaveAttribute('href', `https://www.google.com/maps?q=58.3019,-134.4197`);
  });

  it('renders host information', () => {
    render(<PropertySection {...mockProps} />);
    
    // Check if host information is rendered
    expect(screen.getByText(/Hosted by Host/i)).toBeInTheDocument();
  });
});
