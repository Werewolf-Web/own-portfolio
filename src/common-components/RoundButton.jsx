const RoundButton = ({
  title = "Hire me",
  iconSymbol = "↗",
  icon = true,
  hover = false,
  onClick,
  className = "",
  disabled = false,
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        group
        inline-flex items-center gap-2
        bg-orange-500 hover:bg-orange-600 active:bg-orange-700
        text-white font-semibold text-base
        px-6 py-3
        rounded-full
        transition-all duration-200
        ${hover ? "hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-orange-400/40" : ""}
        shadow-md
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
        cursor-pointer
        ${className}
      `}
    >
      <span>{title}</span>
      {icon && (
        <span
          className={`
            text-sm inline-block
            transition-transform duration-200
            ${hover ? "group-hover:translate-x-0.5 group-hover:-translate-y-0.5" : ""}
          `}
        >
          {iconSymbol}
        </span>
      )}
    </button>
  );
};

export default RoundButton;


// --- USAGE EXAMPLES ---

// Icon ON + Hover ON
// <Button title="Hire me" icon={true} hover={true} onClick={() => {}} />

// Icon OFF + Hover ON
// <Button title="Hire me" icon={false} hover={true} onClick={() => {}} />

// Icon ON + Hover OFF
// <Button title="Hire me" icon={true} hover={false} onClick={() => {}} />

// Custom icon symbol
// <Button title="Contact" icon={true} iconSymbol="→" hover={true} onClick={() => {}} />

// Disabled
// <Button title="Loading..." icon={true} hover={true} disabled={true} />

// Submit type
// <Button title="Send" type="submit" icon={false} hover={true} />