import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { within } from '@testing-library/react';
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
    },
    { roomTitle: 'Room 2', 
      bedroomCount: 3, 
      roomImage: [] 
    }
  ]
  
};

describe('PropertySection Component', () => {
  it('renders hotel title and description', () => {
    render(<PropertySection {...mockProps} />);

    // Title Testing
    const titleElement = screen.getByRole('heading', { level: 1, name: /lameridian/i });
    expect(titleElement).toBeInTheDocument();

    // Description Testing
    const descriptionElement = screen.getByText(/a luxury five star hotel/i, { selector: 'h1' });
    expect(descriptionElement).toBeInTheDocument();
  });

  // Testing for Amenities
  it('renders amenities list correctly', () => {
    render(<PropertySection {...mockProps} />);
    
    mockProps.amenities.forEach(amenity => {
      const elements = screen.getAllByText(new RegExp(amenity, 'i'));
      expect(elements.length).toBeGreaterThan(0); // Ensure at least one match
    });
  });
  
  // Testing for rooms
  it('renders room details correctly', () => {
    render(<PropertySection {...mockProps} />);
  
    // Get the container for the "Rooms & beds" section
    const roomsBedsSection = screen.getByText(/Rooms & beds/i).closest('div');
    expect(roomsBedsSection).toBeInTheDocument();
  
    // Use `within` to scope queries to the section
    const sectionQueries = within(roomsBedsSection!);
  
    mockProps.rooms.forEach((room) => {
      // Check for room title
      const roomTitle = sectionQueries.getByText(new RegExp(room.roomTitle, 'i'));
      expect(roomTitle).toBeInTheDocument();
  
      // Check for bedroom count
      const bedCountText = `${room.bedroomCount} ${room.bedroomCount > 1 ? 'Beds' : 'Bed'}`;
      const bedCount = sectionQueries.getByText(new RegExp(bedCountText, 'i'));
      expect(bedCount).toBeInTheDocument();
    });
  });

  // Testing for address
  it('renders address and map link', () => {
    render(<PropertySection {...mockProps} />);
    //console.log(screen.debug());
    
    // Check if address is rendered
    expect(screen.getByText(/123 Test St, Juneau, AK/i)).toBeInTheDocument();

    // Check if map link is rendered
    const mapLink = screen.getByRole('link', { name: /view in a map/i });
    expect(mapLink).toBeInTheDocument();
    expect(mapLink).toHaveAttribute('href', `https://www.google.com/maps?q=58.3019,-134.4197`);
  });

  // testing for host
  it('renders host information', () => {
    render(<PropertySection {...mockProps} />);
    
    // Check if host information is rendered
    expect(screen.getByText(/Hosted by Host/i)).toBeInTheDocument();
  });
});
