export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="14"
        cy="25"
        r="10"
        stroke="var(--color-powder-blue)"
        strokeWidth="1.5"
      />
      <circle
        cx="26"
        cy="25"
        r="10"
        stroke="var(--color-rose)"
        strokeWidth="1.5"
      />
      <circle cx="20" cy="14" r="10" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
