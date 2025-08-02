import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Menu, X, Home, ChevronLeft, ChevronRight } from 'lucide-react'; // Import Chevron icons for image navigation
import './App.css'; // Import your CSS file for styles
import profile from './assets/profile.png'; // Import profile image
import project2 from './assets/project2.png'; // Import project image
import education1 from './assets/download.jpeg';
import project1 from './assets/project1.png';
import education2 from './assets/educatio2.jpeg';
import ciplacertificate from './assets/CiplaCertificate.png';
import ciplaWork from './assets/ciplaWork.jpg';
import cucertificate from './assets/cuCertificate.jpg';

// --- Page Components ---

const HomePage = ({ setCurrentPage }) => (
  <section id="hero" className="flex flex-col items-center justify-center text-center py-20 px-6 md:px-10 min-h-[calc(100vh-80px)] bg-gradient-to-b from-zinc-900 to-zinc-800">
    <img
      src={profile} // Using the uploaded image directly
      alt="Profile"
      className="w-60 h-60 rounded-full object-cover mb-8 shadow-xl border-4 border-cyan-500"
      onError={(e) => {
        e.target.onerror = null; // Prevent infinite loop if fallback also fails
        e.target.src = "https://placehold.co/128x128/06B6D4/FFFFFF?text=RG"; // Fallback with Riya Gupta initials
      }}
    />
    <h2 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight tracking-tight">
      Hello, I'm <span className="text-cyan-400">Riya Gupta</span>
    </h2>
    <p className="text-xl md:text-2xl text-zinc-300 mb-10 font-light max-w-2xl">
      A dedicated <span className="font-semibold text-cyan-300">Biotechnology Professional</span> passionate about microbial research and quality assurance.
    </p>
    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
      
      <a
        href="#contact"
        onClick={() => setCurrentPage('contact')}
        className="px-10 py-4 border-2 border-cyan-600 text-cyan-400 rounded-full text-lg font-semibold shadow-lg hover:bg-cyan-900 hover:border-cyan-500 transition-all duration-300 transform hover:scale-105"
      >
        Connect With Me
      </a>
      <a
        href="#projects"
        onClick={() => setCurrentPage('projects')}
        className="px-10 py-4 bg-white text-white rounded-full text-lg font-semibold shadow-lg hover:bg-cyan-700 transition-all duration-300 transform hover:scale-105"
      >
        Explore My Work
      </a>
       <a
  href="https://drive.google.com/file/d/1w7HzR9WOM5QCHBsou_5iBQ2mBhWcM2Yb/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="px-10 py-4 border-2 border-cyan-600 text-cyan-400 rounded-full text-lg font-semibold shadow-lg hover:bg-cyan-900 hover:border-cyan-500 transition-all duration-300 transform hover:scale-105"
>
  Hire Me
</a>
    </div>
  </section>
);

