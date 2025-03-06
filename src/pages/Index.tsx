
import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Twitter, Headphones, Code, Book, Coffee, Globe, ArrowUpRight, Clock, MapPin, GraduationCap, Award } from "lucide-react";

const Index = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Format hours and minutes with leading zeros
  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');

  return (
    <div className="min-h-screen bg-[#121212] text-white p-4 md:p-8">
      <div className="bento-grid max-w-7xl mx-auto">
        {/* Welcome Card */}
        <div className="bento-card col-span-2 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex-1">
            <h2 className="text-sm text-gray-400 mb-2">welcome</h2>
            <h1 className="text-4xl font-bold mb-4 name-animation">
              Hi, I'm <span className="accent-text">Ahmad Faiz</span>
            </h1>
            <p className="text-gray-300 text-lg mb-6">
              A software developer with a passion for creating beautiful and functional web experiences
            </p>
            
            <div className="flex space-x-6 mb-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/ahmadfaiz01/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="mailto:itsahmadfaiz22@gmail.com" className="social-icon">
                <Mail className="w-6 h-6" />
              </a>
            </div>
            
            {/* Time zone information - with bold text */}
            <div className="border-t border-[rgba(46,204,113,0.2)] pt-4">
              <div className="flex items-center space-x-2 mb-2">
                <Clock className="text-[#2ecc71] w-4 h-4" />
                <p className="text-sm font-bold">
                  <span className="text-[#2ecc71]">{hours}</span>
                  <span className="text-[#2ecc71]">:</span>
                  <span className="text-[#2ecc71]">{minutes}</span>:
                  <span>{seconds}</span>
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="text-[#2ecc71] w-4 h-4" />
                <div className="flex items-center text-sm font-bold">
                  <p className="text-gray-300 mr-2">Islamabad, Pakistan</p>
                  <span className="text-base">🇵🇰</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="profile-pic-container h-full border-t border-[rgba(46,204,113,0.2)] md:border-t-0 md:border-l pt-4 md:pt-0 md:pl-4">
            <img 
              src="/lovable-uploads/2b2eda51-e81b-4990-b63e-12c3b8ea3490.png" 
              alt="Ahmad Faiz" 
              className="profile-pic w-32 h-32 md:w-48 md:h-48 rounded-xl object-cover border-2 border-[#2ecc71]"
            />
          </div>
        </div>

        {/* About Me Card with education info */}
        <div className="bento-card row-span-2 green-card">
          <h2 className="text-2xl font-bold mb-6 text-left">About me</h2>
          <p className="text-gray-300 mb-4 text-left">
            I'm Ahmad, a front-end software developer from Malaysia.
            My primary tools of choice includes:
          </p>
          <ul className="list-inside space-y-2 mb-6 text-left">
            <li className="flex items-center space-x-2">
              <span className="text-[#2ecc71] text-sm">•</span>
              <span className="text-gray-300">React</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-[#2ecc71] text-sm">•</span>
              <span className="text-gray-300">TypeScript</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-[#2ecc71] text-sm">•</span>
              <span className="text-gray-300">Node.js</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-[#2ecc71] text-sm">•</span>
              <span className="text-gray-300">Tailwind CSS</span>
            </li>
          </ul>
          
          <p className="text-gray-300 mb-6 text-left">
            Beyond coding, I'm passionate about design, illustration, and traveling. 
            I enjoy building modern web applications using React, TypeScript, and other cutting-edge technologies.
          </p>
          
          <div className="mt-6 border-t border-[rgba(46,204,113,0.2)] pt-4">
            <h3 className="text-xl font-bold mb-4 text-left">Education</h3>
            <div className="text-left mb-4 flex items-center">
              <div className="mr-3">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/en/e/e4/National_University_of_Sciences_and_Technology_logo.png" 
                  alt="NUST Logo" 
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div>
                <h4 className="text-[#2ecc71] font-medium">NUST Islamabad</h4>
                <p className="text-gray-300">BS Computer Sciences</p>
                <p className="mt-1 text-xs text-gray-400">2023 - 2027</p>
              </div>
            </div>
          </div>
        </div>

        {/* Now Card (in place of timezone card) */}
        <div className="bento-card accent-bg">
          <div className="flex items-center mb-4">
            <h2 className="text-xl font-bold">Now</h2>
            <div className="ml-2 w-2 h-2 rounded-full bg-[#2ecc71]"></div>
          </div>
          <p className="text-sm text-gray-400 mb-4">what's that?</p>
          
          <p className="text-gray-300">Currently working as freelancer</p>
          
          <div className="space-y-4 mt-6">
            <div className="flex items-center space-x-3">
              <Code className="text-[#2ecc71] w-5 h-5" />
              <span className="text-gray-300">Building a web app with React</span>
            </div>
            <div className="flex items-center space-x-3">
              <Book className="text-[#2ecc71] w-5 h-5" />
              <span className="text-gray-300">Learning cloud architecture</span>
            </div>
            <div className="flex items-center space-x-3">
              <Headphones className="text-[#2ecc71] w-5 h-5" />
              <span className="text-gray-300">Listening to tech podcasts</span>
            </div>
            <div className="flex items-center space-x-3">
              <Coffee className="text-[#2ecc71] w-5 h-5" />
              <span className="text-gray-300">Drinking too much coffee</span>
            </div>
          </div>
        </div>

        {/* Let's Connect Card with shake animation */}
        <div className="bento-card connect-card relative overflow-hidden">
          <div className="connect-pulse absolute -right-4 -top-4 w-16 h-16 bg-[rgba(46,204,113,0.2)] rounded-full animate-pulse"></div>
          
          <h2 className="text-2xl font-bold mb-4 connect-title shake-animation">Let's connect!</h2>
          
          <div className="space-y-4 mt-6">
            <p className="text-sm text-gray-400">Contact Details</p>
            <a href="mailto:itsahmadfaiz22@gmail.com" className="text-[#2ecc71] hover:underline transition-all flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              itsahmadfaiz22@gmail.com
            </a>
            <div className="flex items-center space-x-2">
              <p className="text-gray-300">Pakistan</p>
              <span className="text-xl">🇵🇰</span>
            </div>
          </div>
          
          <div className="space-y-1 mt-6">
            <p className="text-sm text-gray-400">Socials</p>
            <div className="flex space-x-6 mt-2">
              <a href="https://www.linkedin.com/in/ahmadfaiz01/" className="social-icon" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://github.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="mailto:itsahmadfaiz22@gmail.com" className="social-icon">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Work Experience Card - updated to match certification card design */}
        <div className="bento-card">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Work Experience</h2>
            <GraduationCap className="w-5 h-5 text-[#2ecc71]" />
          </div>
          
          <div className="space-y-4">
            <div className="certification-item p-3 rounded-lg bg-[rgba(46,204,113,0.05)] border border-[rgba(46,204,113,0.2)] transition-all hover:translate-y-[-2px]">
              <h3 className="text-[#2ecc71] font-medium">Freelance Developer</h3>
              <p className="text-sm text-gray-300">Web Development</p>
              <p className="text-xs text-gray-400 mt-1">2022 - Present</p>
            </div>
            
            <div className="certification-item p-3 rounded-lg bg-[rgba(46,204,113,0.05)] border border-[rgba(46,204,113,0.2)] transition-all hover:translate-y-[-2px]">
              <h3 className="text-[#2ecc71] font-medium">Tech Startup</h3>
              <p className="text-sm text-gray-300">Frontend Developer</p>
              <p className="text-xs text-gray-400 mt-1">2021 - 2022</p>
            </div>
          </div>
        </div>

        {/* Projects Card - previous design */}
        <div className="bento-card col-span-1">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Projects</h2>
            <ArrowUpRight className="w-5 h-5 text-[#2ecc71]" />
          </div>
          
          <div className="space-y-4">
            <div className="project-card">
              <h3 className="text-gray-200 font-medium">Portfolio Website</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="tech-pill">React</span>
                <span className="tech-pill">Tailwind</span>
              </div>
            </div>
            <div className="project-card">
              <h3 className="text-gray-200 font-medium">Task Manager</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="tech-pill">Node.js</span>
                <span className="tech-pill">Express</span>
              </div>
            </div>
            <div className="project-card">
              <h3 className="text-gray-200 font-medium">E-commerce App</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="tech-pill">Next.js</span>
                <span className="tech-pill">MongoDB</span>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Card */}
        <div className="bento-card">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Certifications</h2>
            <Award className="w-5 h-5 text-[#2ecc71]" />
          </div>
          
          <div className="space-y-4">
            <div className="certification-item p-3 rounded-lg bg-[rgba(46,204,113,0.05)] border border-[rgba(46,204,113,0.2)] transition-all hover:translate-y-[-2px]">
              <h3 className="text-[#2ecc71] font-medium">React Advanced</h3>
              <p className="text-sm text-gray-300">Meta Frontend Development</p>
              <p className="text-xs text-gray-400 mt-1">2023</p>
            </div>
            
            <div className="certification-item p-3 rounded-lg bg-[rgba(46,204,113,0.05)] border border-[rgba(46,204,113,0.2)] transition-all hover:translate-y-[-2px]">
              <h3 className="text-[#2ecc71] font-medium">Full Stack Development</h3>
              <p className="text-sm text-gray-300">Coursera</p>
              <p className="text-xs text-gray-400 mt-1">2022</p>
            </div>
            
            <div className="certification-item p-3 rounded-lg bg-[rgba(46,204,113,0.05)] border border-[rgba(46,204,113,0.2)] transition-all hover:translate-y-[-2px]">
              <h3 className="text-[#2ecc71] font-medium">UI/UX Design</h3>
              <p className="text-sm text-gray-300">Google</p>
              <p className="text-xs text-gray-400 mt-1">2022</p>
            </div>
          </div>
        </div>

        {/* Footer Card - simplified */}
        <div className="footer-card">
          <p className="text-gray-400 text-sm">
            © 2024 • Crafted with <span className="text-[#2ecc71]">❤️</span> using React by Ahmad Faiz
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
