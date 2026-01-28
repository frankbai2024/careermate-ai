const Field = ({ label, placeholder }) => {
  return (
    <div>
      <div className="mb-2">
        <label className="text-gray-700 mb-2 text-sm">{label}</label>
      </div>
      <div className="">
        <input className="px-4 h-12 rounded-3xl border border-gray-300 w-full" placeholder={placeholder} />
      </div>

    </div>
  )
}
export default Field;