const AboutPage = () => {
  const [expandedAboutSections, setExpandedAboutSections] = useState({});

  const toggleAboutSectionExpansion = (sectionId) => {
    setExpandedAboutSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const aboutSections = [
    {
      id: 'about-me-main',
      title: 'About Me',
      content: `Hello! I'm Riya Gupta, a passionate Biotechnology professional with hands-on experience in pharmaceutical microbiology and plant growth-promoting metabolite research. My internship at Cipla Limited provided me with practical skills in laboratory techniques, quality control, and adherence to regulatory frameworks like GMP. I thrive on scientific inquiry and applying analytical methods to real-world biological challenges. I am dedicated to contributing to advancements in biotechnology and ensuring product safety and effectiveness. Outside of my professional pursuits, I enjoy Taekwondo, traveling, and reading fictional novels. I'm always eager to learn and grow, and I'm looking forward to collaborating on innovative projects.`,
      initialHeight: 'h-56'
    },
    {
      id: 'college-journey',
      title: 'My College Journey',
      content: `My time at Chandigarh University pursuing a Bachelor of Science in Biotechnology has been a period of immense growth. I've delved deep into subjects like genetics, microbiology, biochemistry, and molecular biology. Beyond academics, I've actively participated in various extracurricular activities, including the Cross-Country Marathon and dance workshops, which have contributed to my holistic development and problem-solving skills.`,
      initialHeight: 'h-24'
    },
    {
      id: 'school-journey',
      title: 'My School Journey',
      content: `My foundational learning at Jawahar Navodaya Vidyalaya provided a strong academic base, particularly in science. This period sparked my curiosity for how things work and laid the groundwork for my interest in biotechnology. I also engaged in various school activities that helped me develop teamwork and critical thinking skills from an early age.`,
      initialHeight: 'h-24'
    },
  ];

  return (
    <section id="about" className="py-20 px-6 md:px-10 bg-zinc-800 rounded-lg shadow-xl m-6 md:m-10 border border-zinc-700">
      <h3 className="text-4xl font-bold text-center mb-12 text-cyan-400">About Me</h3>
      <div className="max-w-4xl mx-auto grid grid-cols-1 gap-8">
        {aboutSections.map(section => (
          <div
            key={section.id}
            className="bg-zinc-900 rounded-xl shadow-lg border border-zinc-700 p-7 transform hover:scale-105 transition-transform duration-300 hover:shadow-cyan-500/30 flex flex-col cursor-pointer"
            onClick={() => toggleAboutSectionExpansion(section.id)}
          >
            <h4 className="text-2xl font-semibold mb-3 text-zinc-50 text-center">{section.title}</h4>
            <ExpandableContent initialHeight={section.initialHeight} isExpanded={expandedAboutSections[section.id] || false}>
              <p className="text-zinc-300 text-base leading-relaxed">{section.content}</p>
            </ExpandableContent>
            <a
              href="#"
              onClick={(e) => { e.stopPropagation(); toggleAboutSectionExpansion(section.id); }}
              className="mt-auto pt-4 text-cyan-400 hover:text-cyan-300 transition-colors focus:outline-none text-sm font-medium self-start border-t border-zinc-700"
            >
              {expandedAboutSections[section.id] ? 'Hide Details' : 'Show Details'}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

const SkillsPage = () => (
  <section id="skills" className="py-20 px-6 md:px-10 bg-zinc-800 rounded-lg shadow-xl m-6 md:m-10 border border-zinc-700">
    <h3 className="text-4xl font-bold text-center mb-12 text-cyan-400">My Expertise</h3>
    <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {[
        'Laboratory Techniques', 'Aseptic Techniques', 'GMP & GLP', 'Microbial Isolation',
        'Metabolite Characterization', 'Spectroscopic Methods', 'Statistical Analysis',
        'Quality Control', 'Teamwork', 'Problem-Solving',
        'Thin-Layer Chromatography (TLC)', 'Fourier Transform Infrared Spectroscopy (FTIR)',
        'Gas Chromatography-Mass Spectrometry (GC-MS)', 'Plant Growth Promotion Assays'
      ].map((skill, index) => (
        <div key={index} className="flex items-center justify-center p-5 bg-zinc-900 rounded-xl shadow-md border border-zinc-700 hover:border-cyan-500 hover:shadow-cyan-500/20 transition-all duration-300 transform hover:scale-105">
          <span className="text-xl font-medium text-zinc-100">{skill}</span>
        </div>
      ))}
    </div>
  </section>
);

const ProjectsPage = ({ showImageViewer }) => {
  const [expandedProjects, setExpandedProjects] = useState({});

  const toggleProjectExpansion = (projectId) => {
    setExpandedProjects(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  const projects = [
    {
      id: 'cipla-project',
      image: project1,
      title: 'Pharmaceutical Microbiology at Cipla',
      details: `During my internship at Cipla Limited, I gained hands-on experience in pharmaceutical microbiology. My work involved developing practical skills by directly handling laboratory equipment, performing various tests, and strictly adhering to established protocols. A significant part of my learning focused on understanding and participating in quality control (QC) and quality assurance (QA) processes, which are vital for ensuring the safety and effectiveness of pharmaceutical products. I learned about preparing and sterilizing culture media, performing microbiological limit tests (MLT) for raw materials and finished products, and conducting environmental monitoring in cleanrooms, all in accordance with industrial protocols. This experience provided me with an in-depth understanding of how regulatory frameworks like Good Manufacturing Practices (GMP) guide microbiology lab operations and quality assurance.`,
      links: [
        { name: 'Images', href: [
          cucertificate
        ], type: 'image', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-image"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg> },
        { name: 'Report', href: 'https://docs.google.com/document/d/1Xq2RtG9zJTojVNihRLFffVQ-8fLxHpbC3xTkMMGfD_Y/edit?tab=t.0', type: 'report', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg> },
      ]
    },
    {
      id: 'plant-growth-project-full',
      image: project2,
      title: 'Isolation, Detection, and Characterization of Plant Growth-Promoting Metabolites',
      details: `Project Duration: Jan 2025 – Present
        <ul>
          <li>Demonstrated expertise in microbial isolation techniques from rhizospheric soil using serial dilution and selective media.</li>
          <li>Screened and quantified plant growth-promoting (PGP) metabolites such as indole-3-acetic acid (IAA), siderophores, and phosphate solubilization using biochemical and spectroscopic methods.</li>
          <li>Performed metabolite characterization through techniques like Thin-Layer Chromatography (TLC), Fourier Transform Infrared Spectroscopy (FTIR), and Gas Chromatography-Mass Spectrometry (GC-MS).</li>
          <li>Conducted in vitro plant growth promotion assays to evaluate the effect of microbial isolates on seed germination, root elongation, and shoot growth.</li>
          <li>Applied statistical analysis to assess the effectiveness of PGP metabolites and documented findings for potential agricultural applications.</li>
        </ul>`,
      links: [
        { name: 'Images', href: [
          ciplacertificate
        ], type: 'image', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-image"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg> },
        { name: 'Report', href: 'https://drive.google.com/file/d/1Zdf1AYGTOiVI1cX3a6Zk_YE2P6k2OKOe/view?usp=sharing', type: 'report', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg> },
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 md:px-10 bg-zinc-800 rounded-lg shadow-xl m-6 md:m-10 border border-zinc-700">
      <h3 className="text-4xl font-bold text-center mb-12 text-cyan-400">Featured Projects</h3>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map(project => (
          <div
            key={project.id}
            className="bg-zinc-900 rounded-xl shadow-lg border border-zinc-700 p-7 transform hover:scale-105 transition-transform duration-300 hover:shadow-cyan-500/30 flex flex-col cursor-pointer"
            onClick={() => toggleProjectExpansion(project.id)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-52 object-cover rounded-lg mb-6 border border-zinc-700"
            />
            <h4 className="text-2xl font-semibold mb-3 text-zinc-50">{project.title}</h4>
            <ExpandableContent initialHeight="h-32" isExpanded={expandedProjects[project.id] || false}>
              <div dangerouslySetInnerHTML={{ __html: project.details }} /> {/* Render HTML from details */}
            </ExpandableContent>
            <div className="flex flex-wrap gap-4 justify-center mt-auto pt-4 border-t border-zinc-700">
              {project.links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors p-2 rounded-md bg-zinc-800 border border-zinc-700 hover:border-cyan-500"
                  target={link.type === 'image' ? '_self' : '_blank'} // Open image in current tab (modal handles it), others in new tab
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent card expansion when clicking links
                    if (link.type === 'image') {
                      showImageViewer(link.href);
                    }
                  }}
                >
                  {link.icon}
                  <span className="font-medium">{link.name}</span>
                </a>
              ))}
              <a
                href="#"
                onClick={(e) => { e.stopPropagation(); toggleProjectExpansion(project.id); }}
                className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors p-2 rounded-md bg-zinc-800 border border-zinc-700 hover:border-cyan-500"
              >
                {expandedProjects[project.id] ? 'Hide Details' : 'Show Details'}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const ContactPage = () => (
  <section id="contact" className="py-20 px-6 md:px-10 bg-zinc-800 rounded-lg shadow-xl m-6 md:m-10 border border-zinc-700">
    <h3 className="text-4xl font-bold text-center mb-12 text-cyan-400">Let's Connect</h3>
    <p className="text-lg text-zinc-300 mb-10 max-w-3xl mx-auto">
      I'm always excited to discuss new projects, share ideas, or just chat about technology. Feel free to reach out through any of the channels below.
    </p>
    <div className="flex justify-center flex-wrap gap-8">
      <a
        href="mailto:griya8087@gmail.com"
        className="flex items-center space-x-3 text-cyan-400 hover:text-cyan-300 transition-colors p-4 rounded-lg bg-zinc-900 border border-zinc-700 hover:border-cyan-500 transform hover:scale-105 shadow-md"
      >
        <Mail size={32} />
        <span className="text-xl font-medium">griya8087@gmail.com</span>
      </a>
      <a
        href="https://drive.google.com/file/d/1RIpaZZCXUh2EcOP9kfoB13mjOV-x3K_-/view?usp=drive_link" // Placeholder, update with Riya's GitHub if available
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-3 text-cyan-400 hover:text-cyan-300 transition-colors p-4 rounded-lg bg-zinc-900 border border-zinc-700 hover:border-cyan-500 transform hover:scale-105 shadow-md"
      >
        
        <span className="text-xl font-medium">Resume</span>
      </a>
      <a
        href="https://www.linkedin.com/in/riya-gupta-807185251/" // Placeholder, update with Riya's LinkedIn if available
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-3 text-cyan-400 hover:text-cyan-300 transition-colors p-4 rounded-lg bg-zinc-900 border border-zinc-700 hover:border-cyan-500 transform hover:scale-105 shadow-md"
      >
        <Linkedin size={32} />
        <span className="text-xl font-medium">LinkedIn/RiyaGupta</span>
      </a>
    </div>
  </section>
);

// Component for expandable content within cards
const ExpandableContent = ({ children, initialHeight = 'h-32', isExpanded }) => {
  const contentRef = React.useRef(null);

  return (
    <div className="flex flex-col flex-grow">
      <div
        ref={contentRef}
        className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-full' : initialHeight}`}
      >
        {children}
      </div>
    </div>
  );
};


// Updated Internship Page Component (Card Form)
const InternshipPage = ({ showImageViewer }) => {
  const [expandedInternships, setExpandedInternships] = useState({});

  const toggleInternshipExpansion = (internshipId) => {
    setExpandedInternships(prev => ({
      ...prev,
      [internshipId]: !prev[internshipId]
    }));
  };

  const internships = [
    {
      id: 'cipla',
      company: 'Cipla Limited',
      logo: 'https://placehold.co/100x100/007ACC/FFFFFF?text=Cipla',
      title: 'Summer Intern',
      duration: 'Mohali, Punjab | May 2024 - June 2024 (On-site)',
      details: [
        'Worked closely with experts in pharmaceutical microbiology, developing practical lab skills.',
        'Gained in-depth understanding of regulatory frameworks (GMP) for microbiology lab operations and quality assurance.',
        'Focused on Quality Control (QC) and Quality Assurance (QA) processes for product safety and effectiveness.',
        'Learned about preparing/sterilizing culture media, microbiological limit tests (MLT), and environmental monitoring in cleanrooms.',
      ],
      links: [
        { name: 'Images', href: [
          ciplaWork,
          ciplaWork
        ], type: 'image', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-image"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg> },
        { name: 'Report', href: 'https://docs.google.com/document/d/1Xq2RtG9zJTojVNihRLFffVQ-8fLxHpbC3xTkMMGfD_Y/edit?usp=sharing', type: 'report', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg> },
        { name: 'Certificate', href: [ciplacertificate], type: 'image', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award"><circle cx="12" cy="8" r="7"/><path d="M8.21 13.89 7 22l5-3 5 3-1.21-8.11"/></svg> },
      ]
    },
    {
      id: 'chandigarh-uni-proj-trainee',
      company: 'Chandigarh University',
      logo: 'https://placehold.co/100x100/FF0000/FFFFFF?text=CU',
      title: 'Project Trainee',
      duration: 'Chandigarh, Punjab | Jan 2025 - May 2025',
      details: [
        'Demonstrated expertise in microbial isolation techniques from rhizospheric soil using serial dilution and selective media.',
        'Screened and quantified plant growth-promoting (PGP) metabolites (IAA, siderophores, phosphate solubilization) using biochemical and spectroscopic methods.',
        'Performed metabolite characterization through techniques like Thin-Layer Chromatography (TLC), Fourier Transform Infrared Spectroscopy (FTIR), and Gas Chromatography-Mass Spectrometry (GC-MS).',
        'Conducted in vitro plant growth promotion assays to evaluate the effect of microbial isolates on seed germination, root elongation, and shoot growth.',
        'Applied statistical analysis to assess the effectiveness of PGP metabolites and documented findings for potential agricultural applications.',
      ],
      links: [
        { name: 'Images', href: [
          'https://placehold.co/800x600/800080/FFFFFF?text=CU+Trainee+Image+1',
          'https://placehold.co/800x600/800080/FFFFFF?text=CU+Trainee+Image+2'
        ], type: 'image', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-image"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg> },
        { name: 'Report', href: 'https://drive.google.com/file/d/1Zdf1AYGTOiVI1cX3a6Zk_YE2P6k2OKOe/view?usp=sharing', type: 'report', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg> },
        { name: 'Certificate', href: [cucertificate], type: 'image', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award"><circle cx="12" cy="8" r="7"/><path d="M8.21 13.89 7 22l5-3 5 3-1.21-8.11"/></svg> },
      ]
    }
  ];

  return (
    <section id="internship" className="py-20 px-6 md:px-10 bg-zinc-800 rounded-lg shadow-xl m-6 md:m-10 border border-zinc-700">
      <h3 className="text-4xl font-bold text-center mb-12 text-cyan-400">My Internship Experience</h3>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {internships.map(internship => (
          <div
            key={internship.id}
            className="bg-zinc-900 rounded-xl shadow-lg border border-zinc-700 p-7 transform hover:scale-105 transition-transform duration-300 hover:shadow-cyan-500/30 flex flex-col cursor-pointer"
            onClick={() => toggleInternshipExpansion(internship.id)}
          >
            <img
              src={internship.logo}
              alt={`${internship.company} Logo`}
              className="w-24 h-24 object-contain rounded-lg mb-4 mx-auto"
            />
            <h4 className="text-2xl font-semibold mb-3 text-zinc-50 text-center">{internship.title} at {internship.company}</h4>
            <p className="text-zinc-400 text-base mb-4 text-center">{internship.duration}</p>
            <ExpandableContent
              initialHeight="h-40"
              isExpanded={expandedInternships[internship.id] || false}
            >
              <ul className="list-disc list-inside text-zinc-300 text-base space-y-2 mb-6">
                {internship.details.map((detail, idx) => <li key={idx}>{detail}</li>)}
              </ul>
            </ExpandableContent>
            <div className="flex flex-wrap gap-4 justify-center mt-auto pt-4 border-t border-zinc-700">
              {internship.links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors p-2 rounded-md bg-zinc-800 border border-zinc-700 hover:border-cyan-500"
                  target={link.type === 'image' ? '_self' : '_blank'} // Open image in current tab (modal handles it), others in new tab
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent card expansion when clicking links
                    if (link.type === 'image') {
                      showImageViewer(link.href);
                    }
                  }}
                >
                  {link.icon}
                  <span className="font-medium">{link.name}</span>
                </a>
              ))}
              <a
                href="#"
                onClick={(e) => { e.stopPropagation(); toggleInternshipExpansion(internship.id); }}
                className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors p-2 rounded-md bg-zinc-800 border border-zinc-700 hover:border-cyan-500"
              >
                {expandedInternships[internship.id] ? 'Hide Details' : 'Show Details'}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// New Education Page Component (Card Form)
const EducationPage = () => {
  const [expandedEducation, setExpandedEducation] = useState({});

  const toggleEducationExpansion = (eduId) => {
    setExpandedEducation(prev => ({
      ...prev,
      [eduId]: !prev[eduId]
    }));
  };

  const educationItems = [
    {
      id: 'chandigarh-uni-edu',
      logo: education1,
      title: 'Bachelor of Science in Biotechnology',
      duration: 'Chandigarh University | July 2022 - Present',
      details: `Currently pursuing a comprehensive Biotechnology degree, focusing on core scientific principles and practical laboratory applications. This program has provided me with a strong foundation in genetics, microbiology, biochemistry, and molecular biology, preparing me for a career in research and development. I've engaged in various projects and coursework that have deepened my understanding of biotechnological advancements and their real-world impact.`,
    },
    {
      id: 'jnv-edu',
      logo: education2,
      title: 'Intermediate Examination',
      duration: 'Jawahar Navodaya Vidyalaya, Saharanpur, Uttar Pradesh | July 2021 - July 2022',
      details: `Completed my intermediate education with a strong focus on science, which laid the groundwork for my higher studies in Biotechnology. This period honed my analytical skills, critical thinking, and scientific curiosity, providing a robust academic foundation for my university studies.`,
    }
  ];

  return (
    <section id="education" className="py-20 px-6 md:px-10 bg-zinc-800 rounded-lg shadow-xl m-6 md:m-10 border border-zinc-700">
      <h3 className="text-4xl font-bold text-center mb-12 text-cyan-400">My Education</h3>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {educationItems.map(edu => (
          <div
            key={edu.id}
            className="bg-zinc-900 rounded-xl shadow-lg border border-zinc-700 p-7 transform hover:scale-105 transition-transform duration-300 hover:shadow-cyan-500/30 flex flex-col cursor-pointer"
            onClick={() => toggleEducationExpansion(edu.id)}
          >
            <img
              src={edu.logo}
              alt={`${edu.title} Logo`}
              className="w-40 h-40 object-contain rounded-lg mb-4 mx-auto"
            />
            <h4 className="text-2xl font-semibold mb-3 text-zinc-50 text-center">{edu.title}</h4>
            <p className="text-zinc-400 text-base mb-4 text-center">{edu.duration}</p>
            <ExpandableContent initialHeight="h-24" isExpanded={expandedEducation[edu.id] || false}>
              <p className="text-zinc-300 text-base">{edu.details}</p>
            </ExpandableContent>
            <a
              href="#"
              onClick={(e) => { e.stopPropagation(); toggleEducationExpansion(edu.id); }}
              className="mt-auto pt-4 text-cyan-400 hover:text-cyan-300 transition-colors focus:outline-none text-sm font-medium self-start border-t border-zinc-700"
            >
              {expandedEducation[edu.id] ? 'Hide Details' : 'Show Details'}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

// New Image Viewer Modal Component
const ImageViewerModal = ({ imageUrls, onClose }) => {
  if (!imageUrls || imageUrls.length === 0) return null;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length);
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[100] p-4"
      onClick={onClose} // Close modal when clicking outside image
    >
      <div
        className="relative bg-zinc-900 rounded-lg shadow-xl max-w-full max-h-full overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
      >
        <button
          className="absolute top-3 right-3 p-2 rounded-full bg-zinc-700 text-cyan-400 hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 z-10"
          onClick={onClose}
          aria-label="Close image viewer"
        >
          <X size={24} />
        </button>

        <img
          src={imageUrls[currentImageIndex]}
          alt={`Enlarged view ${currentImageIndex + 1} of ${imageUrls.length}`}
          className="max-w-full max-h-[90vh] object-contain rounded-lg"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.co/800x600/FF0000/FFFFFF?text=Image+Not+Found";
          }}
        />

        {imageUrls.length > 1 && (
          <>
            <button
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-zinc-700 text-cyan-400 hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 z-10"
              onClick={prevImage}
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-zinc-700 text-cyan-400 hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 z-10"
              onClick={nextImage}
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-cyan-400 bg-zinc-700 px-3 py-1 rounded-full text-sm">
              {currentImageIndex + 1} / {imageUrls.length}
            </div>
          </>
        )}
      </div>
    </div>
  );
};


// --- Main App Component ---
const App = () => {
  // State to manage the current page
  const [currentPage, setCurrentPage] = useState('home');
  // State for mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // State for image viewer modal
  const [showImageViewer, setShowImageViewer] = useState(false);
  const [currentImageUrls, setCurrentImageUrls] = useState([]); // Changed to array

  // Function to open the image viewer
  const openImageViewer = (urls) => { // Accepts an array of URLs
    setCurrentImageUrls(urls);
    setShowImageViewer(true);
  };

  // Function to close the image viewer
  const closeImageViewer = () => {
    setShowImageViewer(false);
    setCurrentImageUrls([]);
  };


  // Effect to always apply the 'dark' class to the document body
  useEffect(() => {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark'); // Persist dark mode preference
  }, []);

  // Function to handle navigation clicks and close menu
  const handleNavLinkClick = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false); // Close menu on navigation
  };

  // Function to render the current page component
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'about':
        return <AboutPage />;
      case 'skills':
        return <SkillsPage />;
      case 'projects':
        return <ProjectsPage showImageViewer={openImageViewer} />;
      case 'internship':
        return <InternshipPage showImageViewer={openImageViewer} />;
      case 'education':
        return <EducationPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100 font-inter transition-colors duration-300">
      {/* Header/Navigation */}
      <header className="py-4 px-6 md:px-10 flex justify-between items-center border-b border-zinc-700 relative z-50">
        <h1 className="text-2xl font-bold text-cyan-400">
          <a href="#home" onClick={() => handleNavLinkClick('home')} className="focus:outline-none">
            {/* Replaced text with Home icon */}
            <Home size={28} className="inline-block align-middle" />
            <span className="sr-only">Home</span> {/* For accessibility */}
          </a>
        </h1>

        {/* Hamburger menu button for small screens */}
        <button
          className="md:hidden p-2 rounded-md text-cyan-400 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#home" onClick={() => handleNavLinkClick('home')} className="text-lg hover:text-cyan-400 transition-colors focus:outline-none">Home</a>
          <a href="#about" onClick={() => handleNavLinkClick('about')} className="text-lg hover:text-cyan-400 transition-colors focus:outline-none">About</a>
          <a href="#skills" onClick={() => handleNavLinkClick('skills')} className="text-lg hover:text-cyan-400 transition-colors focus:outline-none">Skills</a>
          <a href="#projects" onClick={() => handleNavLinkClick('projects')} className="text-lg hover:text-cyan-400 transition-colors focus:outline-none">Projects</a>
          <a href="#internship" onClick={() => handleNavLinkClick('internship')} className="text-lg hover:text-cyan-400 transition-colors focus:outline-none">Internship</a>
          <a href="#education" onClick={() => handleNavLinkClick('education')} className="text-lg hover:text-cyan-400 transition-colors focus:outline-none">Education</a>
          <a href="#contact" onClick={() => handleNavLinkClick('contact')} className="text-lg hover:text-cyan-400 transition-colors focus:outline-none">Contact</a>
        </nav>

        {/* Mobile Navigation Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-zinc-900 border-b border-zinc-700 shadow-lg py-4">
            <nav className="flex flex-col items-center space-y-4">
              <a href="#home" onClick={() => handleNavLinkClick('home')} className="text-lg hover:text-cyan-400 transition-colors focus:outline-none w-full text-center py-2">Home</a>
              <a href="#about" onClick={() => handleNavLinkClick('about')} className="text-lg hover:text-cyan-400 transition-colors focus:outline-none w-full text-center py-2">About</a>
              <a href="#skills" onClick={() => handleNavLinkClick('skills')} className="text-lg hover:text-cyan-400 transition-colors focus:outline-none w-full text-center py-2">Skills</a>
              <a href="#projects" onClick={() => handleNavLinkClick('projects')} className="text-lg hover:text-cyan-400 transition-colors focus:outline-none w-full text-center py-2">Projects</a>
              <a href="#internship" onClick={() => handleNavLinkClick('internship')} className="text-lg hover:text-cyan-400 transition-colors focus:outline-none w-full text-center py-2">Internship</a>
              <a href="#education" onClick={() => handleNavLinkClick('education')} className="text-lg hover:text-cyan-400 transition-colors focus:outline-none w-full text-center py-2">Education</a>
              <a href="#contact" onClick={() => handleNavLinkClick('contact')} className="text-lg hover:text-cyan-400 transition-colors focus:outline-none w-full text-center py-2">Contact</a>
            </nav>
          </div>
        )}
      </header>

      {/* Render the current page */}
      {renderPage()}

      {/* Image Viewer Modal */}
      <ImageViewerModal imageUrls={currentImageUrls} onClose={closeImageViewer} />

      {/* Footer */}
      <footer className="py-10 text-center text-zinc-500 border-t border-zinc-700">
        <p>&copy; {new Date().getFullYear()} Riya Gupta. All rights reserved.</p>
        <p className="text-sm mt-2">Designed and Developed with ❤️</p>
      </footer>
    </div>
  );
};

export default App;
