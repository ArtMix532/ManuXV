import { AlertTriangle, CheckCircle, Info, XCircle } from "lucide-react";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export function Alert({
  title,
  message,
  type = "info",
  duration = 3000,
  onClose,
}) {
  const [visible, setVisible] = useState(true);
  const [fade, setFade] = useState("opacity-0 scale-95");

  useEffect(() => {
    setTimeout(() => setFade("opacity-100 scale-100"), 50);

    const timer = setTimeout(() => {
      setFade("opacity-0 scale-95");
      setTimeout(() => {
        setVisible(false);
        if (onClose) onClose();
      }, 500);
    }, duration);

    return () => clearTimeout(timer);
  }, [title, message]);

  if (!visible) return null;

  const alertStyles = {
    info: "bg-blue-100 border-blue-500 text-blue-900",
    success: "bg-green-100 border-green-500 text-green-900",
    warning: "bg-yellow-100 border-yellow-500 text-yellow-900",
    error: "bg-red-100 border-red-500 text-red-900",
  };

  const alertIcons = {
    info: <Info className="h-6 w-6 mr-3" />,
    success: <CheckCircle className="h-6 w-6 mr-3" />,
    warning: <AlertTriangle className="h-6 w-6 mr-3" />,
    error: <XCircle className="h-6 w-6 mr-3" />,
  };

  return (
    <div
      className={`border-l-4 p-4 fixed w-3/4 z-10 rounded-md shadow-md flex items-center transition-all duration-500 transform ${fade} ${alertStyles[type]}`}
      role="alert"
    >
      {alertIcons[type]}
      <div>
        <p className="font-bold">{title}</p>
        <p className="text-sm">{message}</p>
      </div>
    </div>
  );
}

Alert.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["info", "success", "warning", "error"]),
  duration: PropTypes.number,
  onClose: PropTypes.func,
};
