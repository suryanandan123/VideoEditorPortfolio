function Button({
  href,
  onClick,
  children,
  variant = "primary",
  external = false,
  className = "",
  type = "button",
}) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm md:text-base transition-all duration-300 focus-visible:outline-2 focus-visible:outline-red-500 focus-visible:outline-offset-2";

  const variants = {
    primary:
      "bg-red-500 text-white hover:bg-red-600 shadow-lg shadow-red-500/20 hover:shadow-red-500/40 hover:-translate-y-0.5",
    outline:
      "border border-zinc-700 text-white hover:border-red-500 hover:text-red-500 hover:-translate-y-0.5",
    ghost:
      "bg-zinc-900 border border-zinc-800 text-white hover:border-red-500 hover:text-red-500",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

export default Button;
