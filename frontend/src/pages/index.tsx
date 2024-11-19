import Navbar from "../../components/Navbar";

const Home = () => {
  return (
  <div className="body-container">
      <Navbar/>
      { /* <!-- gallery starts--> */}
      <div className="gallery-section">
          <div className="gallery-nav">
              <a href="#" className="back-link">
                  <i className="fas fa-arrow-left"></i>
                  See all properties
              </a>
              <div className="action-buttons">
                  <button className="btn">
                      <i className="fas fa-share"></i>
                      <span className="share-text">Share</span>
                  </button>
                  <button className="btn btn-save">
                      <i className="fas fa-heart"></i>
                      <span className="share-text">Save</span>
                  </button>
              </div>
          </div>
        
          <div className="gallery-grid">
              <div className="gallery-item main-photo">
                  <img src="images/home1.jpg" alt="Deck with mountain view" />
              </div>
              <div className="gallery-grid-right">
                  <div className="gallery-item">
                      <img src="images/home2.jpg" alt="Cottage exterior"/>
                  </div>
                  <div className="gallery-item">
                      <img src="images/home3.jpg" alt="Living room view"/>
                  </div>
                  <div className="gallery-item">
                      <img src="images/home4.jpg" alt="Another living room view"/>
                  </div>
                  <div className="gallery-item">
                      <img src="images/home5.jpg" alt="Third living room view"/>
                      <div className="photo-count">
                          <i className="fas fa-images"></i>
                          <strong>30+</strong>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      { /* <!-- gallery ends--> */}

      {/*<!-- Properties -->*/}
      <div className="property-section">
        
          <nav className="tabs">
              <a href="#" className="tab active">Overview</a>
              <a href="#" className="tab">Amenities</a>
              <a href="#" className="tab">Policies</a>
          </nav>
          
          <div className="content">
              <div className="left-column">
                  
                  <div className="title-section">
                      <h6>Entire home</h6>
                      <h1>Juneau Vacation Home: Stunning View + Beach Access</h1>
                      <div className="rating">
                          <span className="rating-score">9.8</span>  Exceptional
                      </div>
                      <div className="see-review">
                          <a href="#">See all 24 reviews </a>
                      </div>
                  </div>
                  
                
                  <div className="property-details">
                    
                      <div className="property-info">
                          <div>🚪 2 bedrooms</div>                  
                          <div>🚽 1 bathroom</div>
                          <div>🛏️ Sleeps 4</div>
                          <div>📏 1155 sq ft</div>
                      </div>
                  
                    
                      <div className="amenities">
                          <h3>Popular amenities</h3>
                          <div className="amenities-grid">
                              <div>🍖 Barbecue grill</div>
                              <div>🌴 Outdoor Space</div>
                              <div>🍽️ Kitchen</div>
                              <div>🧼 Washer</div>
                              <div>🚘 Parking available</div>
                              <div>👕 Dryer</div>
                          </div>
                          <a href="#">See all property amenities </a>
                      </div>
                      
                  </div>
                  
                
                  <div className="explore">
                      <h3>Explore the area</h3>
                      <div className="explore-container">
                          <div className="map">
                              <img src="images/map.webp" alt="Map" />
                              <div className="map-text">
                                  Juneau, Alaska<br/>
                                  <a href="#" className="see-more">View in a map</a>
                              </div>
                          </div>
                          <div className="explore-info">
                              <ul className="location-list">
                                  <li className="location-item">
                                      <div>🚧 Auke Bay</div>
                                      <div>6 min drive</div>
                                  </li>
                                  <li className="location-item">
                                      <div>🏫 University of Alaska-Southeast</div>
                                      <div>10 min drive</div>
                                  </li>
                                  <li className="location-item">
                                      <div>⛳ Mendenhall Golf Course</div>
                                      <div>14 min drive</div>
                                  </li>
                                  <li className="location-item">
                                      <div>🛫 Juneau, AK (JNU-Juneau Intl.)</div>
                                      <div>14 min drive</div>
                                  </li>
                              </ul>
                              <a href="#" className="see-more">See more about this area &rarr;</a>
                          </div>
                      </div>
                </div>
                
              </div>
              
        
              <div className="right-column">
                
                  <div className="membership">
                      <div className="membership-logo">
                          <i className="fa fa-user-plus" ></i>
                      </div>
                      <div className="membership-text">
                          <div><h4>Members get our best prices when signed in</h4></div>
                          <div className="button-signin-sec">
                              <button className="signin-btn">Sign in</button>
                          </div>
                      </div>
                  </div>
                  
                  <div className="booking-card">
                      <div className="price">$134 <span className="per-night">per night</span></div>
                      <div className="free-cancellation">Free cancellation <i className="fa fa-info-circle"></i>
                      <div className="info">Before Mon, Nov 4</div>
                      </div>
                      <div className="available"><i className="fa-regular fa-circle-check"></i> Your dates are available</div>
                      <div className="date-select">
                          <div className="date-box">
                              <div><i className="fa fa-calendar"></i></div>
                              <div>Start date</div>
                              <div>Nov 18</div>
                          </div>
                          <div className="date-box">
                              <div><i className="fa fa-calendar"></i></div>
                              <div>End date</div>
                              <div>Nov 20</div>
                          </div>
                      </div>
                      <div className="travelers">Travelers<br />2 travelers</div>
                      <div className="total">
                          <div>Total <br /><span className="small-text">Total includes fees, not tax</span></div>
                          <div>$543  <br /><a href="#" className="price-details">Price details</a></div>
                      </div>
                      
                      <a href="#" className="book-now">Book now</a>
                      <div className="note">You will not be charged yet</div>
                  </div>
                  <a href="#" className="contact-host">Contact host</a>
                  <hr />
                  <div className="property-number"><strong>Property #</strong> 9838104ha</div>
              </div>
          </div>
      </div>
      {/*<!-- Properties ends -->*/}
      <div className="middle-section">
        
        <div className="rooms-beds">
            <h3>Rooms & beds</h3>
            <div className="bedrooms">
                <div className="bedroom-info">
                    <h4>2 bedrooms <span> (sleeps 4)</span></h4>
                    <div className="bedroom-details">
                        <div className="room">
                            <h5>Bedroom 1</h5>
                            🛏️ <span>1 Queen Bed</span>
                        </div>
                        <div className="room">
                            <h5>Bedroom 2</h5>
                            🛏️ <span>1 Twin Bed</span>
                        </div>
                    </div>
                </div>
            </div>
        
            <hr style={{ width: "50%" }} />
        
            <div className="bathroom">
                <h4>1 bathroom</h4>
                <span>Full Bathroom</span>
            </div>
        
            <hr style={{ width: "50%" }} />
        
            <div className="spaces">
                <h3>Spaces</h3>
                <div className="spaces-list">
                    <div>🏖️ Deck or patio</div>
                    <div>🍽️ Kitchen</div>
                    <div>🌇 Balcony</div>
                    <div>🌻 Garden</div>
                </div>
                <a href="#">See all rooms and beds details</a>
            </div>
        </div>
        {/*<!-- About this Property -->*/}
        {/*<!-- About this Property Ends-->*/}
        <div className="amenities-section">
            <div><h2>Amenities</h2></div>
            <div className="amenities-grid">
                <div>🍽️<span>Kitchen</span></div>
                <div>🪣<span>Washer</span></div>
                <div>👕<span>Dryer</span></div>
                <div>🏝️<span>Outdoor Space</span></div>
                <div>🚘<span>Parking available</span></div>
                <div>🌊<span>Ocean view</span></div>
                <a href="#" className="view-all">See all 34 amenities</a>
            </div>
        </div>
      </div>
      { /* Have a Que --> */}
      <div className="question-box">
        <h3>Have a question?</h3>
        <p>Get instant answers with AI powered search of property information and reviews.</p>
        <div className="search-container">
            <div className="search-bar">
                <i className="fas fa-search"></i>
                <input type="text" placeholder="Ask a question" />
            </div>
            <button className="search-button"><i className="fas fa-search"></i></button>
        </div>
        <div className="beta-label">
            <span>➕Beta</span>
        </div>
      </div>

      {/*<!-- Rules and Info --> */}
      <div className="rule-info">
        <div className="house-section house-rules">
            <div className="left-col">
                <h3>House Rules</h3>
            </div>
            <div className="right-col">
                <div className="checkin-checkout-info1">
                    <p>Check in after 3:00 PM</p>
                    <p>Minimum age to rent: 25</p>
                    <p>Check out before 10:00 AM</p>
                    <a href="#" className="see-more">See more</a>
                </div>
                <div className="checkin-checkout-info2">
                    <div className="icons">
                        👶 Children
                        <h6>Children allowed: ages 0-17</h6>
                    </div>
                    <div className="icons">
                        🐾 Pets
                        <h6>No pets allowed</h6>
                    </div>
                    <div className="icons">
                        🎊 Events
                        <h6>No events allowed</h6> 
                    </div>
                    <div className="icons">
                        🚭 Smoking 
                        <h6>Smoking is not permitted</h6>
                    </div>
                </div>
            </div>
        </div>
    
        <div className="section damage">
            <div className="left-col">
                <h3>Damage and Incidentals</h3>
            </div>
            <div className="right-col">
                <p>You will be responsible for any damage to the rental property caused by you or your party during your stay.</p>
            </div>
            
        </div>
    
        <div className="section cancellation">
            <div className="left-col">
                <h3>Cancellation</h3>
            </div>
           <div className="right-col">
            <div className="refund-policy">
               
                <div className="timeline-container">
                    <div className="timeline-item below">
                        <div className="circle"></div>
                        <p>Today</p>
                    </div>
                    <div className="timeline-item above">
                        <p>Full refund</p>
                    </div>
                    <div className="timeline-item below">
                        <div className="circle open"></div>
                        <p>Nov 4</p>
                    </div>
                    <div className="timeline-item above">
                        <p>No refund</p>
                    </div>
                    <div className="timeline-item below">
                        <div className="circle halfopen"></div>
                        <p>Check-in</p>
                    </div>
                </div>
            
              
                <div className="refund-details">
                    <div className="refund-item">
                        <div className="date">Before<br/>Nov 4</div>
                        <div className="description">
                            <b>Full refund</b><br/>
                            Cancel your reservation before Nov 4 at 11:59 PM, and you'll get a full refund. Times are based on the property's local time.
                        </div>
                    </div>
                    <hr/>
                    <div className="refund-item">
                        <div className="date">After<br/>Nov 4</div>
                        <div className="description">
                            <b>No refund</b><br/>
                            After that, you won’t get a refund.
                        </div>
                    </div>
                </div>
            </div>
           </div>
        </div>
    
        <div className="section important-info">
            <div className="left-col">
                <h3>Important Information</h3>
            </div>
          
            <div className="right-col">
               <p>You need to know</p>
               <p>Extra-person charges may apply and vary depending on property policy</p>
               <p>Government-issued photo identification and a credit card, debit card, or cash deposit may be required at check-in for incidental charges</p>
               <p>Safety features at this property include a fire extinguisher and a first aid kit</p>
               <p>Online Parties are strictly Prohibited.</p>
            </div>
        </div>
    
        <div className="section faq">
            <div className="left-col">
                <h3>Frequently Asked Questions</h3>
            </div>
           <div className="right-col">
                <div className="faq-item">
                    <i className="fas fa-chevron-down"></i>
                    <span>Is Juneau Vacation Home pet-friendly?</span>
                </div>
                <div className="faq-item">
                    <i className="fas fa-chevron-down"></i>
                    <span>What time is check-in at Juneau Vacation Home?</span>  
                </div>
                <div className="faq-item">
                    <i className="fas fa-chevron-down"></i>
                    <span>Where is Juneau Vacation Home located?</span>
                </div>
                <div className="faq-item">
                    <i className="fas fa-chevron-down"></i>
                    <span>Where is Juneau Vacation Home located?</span>
                </div>
                <a href="#" className="see-more">See more</a>
           </div>
        </div>
      </div>
      {/*<!-- Reviews --> */}
      <div className="review-section">
    <div className="review-rating">
        <h1><span>9.8/10</span></h1>
        <h2>Exceptional</h2>
        <h5>24 reviews <i className="fa fa-info-circle"></i></h5> 
        <h6>Reviews are verified unless labeled otherwise.</h6>   
    </div>
    <div className="review-container">
        <div className="reviews-header">Recent reviews</div>
        <div className="reviews">
            <div className="review-card">
                <div className="rating">10/10 Excellent</div>
                <div className="review-text">
                    A very cozy home for the two of us in a quiet area NW of town. Beautiful water view. We enjoyed the art, read up in it and visited the... 
                    <a href="#" className="read-more">Read more</a>
                </div>
                <div className="author">Kyle G.</div>
                <div className="date">Sep 25, 2024</div>
            </div>
            <div className="review-card second-review-card">
                <div className="rating">10/10 Excellent</div>
                <div className="review-text">
                    The cottage was just as the pictures and description stated. Nice quiet area and great view of the cove.
                    <a href="#" className="read-more">Read more</a>
                </div>
                <div className="author">Cindy B.</div>
                <div className="date">Sep 23, 2024</div>
            </div>
        </div>
        <a href="#" className="see-all">See all 24 reviews &rarr;</a>
    </div>

      </div>  
      {/*<!-- Reviews Ends--> */}
      <div className="last-container">
        <div className="last-section">
            <div className="section-title">
                <h4>About the host</h4>
            </div>
            <div className="host-info">
                <div className="host-details">
                    <div>Hosted by Evolve</div>
                    <div className="languages">
                        <strong>Languages:</strong><br />
                        English, French, German, Spanish
                    </div>
                </div>
            </div>
        </div>
        <div className="last-section">
            <div className="section-title">
                <h4>Send a message</h4>
            </div>
            <div className="contact"><a href="#" className="contact-button">Contact host</a></div>
        </div>
      </div>
  </div>
  );
};

export default Home;
