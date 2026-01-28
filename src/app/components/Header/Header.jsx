import Image from "next/image";
import logo from "./assets/logo@2x.png";
const Header = () => {
  return (
    // base=4,32就是：内边距8
    <div className="fixed p-8">
      <Image src={logo} alt="CareerAI LOGO" width={184} height={24} />

    </div>
  )
}

export default Header;