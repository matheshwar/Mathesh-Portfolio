// Standard section shell: consistent vertical rhythm + max width + anchor id.
export default function Section({ id, children, className = '' }) {
  return (
    <section id={id} className={`scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  )
}
