type HoneypotFieldProps = {
  name: string;
};

/** Bot trap — visually off-screen; must not use display:none. */
export function HoneypotField({ name }: HoneypotFieldProps) {
  return (
    <div
      aria-hidden="true"
      className="absolute top-auto left-[-10000px] h-px w-px overflow-hidden"
    >
      <label htmlFor={name}>Leave blank</label>
      <input
        id={name}
        name={name}
        type="text"
        tabIndex={-1}
        autoComplete="off"
        defaultValue=""
      />
    </div>
  );
}
