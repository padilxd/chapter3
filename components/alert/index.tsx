import { ReactNode } from "react";

type AlertProps = {
  title: string;
  children: ReactNode;
  type?: "info" | "success" | "warning" | "danger";
};

export const AlertInfo = ({ title, children, type = "info" }: AlertProps) => {
  const colors = {
    info: {
      bg: "bg-sky-200",
      text: "text-sky-800",
      border: "border-sky-800",
      icon: "text-sky-800",
    },
    success: {
      bg: "bg-green-200",
      text: "text-green-800",
      border: "border-green-800",
      icon: "text-green-800",
    },
    warning: {
      bg: "bg-yellow-200",
      text: "text-yellow-800",
      border: "border-yellow-800",
      icon: "text-yellow-800",
    },
    danger: {
      bg: "bg-red-200",
      text: "text-red-800",
      border: "border-red-800",
      icon: "text-red-800",
    },
  };

  const style = colors[type];

  return (
    <div
      className={`my-2 ${style.bg} ${style.text} px-4 py-3 shadow-md rounded-md border-l-4 ${style.border}`}
      role="alert"
    >
      <div className="flex gap-2">
        {/* Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-7 h-7 ${style.icon}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m11.25 11.25.041-.02a.75.75 0 0 1
              1.063.852l-.708 2.836a.75.75 0 0 0
              1.063.853l.041-.021M21 12a9 9 0 1
              1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
          />
        </svg>

        {/* Isi Alert */}
        <div>
          <p className="font-bold text-lg">{title}</p>
          <div className="text-sm">{children}</div>
        </div>
      </div>
    </div>
  );
};
