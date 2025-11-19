import { useScrollReveal } from "../hooks/useScrollReveal";

export default function AboutSection() {
  const [imageRef, imageRevealed] = useScrollReveal({ threshold: 0.2 });
  const [contentRef, contentRevealed] = useScrollReveal({ threshold: 0.2 });

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Left side - Profile picture */}
        <div ref={imageRef} className={`flex justify-center lg:justify-start order-last lg:order-first scroll-reveal-left ${imageRevealed ? 'revealed' : ''}`}>
          <div className="relative">
            {/* Profile picture container with fallback */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-lg overflow-hidden border-2 border-purple-500/30 hover:border-purple-500/60 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-blue-500/10"></div>
              <div className="w-full h-full relative">
                <img
                  src="/profile.jpg"
                  alt="Shadchika Shanmugarasa"
                  className="w-full h-full object-cover rounded-lg border-2 border-black/60 shadow-lg animate-profile-pop"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    const fallback = e.target.nextElementSibling;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                {/* Fallback placeholder */}
                <div
                  className="w-full h-full bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 flex items-center justify-center"
                  style={{ display: 'none' }}
                >
                  <div className="w-[90%] h-[90%] rounded-lg bg-black/80 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-20 h-20 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5.121 17.804A9 9 0 1112 21a9 9 0 01-6.879-3.196z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - About content */}
        <div ref={contentRef} className={`text-white text-center lg:text-left order-first lg:order-last scroll-reveal-right ${contentRevealed ? 'revealed' : ''}`}>
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-pink-500 animate-gradient">Hey there!</span> 👋
            </h2>
            <p className="text-gray-300 text-base sm:text-lg mb-6 leading-relaxed max-w-lg mx-auto lg:mx-0">
              I'm <span className="text-purple-400 font-semibold">Shadchika</span>, a full stack data engineer with a deep passion for software engineering and data-driven innovation. I love building seamless digital experiences that not only look great but also work efficiently behind the scenes.
            </p>
            <p className="text-gray-300 text-base sm:text-lg mb-6 leading-relaxed max-w-lg mx-auto lg:mx-0">
With a strong foundation in both front-end and back-end technologies, I specialize in developing robust data pipelines, designing scalable architectures, and crafting interactive web applications. Whether it's automating data workflows, visualizing insights, or optimizing system performance, I bring creativity and problem-solving to every project I take on.            </p>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
              If you're seeking a dedicated and passionate developer, I'm eager to collaborate with you. Let's bring your ideas to life!
            </p>
          </div>
        </div>
      </div>
           </section>
  );
}          