const Button = ({ children }) => {
  return (
    <button className="h-12 w-full rounded-3xl bg-[linear-gradient(98deg,#504ffd_12%,#40c3fb_91%)] text-white font-bold text-sm">
      {children}
    </button>
  );
}

export default Button;