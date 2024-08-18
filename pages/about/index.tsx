import AboutMe from "@/components/aboutme";
import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title({color : "orange"})}>About</h1>
        </div>
        <AboutMe />
      </section>
    </DefaultLayout>
  );
}
