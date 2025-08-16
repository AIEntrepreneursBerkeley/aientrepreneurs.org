export const Lines = () => (
  <div className="pointer-events-none absolute inset-0 flex justify-center">
    <div className="xs:grid-cols-2 grid size-full max-w-7xl grid-cols-1 gap-3.5 px-4 md:grid-cols-3">
      <div className="border-foreground/10 border-x border-dashed" />
      <div className="border-foreground/10 border-x border-dashed" />
      <div className="border-foreground/10 hidden border-x border-dashed md:block" />
    </div>
  </div>
);
