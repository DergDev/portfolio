import React from 'react';
import { title } from './primitives';

const AboutMe = () => {
  const skills = [
    { category: "Front-End Development", items: "Vue, Nuxt, JavaScript, HTML5, jQuery" },
    { category: "Back-End Development", items: "Python, Flask, Node.js, PHP, Java, Go, C#" },
    { category: "Databases", items: "SQL, PostgreSQL, SQLite, MySQL" },
    { category: "DevOps & Infrastructure", items: "Kubernetes, Docker, AWS, Azure, Helm, Grafana, Prometheus" },
    { category: "Version Control", items: "Git, Github, Gitlab" },
    { category: "Operating Systems", items: "Linux, Windows, Bash" },
    { category: "3D Development", items: "Unity, Unreal Engine" },
    { category: "APIs & Web Services", items: "Elasticsearch, ASP.NET" },
    { category: "Soft Skills", items: "Team Leadership, Project Management, Client Communication, Problem Solving, Adaptability, Documentation and Training, Proactive Improvement" }
  ];
  
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10" style={{ width: '85vw' }}>
      <div className="flex flex-col items-center gap-4 w-10/12">
        <div className="relative w-full p-4 rounded-md border-2 border-orange-500 bg-transparent">
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex flex-col md:flex-row gap-4 w-full">
              <div className="max-w-lg p-4">
                <h2  className={title({color : "orange", size: "xs"})}>Introduction</h2>
                <p className="mb-1">
                Self-directed and experienced Software Engineer with 5 years of expertise 
                in developing and maintaining back-end services and front-end applications.</p>
                <p className="mb-1">
                Proven track record in leading technical teams and delivering robust solutions 
                within the cybersecurity and aeronautical industries.</p>
                <p className="mb-1">
                Adept at tackling human-centered 
                challenges and ensuring alignment with global product vision, demonstrated through.</p>
                <p className="mb-1">
                Skilled in designing and deploying scalable infrastructure, APIs, and cloud-based solutions using technologies such as K8S, 
                Docker, AWS & Azure.</p> 
                <p className="mb-1"> Dedicated to optimizing productivity and driving continuous improvement in dynamic environments.</p>
              </div>
              <div className="max-w-lg p-4">
                <h2  className={title({color : "orange", size: "xs"})}>Skills</h2>
                <ul className="list-disc list-inside">
                  {skills.map(skill => (
                    <li key={skill.category}  className="mb-1">
                      <strong>{skill.category}:</strong> {skill.items}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;