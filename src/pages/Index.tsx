
import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Twitter, Headphones, Code, Book, Coffee, Globe, ArrowUpRight } from "lucide-react";

const Index = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#121212] text-white p-4 md:p-8">
      <div className="bento-grid max-w-7xl mx-auto">
        {/* Welcome Card */}
        <div className="bento-card col-span-2 flex flex-col justify-between">
          <div>
            <h2 className="text-sm text-gray-400 mb-2">welcome</h2>
            <h1 className="text-4xl font-bold mb-4">
              Hi, I'm <span className="text-[#e2e2e2]">Ahmad Faiz</span>
            </h1>
            <p className="text-gray-300 text-lg">
              A software developer with a passion for creating beautiful and functional web experiences
            </p>
          </div>
          
          <div className="mt-8 flex space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
              className="social-link">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/ahmadfaiz01/" target="_blank" rel="noopener noreferrer"
              className="social-link">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
              className="social-link">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="mailto:your@email.com"
              className="social-link">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* About Card */}
        <div className="bento-card row-span-2">
          <h2 className="text-2xl font-bold mb-6">About me</h2>
          <p className="text-gray-300 mb-4">
            I'm Ahmad, a front-end software developer from Malaysia.
            My primary tools of choice includes:
          </p>
          <ul className="list-inside space-y-2 mb-6">
            <li className="flex items-center space-x-2">
              <span className="text-gray-300 text-sm">•</span>
              <span className="text-gray-300">React</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-gray-300 text-sm">•</span>
              <span className="text-gray-300">TypeScript</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-gray-300 text-sm">•</span>
              <span className="text-gray-300">Node.js</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-gray-300 text-sm">•</span>
              <span className="text-gray-300">Tailwind CSS</span>
            </li>
          </ul>
          
          <p className="text-gray-300 mb-6">
            Beyond coding, I'm passionate about design, illustration, and traveling. 
            I enjoy building modern web applications using React, TypeScript, and other cutting-edge technologies.
          </p>
          
          <p className="text-gray-300">
            While I have some preferred tools, I always choose the best one for the job, 
            even if it's not on my usual list. My goal is to find the right solution for each project.
          </p>
        </div>

        {/* Time Card */}
        <div className="bento-card">
          <h2 className="text-xl font-bold mb-4">Time zone</h2>
          <p className="text-4xl font-mono font-bold">
            {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false })}
            {" "}
            <span className="text-gray-400">MYT</span>
          </p>
        </div>

        {/* Let's Work Together Card */}
        <div className="bento-card">
          <h2 className="text-2xl font-bold mb-4">Let's start working together!</h2>
          
          <div className="space-y-4 mt-6">
            <p className="text-sm text-gray-400">Contact Details</p>
            <p className="text-gray-300">your@email.com</p>
            <p className="text-gray-300">Malaysia</p>
          </div>
          
          <div className="space-y-1 mt-6">
            <p className="text-sm text-gray-400">Socials</p>
            <p className="text-gray-300">Linkedin</p>
            <p className="text-gray-300">Github</p>
          </div>
        </div>

        {/* Now Card */}
        <div className="bento-card">
          <div className="flex items-center mb-4">
            <h2 className="text-xl font-bold">Now</h2>
            <div className="ml-2 w-2 h-2 rounded-full bg-green-500"></div>
          </div>
          <p className="text-sm text-gray-400 mb-4">what's that?</p>
          
          <p className="text-gray-300">Currently working as freelancer</p>
          
          <div className="space-y-4 mt-6">
            <div className="flex items-center space-x-3">
              <Code className="text-gray-400 w-5 h-5" />
              <span className="text-gray-300">Building a web app with React</span>
            </div>
            <div className="flex items-center space-x-3">
              <Book className="text-gray-400 w-5 h-5" />
              <span className="text-gray-300">Learning cloud architecture</span>
            </div>
            <div className="flex items-center space-x-3">
              <Headphones className="text-gray-400 w-5 h-5" />
              <span className="text-gray-300">Listening to tech podcasts</span>
            </div>
            <div className="flex items-center space-x-3">
              <Coffee className="text-gray-400 w-5 h-5" />
              <span className="text-gray-300">Drinking too much coffee</span>
            </div>
          </div>
        </div>

        {/* Countries Visited Card */}
        <div className="bento-card">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Countries I visited</h2>
            <ArrowUpRight className="w-5 h-5 text-gray-400" />
          </div>
          
          <div className="flex items-center justify-center">
            <Globe className="w-12 h-12 text-gray-400" />
          </div>
        </div>

        {/* Projects Card */}
        <div className="bento-card col-span-1">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Blog</h2>
            <ArrowUpRight className="w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* Footer Card */}
        <div className="bento-card col-span-2">
          <p className="text-gray-400 text-sm">
            © 2024 • Crafted with ❤️ using React by Ahmad Faiz
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
