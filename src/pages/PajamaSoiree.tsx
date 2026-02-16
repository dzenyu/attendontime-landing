import { Heart, Sparkles, Instagram } from "lucide-react";

const PajamaSoiree = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-pink-200 via-pink-300 to-pink-400">
      {/* Animated sparkles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          >
            <Sparkles
              className="text-white/40"
              size={Math.random() * 20 + 10}
            />
          </div>
        ))}
      </div>

      {/* Decorative pink circles */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-pink-300/30 rounded-full blur-3xl" />
      <div className="absolute top-40 right-20 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-pink-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-1/3 w-72 h-72 bg-pink-300/25 rounded-full blur-3xl" />

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-12 flex items-center justify-center min-h-screen">
        <div className="max-w-3xl w-full text-center animate-fade-in">
          {/* Love letter envelope illustration */}
          <div className="mb-8 flex justify-center items-center gap-6">
            {/* Envelope Image with Price Overlay */}
            <div className="relative">
              <img 
                src="/heart-envelope.png" 
                alt="Love letter envelope with heart"
                className="w-72 md:w-80 h-auto drop-shadow-2xl"
              />
              {/* Price overlay on envelope */}
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2">
                <p className="text-white text-2xl md:text-3xl font-bold drop-shadow-lg">
                  $95/person
                </p>
              </div>
            </div>
            
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
            <div className="flex items-start justify-center gap-8 mt-8">
              {/* Profile 1 - Dr. Naima Bridges */}
              <div className="flex flex-col items-center">
                <img
                  src="/profile-naima-bridges.jpeg"
                  alt="Dr. Naima Bridges"
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-red-400 shadow-lg"
                />
                <p className="text-sm md:text-base font-semibold text-red-700 mt-2">Dr. Naima Bridges</p>
                <p className="text-xs md:text-sm text-red-600">MD, FACOG</p>
              </div>

              {/* Profile 2 - Princess Mpati */}
              <div className="flex flex-col items-center">
                <img
                  src="/profile-princess-mpati.jpeg"
                  alt="Princess Mpati"
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-red-400 shadow-lg"
                />
                <p className="text-sm md:text-base font-semibold text-red-700 mt-2">Princess Mpati</p>
                <p className="text-xs md:text-sm text-red-600">Regional Director, CVS Health</p>
              </div>

              {/* Profile 3 - Dami Babanyji */}
              <div className="flex flex-col items-center">
                <img
                  src="/profile-dami-babanyji.jpeg"
                  alt="Dami Babanyji"
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-red-400 shadow-lg"
                />
                <p className="text-sm md:text-base font-semibold text-red-700 mt-2">Dr. Dami Babanyji, DO</p>
                <p className="text-xs md:text-sm text-red-600">VIP Lippy</p>
              </div>

              {/* Profile 4 - Dr. Dorscharika Jefferson */}
              <div className="flex flex-col items-center">
                <img
                  src="/profile-dorscharika-jefferson.jpeg"
                  alt="Dr. Dorscharika Jefferson"
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-red-400 shadow-lg"
                />
                <p className="text-sm md:text-base font-semibold text-red-700 mt-2">Dr. Dorscharika Jefferson</p>
                <p className="text-xs md:text-sm text-red-600">PhD, MBA</p>
              </div>
            </div>
          </div>

          {/* Event details */}
          <div className="mb-8 space-y-2 text-red-800">
            <p className="text-xl md:text-2xl font-semibold">
              Founders Hall - Canals at Grand Park
            </p>
            <p className="text-lg md:text-xl">
              7878 Washburn Drive
            </p>
            <p className="text-lg md:text-xl">
              Frisco, TX 75034
            </p>
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
