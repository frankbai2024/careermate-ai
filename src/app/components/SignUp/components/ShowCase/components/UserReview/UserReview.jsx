import Image from "next/image";
import avatar from "./assets/avatar.png"

const UserReview = () => {
  return (
    <div className="rounded-3xl bg-white p-5 w-46 mt-10 -ml-16 shadow-2xl">
      <div className="flex items-center gap-3">{/* //左右布局flex 垂直居中items-center */}

        <Image src={avatar} alt="username" width={36} height={36} />

        <div className="font-bold">Username</div>
      </div>
      <div className="mt-3">Tried many, but this Al stands out!🔥</div>
    </div>

  )
}

export default UserReview;