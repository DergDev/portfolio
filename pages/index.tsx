import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import Image from 'next/image'
import imageToAdd from "../assets/tim.jpg";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import AboutMe from "@/components/aboutme";
import Presentation from "@/components/presentation";
import KeyInformation from "@/components/keyinformation";

const imageStyle = {
  borderRadius: '50%',
  border: '1px solid #fff',
};

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center">
        <div className="mb-4">
          <Image src="https://pbs.twimg.com/profile_images/1505911501839863812/hpvLhJjt_400x400.jpg" alt="Tim" width={200} height={200} style={imageStyle}/>
        </div>
        <div className="flex items-center space-x-4 justify-center" style={{ width: '85vw' }}>
          <Presentation />
          <KeyInformation />
        </div>
      </section>
    </DefaultLayout>
  );
}
