import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { color } from "framer-motion";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title({ color: "orange" })}>Work Experience</h1>
        </div>
        <div className="flex flex-col items-center gap-4 w-10/12">
          <div className="relative w-full p-4 rounded-md border-2 border-orange-500 bg-transparent">
            <div className="flex justify-center items-center space-x-4 mb-4">
              <h2 className={title({color : "orange", size: "xs"})}>Foxlabs</h2>
              <h3 className="text-lg">11/2023 to 06/2024</h3>
              <h4 className="text-md">Back-end & Unity Engineer - Paris (75)</h4>
            </div>
            <ul className="list-disc list-inside text-left">
              <li><strong>Designed, programmed, and deployed</strong> an online shop for 3D models using ThreeJS, Node.js, and Vue, integrating it with 3D printer farms and checkout service.</li>
              <li><strong>Led an R&D team</strong> to develop a personal assistant using local LLM models and a pub/sub system (MQTT), creating an interactive avatar in Unity with C#, JavaScript, and Node.js.</li>
              <li><strong>Documented technical workflows</strong> in a comprehensive guide for clients without Unity experience, facilitating onboarding and project integration.</li>
            </ul>
          </div>
          <div className="relative w-full p-4 rounded-md border-2 border-orange-500 bg-transparent">
            <div className="flex justify-center items-center space-x-4 mb-4">
              <h2 className={title({color : "orange", size: "xs"})}>Seela</h2>
              <h3 className="text-lg">06/2022 to 09/2023</h3>
              <h4 className="text-md">Back-end Engineer & Junior DevOps - Paris (75)</h4>
            </div>
            <ul className="list-disc list-inside text-left">
              <li><strong>Designed, developed, and deployed</strong> infrastructure APIs using Python, Flask, Kubernetes (K8S), and Docker for scalable attacking boxes and virtual computers.</li>
              <li><strong>Integrated Helm operators</strong> written in Golang with the Kubernetes API using Python, ensuring seamless operation and management.</li>
              <li><strong>Maintained, enhanced, and documented</strong> code, improving API performance and functionality.</li>
              <li><strong>Proposed and executed</strong> a revamp of the global API legacy codebase, transitioning from PHP/Laravel to Python/Flask for better scalability and maintainability.</li>
            </ul>
          </div>
          <div className="relative w-full p-4 rounded-md border-2 border-orange-500 bg-transparent">
            <div className="flex justify-center items-center space-x-4 mb-4">
              <h2 className={title({color : "orange", size: "xs"})}>Capgemini</h2>
              <h3 className="text-lg">07/2019 to 06/2022</h3>
              <h4 className="text-md">Software Engineer & Tech Lead - Aix en Provence (13)</h4>
            </div>
            <ul className="list-disc list-inside text-left">
              <li><strong>Designed, developed, and deployed</strong> multiple SaaS projects for Airbus Helicopters, leveraging cloud architecture, AWS, and EC2 instances.</li>
              <li><strong>Led projects</strong> involving Python/Flask APIs for Airbus Helicopters and Petroineos, managing client expectations and ensuring feasibility with project managers and product owners.</li>
              <li><strong>Conducted audits</strong> of legacy codebases for Petroineos, proposing and implementing revamps, and advising the Capgemini commercial team to maintain project budget adherence.</li>
              <li><strong>Managed and led</strong> projects for Airbus Helicopters, utilizing JavaEE, Python, Flask, Golang, and Vue, assuming leadership after 1.5 years.</li>
              <li><strong>Designed, developed, and deployed</strong> AR/VR solutions using Unity, Hololens SDK, and Python for Airbus Helicopters and Capgemini.</li>
            </ul>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
