export default function Logo({ className = "w-16 h-12" }) {
  return (
    <div className={`${className} flex-shrink-0`}>
      <div className="w-full h-full bg-gradient-to-r from-red-600 to-red-700 rounded-lg flex items-center justify-center shadow-lg">
        <div className="text-center">
          <div className="text-white font-bold text-lg leading-tight">SRISHTI</div>
          <div className="text-yellow-300 font-bold text-xs leading-tight">NEWS</div>
        </div>
      </div>
    </div>
  );
}