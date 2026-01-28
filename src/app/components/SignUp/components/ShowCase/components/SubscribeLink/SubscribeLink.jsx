import Button from "../../../Form/components/Button";

const SubscribeLink = () => {
  return (
    //<Button>Subscribe</Button>
    //               左右布局flex 垂直居中items-center                                    居右ml-auto
    <button className="h-12 px-5 flex items-center gap-2 bg-black text-white font-bold text-sm rounded-3xl ml-auto">
      <div className="size-2.5 rounded-full bg-white" />
      <div>SUBSCRIBE</div>
    </button>
  )
}
export default SubscribeLink;