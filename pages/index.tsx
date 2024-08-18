import Image from 'next/image'
import DefaultLayout from "@/layouts/default";
import Presentation from "@/components/presentation";
import KeyInformation from "@/components/keyinformation";

const imageStyle = {
  borderRadius: '50%',
  border: '5px solid transparent',
  backgroundImage: 'linear-gradient(white, white), linear-gradient(to right, #FFA500, #FF4500)',
  backgroundOrigin: 'border-box',
  backgroundClip: 'content-box, border-box',
};

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center">
        <div className="mb-4">
          <Image src="https://pbs.twimg.com/profile_images/1505911501839863812/hpvLhJjt_400x400.jpg" alt="Tim" width={300} height={300} style={imageStyle}/>
        </div>
        <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4 justify-center" style={{ width: '95vw' }}>
          <Presentation />
          <KeyInformation />
        </div>
      </section>
    </DefaultLayout>
  );
}
