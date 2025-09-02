import { Link, useLocation } from "react-router-dom";
import { FaHome, FaBox, FaCog, FaEnvelope } from "react-icons/fa";

export default function Header() {
  const location = useLocation();

  const contactMethods = [
    {
      title: "WhatsApp",
      value: "+91 6379675757",
      action: "https://wa.me/916379675757",
      icon: "src/assets/Icons/whatsapp-icon.png",
    },
  ];

  const menu = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "Product", path: "/Product", icon: <FaBox /> },
    { name: "Work", path: "/Work", icon: <FaCog /> },
    { name: "Contact", path: "/contact", icon: <FaEnvelope /> },
  ];

  return (
    <nav className="fixed bottom-[20px] left-1/2 -translate-x-1/2 z-50 navbar">
      <div className="flex justify-center gap-4 bg-black/50 backdrop-blur-md px-4 py-2 shadow-lg rounded-lg">
        {/* Normal menu */}
        {menu.map((item) => {
          const active = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex flex-col items-center sm:flex-row sm:gap-2 px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                active
                  ? "bg-purple-600 text-white"
                  : "text-white hover:text-white"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="hidden sm:inline">{item.name}</span>
            </Link>
          );
        })}

        {/* WhatsApp button */}
        {contactMethods.map((method, index) => (
          <a
            key={index}
            href={method.action}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center sm:w-[45px] w-[35px] rounded-full p-1 hover:bg-purple-600 transition"
          >
            <img src={method.icon} alt="WhatsApp" className="w-full" />
          </a>
        ))}
      </div>
    </nav>
  );
}
