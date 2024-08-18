import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { color } from "framer-motion";

export default function DocsPage() {
  return (
    <DefaultLayout >
      <section className="flex flex-col items-center justify-center gap-4">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title({ color: "orange" })}>Education</h1>
        </div>
        <div className="flex flex-col items-center gap-4 w-10/12">
          <div className="relative w-full p-4 rounded-md border-2 border-orange-500 bg-transparent">
            <div className="flex justify-center items-center space-x-4 mb-4">
              <h2 className={title({color : "orange", size: "xs"})}>ISART DIGITAL PARIS</h2>
              <h3 className="text-lg">2018</h3>
              <h4 className="text-md">Game Design and Programming Master</h4>
            </div>
            <ul className="list-disc list-inside text-left">
              <li><strong>Advanced Programming Foundations:</strong> Expertise in C++, C#, and Python for game development, focusing on performance optimization and problem-solving.</li>
              <li><strong>Game Engine Mastery:</strong> Proficient in Unity and Unreal Engine, enhancing 3D development and interactive application creation.</li>
              <li><strong>Cross-Disciplinary Collaboration:</strong> Experience working with designers, artists, and sound engineers to ensure cohesive product delivery.</li>
              <li><strong>Algorithm Design & AI Programming:</strong> Skills in creating algorithms and AI behaviors, integrating advanced AI and machine learning models.</li>
              <li><strong>Project Management & Agile Methodologies:</strong> Practical experience in managing projects using Agile methodologies, leading teams effectively.</li>
              <li><strong>3D Modeling & Simulation:</strong> Knowledge in 3D modeling and physics simulations, integrating these techniques into AR/VR solutions.</li>
              <li><strong>Networking & Multiplayer Systems:</strong> Understanding of network protocols and multiplayer system design, handling complex server-client architectures.</li>
            </ul>
          </div> 
          <div className="relative w-full p-4 rounded-md border-2 border-orange-500 bg-transparent">
            <div className="flex justify-center items-center space-x-4 mb-4">
              <h2 className={title({color : "orange", size: "xs"})}>Lycée Sainte Thérèse - ECST</h2>
              <h3 className="text-lg">2015</h3>
              <h4 className="text-md">Baccalauréat STI2D - Very Good</h4>
            </div>
            <ul className="list-disc list-inside text-left">
              <li><strong>Technological Innovation:</strong> Focuses on creativity, design thinking, and innovation. Students explore product manufacturing conditions, service quality, environmental impact, energy costs, product lifespan, and recycling.</li>
              <li><strong>Engineering and Sustainable Development:</strong> Teaches integration of technical, economic, and environmental constraints during product design. Covers energy management, information processing, and material transformation.</li>
              <li><strong>Physics-Chemistry and Mathematics:</strong> Provides a solid scientific foundation for further studies, with programs adapted for technological education.</li>
              <li><strong>Engineering, Innovation, and Sustainable Development:</strong> Includes teachings on technological innovation and eco-design, information and digital systems, energy and environment, and architecture and construction. Combines observation, experimentation, and theoretical reasoning with project work.</li>
            </ul>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
