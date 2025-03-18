import React, { useState, useEffect } from 'react';
import './nineties.css';

const Nineties: React.FC = () => {
  const [currentCategory, setCurrentCategory] = useState<string>('music');
  const [currentSection, setCurrentSection] = useState<string>('homepage');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const date = "Wednesday, October 11, 1999";
  
  // Categories for top navigation
  const categories = [
    { id: 'welcome', name: 'WELCOME' },
    { id: 'books', name: 'BOOKS' },
    { id: 'music', name: 'MUSIC' },
    { id: 'video', name: 'VIDEO' },
    { id: 'toys', name: 'TOYS & GAMES' },
    { id: 'electronics', name: 'ELECTRONICS' },
    { id: 'e-cards', name: 'E-CARDS' },
    { id: 'auctions', name: 'AUCTIONS' },
    { id: 'shops', name: 'SHOPS' },
  ];

  // Music subcategories for sidebar
  const musicCategories = [
    { id: 'bestsellers', name: 'Bestsellers' },
    { id: 'alternative', name: 'Alternative' },
    { id: 'blues', name: 'Blues' },
    { id: 'childrens', name: "Children's Music" },
    { id: 'christian', name: 'Christian & Gospel' },
    { id: 'classical', name: 'Classical' },
    { id: 'country', name: 'Country' },
    { id: 'dance', name: 'Dance & DJ' },
    { id: 'folk', name: 'Folk' },
    { id: 'international', name: 'International' },
    { id: 'jazz', name: 'Jazz' },
    { id: 'newage', name: 'New Age' },
    { id: 'opera', name: 'Opera & Vocal' },
    { id: 'pop', name: 'Pop' },
    { id: 'rock', name: 'Rock' },
    { id: 'rap', name: 'Rap & Hip-Hop' },
    { id: 'randb', name: 'R&B/Soul' }
  ];

  // Books subcategories
  const bookCategories = [
    { id: 'bestsellers', name: 'Bestsellers' },
    { id: 'fiction', name: 'Fiction' },
    { id: 'nonfiction', name: 'Non-Fiction' },
    { id: 'mystery', name: 'Mystery & Thrillers' },
    { id: 'scifi', name: 'Science Fiction' },
    { id: 'computers', name: 'Computers & Internet' },
    { id: 'business', name: 'Business & Investing' },
    { id: 'health', name: 'Health, Mind & Body' },
    { id: 'history', name: 'History' },
    { id: 'biographies', name: 'Biographies & Memoirs' },
    { id: 'cooking', name: 'Cooking, Food & Wine' },
    { id: 'childrens', name: "Children's Books" },
  ];

  // Video subcategories
  const videoCategories = [
    { id: 'bestsellers', name: 'Bestsellers' },
    { id: 'action', name: 'Action & Adventure' },
    { id: 'comedy', name: 'Comedy' },
    { id: 'drama', name: 'Drama' },
    { id: 'horror', name: 'Horror' },
    { id: 'scifi', name: 'Science Fiction' },
    { id: 'family', name: 'Family' },
    { id: 'documentary', name: 'Documentary' },
    { id: 'anime', name: 'Anime' },
    { id: 'tv', name: 'TV Shows' },
  ];

  // Electronics subcategories
  const electronicsCategories = [
    { id: 'bestsellers', name: 'Bestsellers' },
    { id: 'computers', name: 'Computers' },
    { id: 'cameras', name: 'Cameras & Photo' },
    { id: 'audio', name: 'Audio & Video' },
    { id: 'handhelds', name: 'Handhelds & PDAs' },
    { id: 'phones', name: 'Cell Phones' },
    { id: 'software', name: 'Software' },
    { id: 'games', name: 'Video Games' },
  ];

  // Function to get current categories based on selected main category
  const getCurrentCategories = () => {
    switch(currentCategory) {
      case 'books':
        return bookCategories;
      case 'video':
        return videoCategories;
      case 'electronics':
        return electronicsCategories;
      case 'music':
      default:
        return musicCategories;
    }
  };

  // Define types for featured items
  type MusicFeaturedItem = {
    id: string;
    title: string;
    artist: string;
    imageUrl: string;
    description: string;
  };

  type BookFeaturedItem = {
    id: string;
    title: string;
    author: string;
    imageUrl: string;
    description: string;
  };

  type VideoFeaturedItem = {
    id: string;
    title: string;
    director: string;
    imageUrl: string;
    description: string;
  };

  type ElectronicsFeaturedItem = {
    id: string;
    title: string;
    brand: string;
    imageUrl: string;
    description: string;
  };

  type FeaturedContent = {
    main: MusicFeaturedItem | BookFeaturedItem | VideoFeaturedItem | ElectronicsFeaturedItem;
    secondary: MusicFeaturedItem | BookFeaturedItem | VideoFeaturedItem | ElectronicsFeaturedItem;
  };

  // Music featured content
  const musicFeatured: { main: MusicFeaturedItem; secondary: MusicFeaturedItem } = {
    main: {
      id: '1',
      title: 'Supreme Chieftains',
      artist: 'The Chieftains',
      imageUrl: 'data:image/gif;base64,R0lGODlhQABAAKIAAP///wAAAP8AAP///////wAAAAAAAAAAACH5BAEAAAEALAAAAABAAEAAAAOGjI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jed6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxxsfIycrLzM3Oz8DB0tPU1dbX2Nna29zd3t/Q0eLj5OXm5+jp6uvs7e7v4OHy8/T19vf4+fr7/P3+///wIcCLCgwYMIEypcyLChw4cQI0qcSLGixYsYM2rcyLE=',
      description: 'Formed in the early \'60s, the Chieftains have become the definitive Irish traditional-music band. Collection: The Very Best of the Chieftains spans decades the arduous, ultimately fruitful journey of the group that has come to embody music from the Emerald Isle.'
    },
    secondary: {
      id: '2',
      title: 'Free Digital Downloads',
      artist: 'Eurythmics, Moby, Eels...',
      imageUrl: 'data:image/gif;base64,R0lGODlhQABAAKIAAP///wAAAP8AAP///////wAAAAAAAAAAACH5BAEAAAEALAAAAABAAEAAAAOGjI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jed6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxxsfIycrLzM3Oz8DB0tPU1dbX2Nna29zd3t/Q0eLj5OXm5+jp6uvs7e7v4OHy8/T19vf4+fr7/P3+///wIcCLCgwYMIEypcyLChw4cQI0qpcSLGixYsYM2rcyLE=',
      description: 'We\'ve just added 10 new artists to our Free Digital Downloads service, including tracks from the Eurythmics\' forthcoming album, Peace, a previously unreleased Moby track, and a tune by the Eels from the American Beauty soundtrack.'
    }
  };

  // Books featured content
  const booksFeatured: { main: BookFeaturedItem; secondary: BookFeaturedItem } = {
    main: {
      id: '1',
      title: 'Harry Potter and the Prisoner of Azkaban',
      author: 'J.K. Rowling',
      imageUrl: 'data:image/gif;base64,R0lGODlhQABAAKIAAP///wAAAP8AAP///////wAAAAAAAAAAACH5BAEAAAEALAAAAABAAEAAAAOGjI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jed6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxxsfIycrLzM3Oz8DB0tPU1dbX2Nna29zd3t/Q0eLj5OXm5+jp6uvs7e7v4OHy8/T19vf4+fr7/P3+///wIcCLCgwYMIEypcyLChw4cQI0qcSLGixYsYM2rcyLE=',
      description: 'For twelve long years, the dread fortress of Azkaban held an infamous prisoner named Sirius Black. Now he has escaped, leaving only two clues as to where he might be headed: Harry Potter\'s defeat of You-Know-Who was Black\'s downfall as well.'
    },
    secondary: {
      id: '2',
      title: 'The New York Times Bestsellers',
      author: 'Various Authors',
      imageUrl: 'data:image/gif;base64,R0lGODlhQABAAKIAAP///wAAAP8AAP///////wAAAAAAAAAAACH5BAEAAAEALAAAAABAAEAAAAOGjI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jed6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxxsfIycrLzM3Oz8DB0tPU1dbX2Nna29zd3t/Q0eLj5OXm5+jp6uvs7e7v4OHy8/T19vf4+fr7/P3+///wIcCLCgwYMIEypcyLChw4cQI0qcSLGixYsYM2rcyLE=',
      description: 'Check out the latest New York Times Bestsellers list. Updated weekly with the hottest new fiction and non-fiction titles. Great discounts on all titles.'
    }
  };

  // Video featured content
  const videoFeatured: { main: VideoFeaturedItem; secondary: VideoFeaturedItem } = {
    main: {
      id: '1',
      title: 'The Matrix',
      director: 'The Wachowski Brothers',
      imageUrl: 'data:image/gif;base64,R0lGODlhQABAAKIAAP///wAAAP8AAP///////wAAAAAAAAAAACH5BAEAAAEALAAAAABAAEAAAAOGjI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jed6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxxsfIycrLzM3Oz8DB0tPU1dbX2Nna29zd3t/Q0eLj5OXm5+jp6uvs7e7v4OHy8/T19vf4+fr7/P3+///wIcCLCgwYMIEypcyLChw4cQI0qcSLGixYsYM2rcyLE=',
      description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers. Starring Keanu Reeves and Laurence Fishburne.'
    },
    secondary: {
      id: '2',
      title: 'New VHS Releases',
      director: 'Various Directors',
      imageUrl: 'data:image/gif;base64,R0lGODlhQABAAKIAAP///wAAAP8AAP///////wAAAAAAAAAAACH5BAEAAAEALAAAAABAAEAAAAOGjI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jed6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxxsfIycrLzM3Oz8DB0tPU1dbX2Nna29zd3t/Q0eLj5OXm5+jp6uvs7e7v4OHy8/T19vf4+fr7/P3+///wIcCLCgwYMIEypcyLChw4cQI0qcSLGixYsYM2rcyLE=',
      description: 'Check out our latest VHS releases. Order today and get free shipping on orders over $25. Pre-order upcoming titles and receive a special discount.'
    }
  };

  // Electronics featured content
  const electronicsFeatured: { main: ElectronicsFeaturedItem; secondary: ElectronicsFeaturedItem } = {
    main: {
      id: '1',
      title: 'Palm V Organizer',
      brand: 'Palm',
      imageUrl: 'data:image/gif;base64,R0lGODlhQABAAKIAAP///wAAAP8AAP///////wAAAAAAAAAAACH5BAEAAAEALAAAAABAAEAAAAOGjI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jed6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxxsfIycrLzM3Oz8DB0tPU1dbX2Nna29zd3t/Q0eLj5OXm5+jp6uvs7e7v4OHy8/T19vf4+fr7/P3+///wIcCLCgwYMIEypcyLChw4cQI0qcSLGixYsYM2rcyLE=',
      description: 'The sleek Palm V organizer combines an elegant design with powerful features. Keep track of your schedule, contacts, to-do lists, and more in this ultraslim, metallic design.'
    },
    secondary: {
      id: '2',
      title: 'Digital Cameras',
      brand: 'Various Brands',
      imageUrl: 'data:image/gif;base64,R0lGODlhQABAAKIAAP///wAAAP8AAP///////wAAAAAAAAAAACH5BAEAAAEALAAAAABAAEAAAAOGjI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jed6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxxsfIycrLzM3Oz8DB0tPU1dbX2Nna29zd3t/Q0eLj5OXm5+jp6uvs7e7v4OHy8/T19vf4+fr7/P3+///wIcCLCgwYMIEypcyLChw4cQI0qcSLGixYsYM2rcyLE=',
      description: 'Capture your memories with our selection of digital cameras. From point-and-shoot models to professional equipment, we have everything you need to take the perfect picture.'
    }
  };

  // Top sellers for each category
  const musicTopSellers = [
    { id: '1', title: 'Supernatural', artist: 'Santana' },
    { id: '2', title: 'Brand New Day', artist: 'Sting' },
    { id: '3', title: 'Collection: The Very Best of the Chieftain', artist: 'The Chieftains' },
    { id: '4', title: 'Run Devil Run', artist: 'Paul McCartney' },
    { id: '5', title: 'Buena vista social club', artist: 'Ry Cooder' }
  ];
  
  const booksTopSellers = [
    { id: '1', title: 'Harry Potter and the Prisoner of Azkaban', author: 'J.K. Rowling' },
    { id: '2', title: 'Timeline', author: 'Michael Crichton' },
    { id: '3', title: 'The Carbohydrate Addict\'s Diet', author: 'Dr. Rachael F. Heller' },
    { id: '4', title: 'Tuesdays with Morrie', author: 'Mitch Albom' },
    { id: '5', title: 'The Testament', author: 'John Grisham' }
  ];
  
  const videoTopSellers = [
    { id: '1', title: 'The Matrix', director: 'The Wachowski Brothers' },
    { id: '2', title: 'Star Wars: Episode I', director: 'George Lucas' },
    { id: '3', title: 'Austin Powers: The Spy Who Shagged Me', director: 'Jay Roach' },
    { id: '4', title: 'Shakespeare in Love', director: 'John Madden' },
    { id: '5', title: 'The Mummy', director: 'Stephen Sommers' }
  ];
  
  const electronicsTopSellers = [
    { id: '1', title: 'Palm V Organizer', brand: 'Palm' },
    { id: '2', title: 'Rio 500 MP3 Player', brand: 'Diamond' },
    { id: '3', title: 'Handspring Visor', brand: 'Handspring' },
    { id: '4', title: 'Canon PowerShot S10', brand: 'Canon' },
    { id: '5', title: 'Nikon Coolpix 950', brand: 'Nikon' }
  ];

  // Function to get current top sellers based on selected main category
  const getCurrentTopSellers = () => {
    switch(currentCategory) {
      case 'books':
        return booksTopSellers;
      case 'video':
        return videoTopSellers;
      case 'electronics':
        return electronicsTopSellers;
      case 'music':
      default:
        return musicTopSellers;
    }
  };

  // Function to get current featured content based on selected main category
  const getCurrentFeatured = () => {
    switch(currentCategory) {
      case 'books':
        return booksFeatured;
      case 'video':
        return videoFeatured;
      case 'electronics':
        return electronicsFeatured;
      case 'music':
      default:
        return musicFeatured;
    }
  };

  // Add a small marquee for special announcements
  const getMarqueeText = () => {
    switch(currentCategory) {
      case 'books':
        return "NEW RELEASE: Harry Potter and the Prisoner of Azkaban - Order now!";
      case 'video':
        return "Now available for pre-order: The Matrix on VHS and DVD!";
      case 'electronics':
        return "Flash Sale! 20% off all Palm organizers this weekend only!";
      case 'music':
      default:
        return "Free shipping on all CD orders over $20! Limited time offer.";
    }
  };

  // Handle category changes
  const handleCategoryChange = (category: string) => {
    setCurrentCategory(category);
    setCurrentSection('homepage');
  };
  
  // Handle section changes
  const handleSectionChange = (section: string) => {
    setCurrentSection(section);
  };

  // Handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Searching for: "${searchTerm}" in ${currentCategory} category`);
    // In a real app, this would trigger a search API call
  };

  // Helper function to render the appropriate creator field based on category
  const renderCreatorField = (item: any) => {
    if (currentCategory === 'music' && 'artist' in item) {
      return <span>{item.artist} - </span>;
    } else if (currentCategory === 'books' && 'author' in item) {
      return <span>{item.author} - </span>;
    } else if (currentCategory === 'video' && 'director' in item) {
      return <span>{item.director} - </span>;
    } else if (currentCategory === 'electronics' && 'brand' in item) {
      return <span>{item.brand} - </span>;
    }
    return null;
  };

  return (
    <div className="nineties-amazon-container">
      {/* Amazon Header */}
      <header className="nineties-amazon-header">
        {/* Top Logo and Navigation */}
        <div className="nineties-top-bar">
          <a href="#" className="nineties-logo">
            <h1>amazon.com</h1>
          </a>
          <div className="nineties-user-nav">
            <a href="#" className="nineties-cart">
              <span>🛒</span>
              VIEW CART
            </a>
            <a href="#">YOUR ACCOUNT</a>
            <a href="#">HELP</a>
            <a href="#" className="nineties-sell-button">SELL ITEMS</a>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="nineties-category-nav">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`nineties-category-button ${
                currentCategory === category.id ? 'nineties-active' : ''
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Subcategories - only shown for certain categories */}
        {['music', 'books', 'video', 'electronics'].includes(currentCategory) && (
          <div className="nineties-subcategory-nav">
            <a href="#" onClick={() => handleSectionChange('bestsellers')}>BESTSELLING</a>
            <a href="#" onClick={() => handleSectionChange('new')}>NEW RELEASES</a>
            <a href="#" onClick={() => handleSectionChange('top100')}>TOP 100 SELLERS</a>
            {currentCategory === 'music' && (
              <>
                <a href="#" onClick={() => handleSectionChange('styles')}>STYLES</a>
                <a href="#" onClick={() => handleSectionChange('classical')}>CLASSICAL</a>
                <a href="#" onClick={() => handleSectionChange('used')}>USED CDs</a>
                <a href="#" onClick={() => handleSectionChange('downloads')}>DOWNLOADS</a>
              </>
            )}
            {currentCategory === 'books' && (
              <>
                <a href="#" onClick={() => handleSectionChange('fiction')}>FICTION</a>
                <a href="#" onClick={() => handleSectionChange('nonfiction')}>NON-FICTION</a>
                <a href="#" onClick={() => handleSectionChange('ebooks')}>E-BOOKS</a>
              </>
            )}
            {currentCategory === 'video' && (
              <>
                <a href="#" onClick={() => handleSectionChange('movies')}>MOVIES</a>
                <a href="#" onClick={() => handleSectionChange('tv')}>TV SHOWS</a>
                <a href="#" onClick={() => handleSectionChange('dvd')}>DVD</a>
              </>
            )}
            {currentCategory === 'electronics' && (
              <>
                <a href="#" onClick={() => handleSectionChange('computers')}>COMPUTERS</a>
                <a href="#" onClick={() => handleSectionChange('audio')}>AUDIO</a>
                <a href="#" onClick={() => handleSectionChange('cameras')}>CAMERAS</a>
              </>
            )}
          </div>
        )}

        {/* Date and Category title */}
        {['music', 'books', 'video', 'electronics'].includes(currentCategory) && (
          <div className="nineties-category-header">
            <div className="nineties-date">{date}</div>
            <div className="nineties-title-container">
              <h2 className="nineties-category-title">Amazon.com {currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1)}</h2>
            </div>
            <div className="nineties-sign-in">
              <span>Hello! Already a customer? </span>
              <a href="#">Sign in</a>
            </div>
            <div className="nineties-special-offer">
              <a href="#">Vote in our Millennium Poll</a>
              <span> - you could win 300 CDs, books, and videos!</span>
            </div>
          </div>
        )}

        {/* Special Announcement Marquee */}
        <div className="nineties-marquee">
          <div className="nineties-marquee-content">
            {getMarqueeText()}
          </div>
        </div>
      </header>

      <div className="nineties-main-content">
        {/* Left Sidebar */}
        <div className="nineties-sidebar">
          {/* Search Box */}
          <div className="nineties-search-box">
            <div className="nineties-search-title">SEARCH</div>
            <form onSubmit={handleSearch}>
              <select className="nineties-search-select">
                <option>All {currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1)}</option>
                <option>Bestsellers</option>
                <option>New Releases</option>
              </select>
              <input 
                type="text" 
                className="nineties-search-input" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button type="submit" className="nineties-search-button">GO</button>
            </form>
          </div>

          {/* Browse Categories */}
          <div className="nineties-browse-box">
            <div className="nineties-browse-title">BROWSE</div>
            <ul className="nineties-browse-list">
              {getCurrentCategories().map((category) => (
                <li key={category.id}>
                  <a 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      handleSectionChange(category.id);
                    }}
                  >
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="nineties-content">
          <div className="nineties-content-container">
            {/* Main Featured Content */}
            <div className="nineties-main-featured">
              {/* Primary Featured Item */}
              <div className="nineties-featured-section">
                <div className="nineties-featured-category">
                  {currentSection !== 'homepage' ? 
                    getCurrentCategories().find(cat => cat.id === currentSection)?.name || 'Featured' 
                    : (currentCategory === 'music' ? 'International' : 'Featured')}
                </div>
                <h3 className="nineties-featured-title">
                  {getCurrentFeatured().main.title}
                </h3>
                <div className="nineties-featured-content">
                  <div className="nineties-featured-image-container">
                    <img 
                      src={getCurrentFeatured().main.imageUrl} 
                      alt={getCurrentFeatured().main.title} 
                      className="nineties-featured-image" 
                    />
                    <div className="nineties-buy-button-container">
                      <a href="#" className="nineties-buy-button">BUY IT</a>
                    </div>
                  </div>
                  <div className="nineties-featured-description">
                    {renderCreatorField(getCurrentFeatured().main)}
                    {getCurrentFeatured().main.description}
                    <a href="#" className="nineties-read-more"> Read more</a>
                  </div>
                </div>
              </div>

              {/* Secondary Featured Item */}
              <div className="nineties-featured-section">
                <h3 className="nineties-featured-category">{
                  currentCategory === 'music' ? 'Free Digital Downloads' :
                  currentCategory === 'books' ? 'New York Times Bestsellers' :
                  currentCategory === 'video' ? 'New Releases' :
                  'Featured Products'
                }</h3>
                <h3 className="nineties-featured-title">
                  {getCurrentFeatured().secondary.title}
                </h3>
                <div className="nineties-featured-content">
                  <div className="nineties-featured-image-container">
                    <img 
                      src={getCurrentFeatured().secondary.imageUrl} 
                      alt={getCurrentFeatured().secondary.title} 
                      className="nineties-featured-image" 
                    />
                    <div className="nineties-buy-button-container">
                      <a href="#" className="nineties-buy-button">
                        {currentCategory === 'music' ? 'LISTEN' : 'VIEW'}
                      </a>
                    </div>
                  </div>
                  <div className="nineties-featured-description">
                    {renderCreatorField(getCurrentFeatured().secondary)}
                    {getCurrentFeatured().secondary.description}
                    <ul className="nineties-list">
                      <li><a href="#">See all bestsellers</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar - Special Offers and Top Sellers */}
            <div className="nineties-right-sidebar">
              {/* Special Offers */}
              <div className="nineties-special-box">
                <h3 className="nineties-special-title">
                  {currentCategory === 'music' ? 'Free Song Downloads' :
                   currentCategory === 'books' ? 'Book Deals' :
                   currentCategory === 'video' ? 'Special Offers' :
                   'Electronics Deals'}
                </h3>
                <p className="nineties-special-text">
                  {currentCategory === 'music' && 'Download more than 100 songs from top artists.'}
                  {currentCategory === 'books' && 'Save up to 40% on bestselling titles.'}
                  {currentCategory === 'video' && 'Buy 2 videos, get 1 free on selected titles.'}
                  {currentCategory === 'electronics' && 'Free shipping on orders over $100.'}
                </p>
                <div className="nineties-special-link-container">
                  <a href="#" className="nineties-special-link">
                    {currentCategory === 'music' ? '🎵 CLICK HERE' : '🔥 HOT DEALS'}
                  </a>
                </div>
              </div>

              {/* Top Sellers */}
              <div className="nineties-topsellers-box">
                <h3 className="nineties-topsellers-title">
                  {currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1)} Top Sellers
                </h3>
                <ol className="nineties-topsellers-list">
                  {getCurrentTopSellers().map((item) => (
                    <li key={item.id}>
                      <a href="#">{item.title}</a>
                      <div className="nineties-topsellers-creator">
                        {currentCategory === 'music' && item.artist}
                        {currentCategory === 'books' && item.author}
                        {currentCategory === 'video' && item.director}
                        {currentCategory === 'electronics' && item.brand}
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="nineties-footer">
        <div className="nineties-footer-links">
          <a href="#">Help</a> | 
          <a href="#">Books</a> | 
          <a href="#">Music</a> | 
          <a href="#">DVD</a> | 
          <a href="#">Electronics</a> | 
          <a href="#">Toys</a> | 
          <a href="#">Auctions</a> | 
          <a href="#">e-Cards</a> | 
          <a href="#">Shop the Holidays</a>
        </div>
        <div className="nineties-copyright">
          Copyright © 1999 Amazon.com, Inc. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Nineties;