export default function Button({
  type = "button",
  disabled,
  children,
  ...props
}) {
  return (
    <button {...props} type={type} disabled={disabled}>
      {children}
    </button>
  );
}
