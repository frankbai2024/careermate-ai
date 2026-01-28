import Advantages from "./components/Advantages";
import UserReview from "./components/UserReview";
import SubscribeLink from "./components/SubscribeLink";
import background from "./assets/background@2x.png"
import Image from "next/image";

const Showcase = () => {
  return (// tailwindcss 背景图片写法
    <div
      className="relative p-8" //tailwindcss 背景图片写法有路径问题，用Image组件代替
    //className="flex-1 min-h-[300px]" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}
    >
      <Image className="absolute" src={background} fill alt="" />{/* //背景图片写法absolute + fill */}
      <div className="relative h-full">{/* 放在背景上面 relative */}
        <SubscribeLink />
        <UserReview />
        <Advantages />
      </div>
    </div>
  );
}

export default Showcase;