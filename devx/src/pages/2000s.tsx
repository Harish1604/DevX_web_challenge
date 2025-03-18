import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Era2000s = () => {
  const [visitorCount, setVisitorCount] = useState(Math.floor(Math.random() * 10000) + 1000);
  const [showPopup, setShowPopup] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [guestbookEntries, setGuestbookEntries] = useState([
    { name: 'XxCoolDude99xX', message: 'Awesome site! Love the design!', date: '04/13/2005' },
    { name: 'WebMaster2000', message: 'Thanks for visiting my website!', date: '04/10/2005' }
  ]);
  const [newEntry, setNewEntry] = useState({ name: '', email: '', message: '' });
  
  useEffect(() => {
    // Show welcome popup after a short delay
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1500);
    
    // Update clock every second
    const clockTimer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => {
      clearTimeout(timer);
      clearInterval(clockTimer);
    };
  }, []);

  const handleGuestbookSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newEntry.name && newEntry.message) {
      const entry = {
        name: newEntry.name,
        message: newEntry.message,
        date: new Date().toLocaleDateString()
      };
      setGuestbookEntries([entry, ...guestbookEntries]);
      setNewEntry({ name: '', email: '', message: '' });
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="min-h-screen bg-[#e6e6e6] font-sans">
      {/* Welcome Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50" onClick={closePopup}></div>
          <div className="w-96 bg-white border-4 border-y2k-blue rounded-md shadow-lg z-10 overflow-hidden">
            <div className="bg-gradient-aqua text-white font-bold px-4 py-2 flex justify-between items-center">
              <span>Welcome to My Website!</span>
              <button onClick={closePopup} className="text-white hover:text-red-300">X</button>
            </div>
            <div className="p-6 text-center">
              <p className="mb-4">Thank you for visiting my personal website!</p>
              <p className="mb-4">Best viewed in Internet Explorer 6.0 or Netscape Navigator.</p>
              <img 
                src="https://placehold.co/200x120/66CCFF/ffffff?text=Welcome!" 
                alt="Welcome" 
                className="mx-auto mb-4 border border-gray-400"
              />
              <button 
                onClick={closePopup} 
                className="y2k-button-blue px-8 py-2"
              >
                Enter Site
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <header className="bg-gradient-metallic border-b-2 border-y2k-gray shadow-md p-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-y2k-blue rounded-full w-10 h-10 animate-rotate-slow flex items-center justify-center shadow-y2k-blue-glow">
              <span className="text-white font-bold">Y2K</span>
            </div>
            <h1 className="text-3xl font-bold text-y2k-blue tracking-tight">My 2000s Website</h1>
          </div>
          <div className="text-right">
            <div className="hit-counter">
              Visitors: {visitorCount.toLocaleString()}
            </div>
            <div className="text-xs text-y2k-darkgray mt-1">
              Last Updated: {currentTime.toLocaleDateString()} {currentTime.toLocaleTimeString()}
            </div>
          </div>
        </div>
        
        <nav className="max-w-5xl mx-auto mt-4 flex flex-wrap gap-2">
          <Link to="/" className="y2k-nav-item">Home</Link>
          <a href="#about" className="y2k-nav-item">About Me</a>
          <a href="#gallery" className="y2k-nav-item">Photo Gallery</a>
          <a href="#guestbook" className="y2k-nav-item">Guestbook</a>
          <a href="#links" className="y2k-nav-item">Cool Links</a>
        </nav>
      </header>
      
      <div className="marquee-container bg-y2k-blue text-white font-bold py-1">
        <div className="marquee-content">
          ★ Welcome to my 2000s era website! ★ Sign my guestbook! ★ Download free wallpapers! ★ Join my web ring! ★ Best viewed in 1024x768 resolution! ★ 
        </div>
      </div>
      
      <main className="max-w-5xl mx-auto p-4 flex flex-col md:flex-row gap-6 mt-6">
        <aside className="w-full md:w-64 flex-shrink-0 space-y-4">
          <div className="y2k-container">
            <h3 className="y2k-header mb-2 text-lg">About Me</h3>
            <div className="flex flex-col items-center mb-3">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-y2k-blue shadow-lg mb-2">
                <img 
                  src="https://placehold.co/128/blue/white?text=Y2K" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-bold text-y2k-blue">WebMaster2000</p>
            </div>
            <p className="text-sm mb-2">Hey there! I'm a web designer who loves creating cool websites with Flash and JavaScript.</p>
            <div className="text-center mt-2">
              <p className="text-xs italic">Online since April 2005</p>
            </div>
          </div>
          
          <div className="y2k-container">
            <h3 className="y2k-header mb-2 text-lg">Site Menu</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-y2k-blue hover:underline font-medium flex items-center">
                <span className="inline-block w-4 h-4 bg-gradient-aqua rounded-full mr-2"></span>
                My Blog
              </a></li>
              <li><a href="#" className="text-y2k-blue hover:underline font-medium flex items-center">
                <span className="inline-block w-4 h-4 bg-gradient-aqua rounded-full mr-2"></span>
                Photo Gallery
              </a></li>
              <li><a href="#" className="text-y2k-blue hover:underline font-medium flex items-center">
                <span className="inline-block w-4 h-4 bg-gradient-aqua rounded-full mr-2"></span>
                Downloads
              </a></li>
              <li><a href="#" className="text-y2k-blue hover:underline font-medium flex items-center">
                <span className="inline-block w-4 h-4 bg-gradient-aqua rounded-full mr-2"></span>
                Favorite Links
              </a></li>
            </ul>
          </div>
          
          <div className="y2k-container">
            <h3 className="y2k-header mb-2 text-lg">Newsletter</h3>
            <p className="text-sm mb-2">Join my mailing list for updates!</p>
            <input type="email" placeholder="Your Email" className="y2k-input w-full mb-2" />
            <button className="y2k-button-blue w-full">Subscribe</button>
          </div>
        </aside>
        
        <div className="flex-grow space-y-6">
          <div className="y2k-container">
            <h2 className="text-2xl y2k-header mb-4">Welcome to My Website!</h2>
            <div className="flex flex-col gap-4">
              <p>Hello and welcome to my personal website! I've been learning web design since 2003 and wanted to share my creations with the world.</p>
              <p>This site demonstrates the classic early 2000s web design aesthetic with glossy buttons, beveled edges, and that signature blue color scheme we all loved!</p>
              
              <div className="bg-white border-2 border-y2k-gray p-3 rounded-md shadow-y2k-inset my-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-y2k-orange rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs">!</span>
                  </div>
                  <h4 className="font-bold text-y2k-blue">Site News</h4>
                </div>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>04/20/2005 - Added new wallpapers to the download section!</li>
                  <li>04/15/2005 - Fixed the guestbook script. Thanks CoolDude98 for the help!</li>
                  <li>04/10/2005 - Site launched! Please sign my guestbook!</li>
                </ul>
              </div>
              
              <div className="flex gap-2 mt-4 justify-center">
                <button className="y2k-button-blue">Download Wallpapers!</button>
                <button className="y2k-button">View My Photos</button>
              </div>
            </div>
          </div>
          
          <div id="gallery" className="y2k-container">
            <h2 className="text-2xl y2k-header mb-4">Photo Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="border-2 border-y2k-gray bg-white p-2 rounded shadow-md">
                  <img 
                    src={`https://placehold.co/150x100/66CCFF/ffffff?text=Photo${item}`} 
                    alt={`Gallery Photo ${item}`} 
                    className="w-full h-auto"
                  />
                  <p className="text-center text-sm mt-1">Photo {item}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-4">
              <button className="y2k-button">View More Photos</button>
            </div>
          </div>
          
          <div id="guestbook" className="y2k-container">
            <h2 className="text-2xl y2k-header mb-4">Guestbook</h2>
            <div className="bg-white border-2 border-y2k-gray p-3 rounded-md shadow-y2k-inset">
              <form onSubmit={handleGuestbookSubmit} className="mb-4 pb-4 border-b border-y2k-gray">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                  <div>
                    <label className="block text-sm font-bold mb-1">Name:</label>
                    <input 
                      type="text" 
                      className="y2k-input w-full" 
                      value={newEntry.name}
                      onChange={(e) => setNewEntry({...newEntry, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-1">Email (not published):</label>
                    <input 
                      type="email" 
                      className="y2k-input w-full" 
                      value={newEntry.email}
                      onChange={(e) => setNewEntry({...newEntry, email: e.target.value})}
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="block text-sm font-bold mb-1">Message:</label>
                  <textarea 
                    className="y2k-input w-full min-h-[80px]" 
                    value={newEntry.message}
                    onChange={(e) => setNewEntry({...newEntry, message: e.target.value})}
                    required
                  />
                </div>
                <button type="submit" className="y2k-button-blue">Sign Guestbook</button>
              </form>
              
              <div className="space-y-3">
                {guestbookEntries.map((entry, index) => (
                  <div key={index} className="p-3 bg-[#f9f9f9] border border-y2k-gray rounded">
                    <div className="flex justify-between mb-1">
                      <span className="font-bold text-y2k-blue">{entry.name}</span>
                      <span className="text-xs text-y2k-darkgray">{entry.date}</span>
                    </div>
                    <p className="text-sm">{entry.message}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div id="links" className="y2k-container">
            <h2 className="text-2xl y2k-header mb-4">Cool Links</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['Web Design Hub', 'Free Backgrounds', 'JavaScript Tutorials', 'CSS Gallery'].map((link, index) => (
                <a href="#" key={index} className="y2k-card-glossy flex flex-col items-center p-4 hover:shadow-y2k-blue-glow transition-shadow">
                  <div className="w-12 h-12 bg-gradient-aqua rounded-full flex items-center justify-center mb-2 shadow-sm">
                    <span className="text-white font-bold text-xs">LINK</span>
                  </div>
                  <h4 className="font-bold text-y2k-blue">{link}</h4>
                  <p className="text-xs text-center mt-1">Click to visit</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-gradient-metallic border-t-2 border-y2k-gray mt-6 p-4 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center gap-4 mb-2">
            <a href="#" className="text-y2k-blue hover:underline">Privacy Policy</a>
            <a href="#" className="text-y2k-blue hover:underline">Contact Me</a>
            <Link to="/" className="text-y2k-blue hover:underline">Back to Main Site</Link>
          </div>
          <p className="text-sm text-y2k-darkgray">© 2005 WebMaster2000. All rights reserved.</p>
          <p className="text-xs mt-1 text-y2k-darkgray">
            Best viewed in 1024x768 resolution. Internet Explorer 6.0 or Netscape Navigator recommended.
          </p>
          <div className="flex justify-center gap-2 mt-2">
            <a href="#" className="inline-block">
              <img src="https://placehold.co/88x31/png?text=Valid+HTML" alt="Valid HTML" className="border" />
            </a>
            <a href="#" className="inline-block">
              <img src="https://placehold.co/88x31/png?text=Valid+CSS" alt="Valid CSS" className="border" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Era2000s;