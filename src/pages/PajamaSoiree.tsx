import { useEffect, useState, useMemo } from "react";
import { Heart, Sparkles, Instagram, MapPin, X, Share2, Link, Check } from "lucide-react";

const sparklePositions = Array.from({ length: 30 }, () => ({
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  animationDelay: `${Math.random() * 3}s`,
  animationDuration: `${2 + Math.random() * 2}s`,
  size: Math.random() * 20 + 10,
}));

const PajamaSoiree = () => {
  const [showMap, setShowMap] = useState(false);
  const [showLoveLetter, setShowLoveLetter] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);
  const pageUrl = "https://attendontime.com/pajama-soiree";
  const imageUrl = "https://attendontime.com/payment-pajama-soiree.png";
  const eventTitle = "Elevated Love Letter to a Young Sister - Pajama Soiree";
  const eventDescription = "Join us for an inspiring Pajama Soiree on March 28, 2026, in Frisco, TX. Interactive sessions on women's health, financial literacy, estate planning, and empowerment. Enjoy live music, curated cuisine, and meaningful conversations. Rock your RED or PINK pajamas!";

  const structuredData = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Event",
    "name": eventTitle,
    "description": eventDescription,
    "startDate": "2026-03-28T17:30:00-06:00",
    "endDate": "2026-03-28T22:00:00-06:00",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": "Founders Hall - Canals at Grand Park",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "7878 Washburne Drive",
        "addressLocality": "Frisco",
        "addressRegion": "TX",
        "postalCode": "75034",
        "addressCountry": "US"
      }
    },
    "image": [imageUrl],
    "organizer": {
      "@type": "Organization",
      "name": "Mujoy Events",
      "url": "https://www.instagram.com/lovelettertoayoungsister/"
    },
    "offers": {
      "@type": "Offer",
      "url": pageUrl,
      "price": "100",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "validFrom": "2026-01-01"
    },
    "performer": [
      {
        "@type": "Person",
        "name": "Dr. Naima Bridges",
        "jobTitle": "MD, FACOG"
      },
      {
        "@type": "Person",
        "name": "Princess Mpati",
        "jobTitle": "Regional Director, CVS Health"
      },
      {
        "@type": "Person",
        "name": "Dr. Dami Babaniji",
        "jobTitle": "DO, VIP Lippy"
      },
      {
        "@type": "Person",
        "name": "Dorscharica Jefferson",
        "jobTitle": "Wisdom Matters"
      }
    ]
  }), [eventTitle, eventDescription, pageUrl, imageUrl]);

  useEffect(() => {
    // Set page title
    document.title = eventTitle;

    // Helper function to set or update meta tags
    const setMetaTag = (property: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${property}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, property);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Set meta tags
    setMetaTag('title', eventTitle);
    setMetaTag('description', eventDescription);

    // Open Graph tags
    setMetaTag('og:type', 'website', true);
    setMetaTag('og:url', pageUrl, true);
    setMetaTag('og:title', eventTitle, true);
    setMetaTag('og:description', eventDescription, true);
    setMetaTag('og:image', imageUrl, true);

    // Twitter Card tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:url', pageUrl);
    setMetaTag('twitter:title', eventTitle);
    setMetaTag('twitter:description', eventDescription);
    setMetaTag('twitter:image', imageUrl);

    // Add structured data
    const scriptId = 'pajama-soiree-event';
    let structuredDataScript = document.querySelector(`script[type="application/ld+json"][data-id="${scriptId}"]`);
    if (!structuredDataScript) {
      structuredDataScript = document.createElement('script');
      structuredDataScript.setAttribute('type', 'application/ld+json');
      structuredDataScript.setAttribute('data-id', scriptId);
      document.head.appendChild(structuredDataScript);
    }
    structuredDataScript.textContent = JSON.stringify(structuredData);

    // Load Stripe script
    const stripeScript = document.createElement("script");
    stripeScript.src = "https://js.stripe.com/v3/buy-button.js";
    stripeScript.async = true;
    document.head.appendChild(stripeScript);

    // Cleanup function
    return () => {
      document.head.removeChild(stripeScript);
    };
  }, [eventTitle, eventDescription, pageUrl, imageUrl, structuredData]);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-pink-200 via-pink-300 to-pink-400">
      {/* Animated sparkles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {sparklePositions.map((pos, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: pos.left,
              top: pos.top,
              animationDelay: pos.animationDelay,
              animationDuration: pos.animationDuration,
            }}
          >
            <Sparkles
              className="text-white/40"
              size={pos.size}
            />
          </div>
        ))}
      </div>

      {/* Decorative pink circles */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-pink-300/30 rounded-full blur-3xl" />
      <div className="absolute top-40 right-20 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-pink-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-1/3 w-72 h-72 bg-pink-300/25 rounded-full blur-3xl" />

      {/* Love Letter Overlay */}
      {showLoveLetter && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setShowLoveLetter(false)}
        >
          <div
            className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setShowLoveLetter(false)}
              className="absolute top-3 right-3 z-10 bg-white/80 hover:bg-white rounded-full p-1.5 shadow-md transition-colors"
              aria-label="Close love letter"
            >
              <X size={22} className="text-red-800" />
            </button>

            {/* Paper roll background with content */}
            <div
              className="relative bg-cover bg-center bg-no-repeat p-8 md:p-12"
              style={{ backgroundImage: "url('/old-paper-roll-bg.jpg')" }}
            >
              <div className="text-red-900 font-serif space-y-4 text-center">
                <p className="text-2xl">💌</p>
                <h3 className="text-xl md:text-2xl font-bold leading-tight">
                  LOVE LETTER TO A YOUNG SISTER
                </h3>
                <p className="text-lg md:text-xl font-semibold italic">
                  The Pajama Soirée You Don't Want to Miss
                </p>

                <div className="space-y-3 text-base md:text-lg text-left leading-relaxed">
                  <p>
                    Sis… this is not just a pajama party.<br />
                    This is a room full of powerful women.<br />
                    This is elevation.<br />
                    This is growth.<br />
                    This is sisterhood done intentionally.
                  </p>

                  <p className="italic font-semibold text-center">
                    Put on your RED or PINK pajamas — come bold, come soft, come radiant — and step into an atmosphere curated for impact.
                  </p>

                  <ul className="space-y-1.5">
                    <li>❤️ Women's Health Conversations That Matter.</li>
                    <li>❤️ Corporate Success & Career Elevation.</li>
                    <li>❤️ Wellness & Personal Growth.</li>
                    <li>❤️ Financial & Legacy Awareness.</li>
                    <li>❤️ Empowerment Through Real, Lived Wisdom.</li>
                    <li>❤️ Deliciously Curated Cuisine.</li>
                    <li>❤️ Meaningful, Unfiltered Conversations.</li>
                  </ul>

                  <p>
                    – We are talking truth.<br />
                    – We are talking strategy.<br />
                    – We are talking healing.<br />
                    – We are talking next-level womanhood.
                  </p>

                  <p>
                    Expect connection.<br />
                    Expect clarity.<br />
                    Expect to leave different.
                  </p>

                  <p>
                    This is where faith meets excellence.<br />
                    Where softness meets strength.<br />
                    Where young sisters are reminded who they are.
                  </p>

                  <p className="italic font-semibold text-center">
                    Spots are limited. The room will be intentional.
                  </p>

                  <p className="text-center">
                    🎟 Purchase your ticket by clicking the link below.
                  </p>

                  <p>
                    Secure your seat.<br />
                    Bring your journal.<br />
                    Wear the red.<br />
                    Wear the pink.<br />
                    Come ready.
                  </p>

                  <p className="font-semibold text-center">
                    Because no sister rises alone. 💌
                  </p>
                </div>

                {/* Purchase CTA */}
                <button
                  onClick={() => {
                    setShowLoveLetter(false);
                    document.getElementById("purchase-ticket")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="mt-4 inline-flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white font-bold text-lg px-8 py-3 rounded-full shadow-lg transition-colors"
                >
                  <Heart className="fill-white" size={20} />
                  Purchase Your Ticket
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-12 flex items-center justify-center min-h-screen">
        <div className="max-w-3xl w-full text-center animate-fade-in">
          {/* Love letter envelope illustration */}
          <div className="mb-8 flex justify-center items-center gap-6">
            {/* Envelope Image with Price Overlay - Clickable */}
            <button
              onClick={() => setShowLoveLetter(true)}
              className="relative cursor-pointer group animate-envelope-glow"
              aria-label="Open love letter"
            >
              <img
                src="/heart-envelope.png"
                alt="Love letter envelope with heart"
                className="w-72 md:w-80 h-auto drop-shadow-2xl transition-transform duration-300 group-hover:scale-105 animate-envelope-bounce"
              />
              {/* Price overlay on envelope */}
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2">
                <p className="text-white text-2xl md:text-3xl font-bold drop-shadow-lg">
                  $100/person
                </p>
              </div>
              {/* Click hint - hover only on desktop */}
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-sm text-red-700 font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:inline">
                Click to open letter
              </span>
              {/* Tap hint - always visible on mobile */}
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-sm text-red-700 font-medium whitespace-nowrap md:hidden">
                Tap to open letter
              </span>
            </button>
            
            {/* Floating hearts */}
            <div className="flex flex-col gap-2 animate-float">
              <Heart className="text-red-500 fill-red-500" size={40} />
              <Heart className="text-red-400 fill-red-400" size={28} />
              <Heart className="text-red-500 fill-red-500" size={32} />
            </div>
          </div>

          {/* Event title */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-serif italic text-red-600 mb-2">
              Elevated
            </h1>
            <h2 className="text-4xl md:text-5xl font-serif italic text-red-700 mb-4">
              Love Letter <span className="text-3xl md:text-4xl">to a</span> Young Sister
            </h2>
            <h3 className="text-5xl md:text-6xl font-bold text-red-700 tracking-wide mb-4">
              PAJAMA SOIREE
            </h3>
            <div className="w-48 h-1 bg-gradient-to-r from-transparent via-red-400 to-transparent mx-auto mb-4" />
            <p className="text-3xl md:text-4xl font-bold text-red-700">
              Saturday, March 28, 2026
            </p>

            {/* Speaker Profiles */}
            <div className="grid grid-cols-2 md:grid-cols-4 justify-items-center gap-6 md:gap-8 mt-8">
              {/* Profile 1 - Dr. Naima Bridges */}
              <div className="flex flex-col items-center">
                <img
                  src="/profile-naima-bridges.jpeg"
                  alt="Dr. Naima Bridges"
                  className="w-36 h-44 md:w-44 md:h-56 rounded-xl object-cover border-4 border-red-400 shadow-lg"
                />
                <p className="text-sm md:text-base font-semibold text-red-700 mt-2">Dr. Naima Bridges</p>
                <p className="text-xs md:text-sm text-red-600">MD, FACOG</p>
              </div>

              {/* Profile 2 - Princess Mpati */}
              <div className="flex flex-col items-center">
                <img
                  src="/profile-princess-mpati.jpeg"
                  alt="Princess Mpati"
                  className="w-36 h-44 md:w-46 md:h-56 rounded-xl object-cover border-4 border-red-400 shadow-lg"
                />
                <p className="text-sm md:text-base font-semibold text-red-700 mt-2">Princess Mpati</p>
                <p className="text-xs md:text-sm text-red-600">Regional Director, CVS Health</p>
              </div>

              {/* Profile 3 - Dami Babaniji */}
              <div className="flex flex-col items-center">
                <img
                  src="/profile-dami-babaniji.jpeg"
                  alt="Dami Babaniji"
                  className="w-36 h-44 md:w-44 md:h-56 rounded-xl object-cover border-4 border-red-400 shadow-lg"
                />
                <p className="text-sm md:text-base font-semibold text-red-700 mt-2">Dr. Dami Babaniji, DO</p>
                <p className="text-xs md:text-sm text-red-600">VIP Lippy</p>
              </div>

              {/* Profile 4 - Dorscharica Jefferson */}
              <div className="flex flex-col items-center">
                <img
                  src="/profile-dorscharica-jefferson.jpeg"
                  alt="Dorscharica Jefferson"
                  className="w-36 h-44 md:w-44 md:h-56 rounded-xl object-cover border-4 border-red-400 shadow-lg"
                />
                <p className="text-sm md:text-base font-semibold text-red-700 mt-2">Dorscharica Jefferson</p>
                <p className="text-xs md:text-sm text-red-600">Wisdom Matters</p>
              </div>
            </div>
          </div>

          {/* Event details */}
          <div className="mb-8 space-y-2 text-red-800">
            <p className="text-xl md:text-2xl font-semibold">
              Founders Hall - Canals at Grand Park
            </p>
            <p className="text-lg md:text-xl">
              7878 Washburne Drive
            </p>
            <p className="text-lg md:text-xl">
              Frisco, TX 75034
            </p>
            <button
              onClick={() => setShowMap(!showMap)}
              className="inline-flex items-center gap-2 mt-2 text-lg md:text-xl font-semibold text-red-600 hover:text-red-800 transition-colors underline underline-offset-4"
            >
              <MapPin size={20} />
              {showMap ? "Hide Map" : "Get Directions"}
            </button>
            {showMap && (
              <div className="relative mt-4 rounded-xl overflow-hidden shadow-lg border-4 border-red-300">
                <button
                  onClick={() => setShowMap(false)}
                  className="absolute top-2 right-2 z-10 bg-white/90 hover:bg-white rounded-full p-1 shadow-md transition-colors"
                  aria-label="Close map"
                >
                  <X size={20} className="text-red-700" />
                </button>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3343.6!2d-96.824!3d33.131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c3c8b1f3fffff%3A0x0!2s7878+Washburne+Drive%2C+Frisco%2C+TX+75034!5e0!3m2!1sen!2sus!4v1700000000000"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Founders Hall - Canals at Grand Park"
                />
              </div>
            )}
            <p className="text-xl md:text-2xl font-semibold mt-4">
              Time: 5:30pm - 10pm
            </p>
            <p className="text-xl md:text-2xl font-semibold">
              Rock RED or PINK Pajamas
            </p>
          </div>

          {/* Interactive sessions */}
          <div className="mb-8">
            <h4 className="text-2xl md:text-3xl font-bold text-red-800 mb-4">
              Interactive Breakout Sessions On:
            </h4>
            <ul className="space-y-2 text-lg md:text-xl text-red-700">
              <li className="flex items-center justify-center gap-2">
                <span className="text-red-500">•</span>
                <span className="font-medium">Women's Health & Wellness</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="text-red-500">•</span>
                <span className="font-medium">Financial Literacy</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="text-red-500">•</span>
                <span className="font-medium">Estate & Legacy Planning</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="text-red-500">•</span>
                <span className="font-medium">Corporate Success</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="text-red-500">•</span>
                <span className="font-medium">Empowerment & Personal Growth</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="text-red-500">•</span>
                <span className="font-medium">Inspiring Life Stories</span>
              </li>
            </ul>
          </div>

          {/* Enjoy section */}
          <div className="mb-8">
            <h4 className="text-2xl md:text-3xl font-bold text-red-800 mb-4">
              Enjoy:
            </h4>
            <ul className="space-y-2 text-lg md:text-xl text-red-700">
              <li className="flex items-center justify-center gap-2">
                <span className="text-red-500">•</span>
                <span className="font-medium">Live Saxophonist</span>
              </li>
              <li className="font-medium">
                Deliciously Curated Cuisine & Meaningful Conversation
              </li>
            </ul>
          </div>

          {/* Stripe Pay Button */}
          <div id="purchase-ticket" className="mb-8">
            {/* @ts-expect-error Stripe Buy Button is a web component */}
            <stripe-buy-button
              buy-button-id="buy_btn_1T1FQDQHMV9e2XFOkr7TGno6"
              publishable-key="pk_live_51StwwqQHMV9e2XFOoexZuEQ8c4DoGN2Ys0gLEyoQo0dqrSYXtQpDspJckoZot1XoaFAZzuz3gow9IUqsc9dVX4Ew00SKHhUOkL"
            />
          </div>

          {/* Share Section */}
          <div className="mb-8">
            <p className="text-lg font-semibold text-red-700 mb-3 flex items-center justify-center gap-2">
              <Share2 size={20} />
              Share This Event
            </p>
            <div className="flex items-center justify-center gap-4">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-red-600 hover:bg-red-700 text-white transition-colors shadow-md"
                aria-label="Share on Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(eventTitle)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-red-600 hover:bg-red-700 text-white transition-colors shadow-md"
                aria-label="Share on X"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(eventTitle + " " + pageUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-red-600 hover:bg-red-700 text-white transition-colors shadow-md"
                aria-label="Share on WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(pageUrl);
                  setLinkCopied(true);
                  setTimeout(() => setLinkCopied(false), 2000);
                }}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-red-600 hover:bg-red-700 text-white transition-colors shadow-md"
                aria-label="Copy link"
              >
                {linkCopied ? <Check size={20} /> : <Link size={20} />}
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-12">
            <a 
              href="https://www.instagram.com/lovelettertoayoungsister/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-3xl md:text-4xl font-serif italic text-red-700 hover:text-red-800 transition-colors group"
            >
              <span>Curated by Mujoy Events</span>
              <Instagram className="w-8 h-8 md:w-10 md:h-10 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PajamaSoiree;
