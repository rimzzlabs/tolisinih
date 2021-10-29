export default function Container({ children, Main, Data, className = '' }) {
  return Main && Data ? (
    <header data-cy={Data} className={`flex items-center h-12 lg:h-28 px-8 lg:px-0 max-w-5xl mx-auto ${className}`}>
      {children}
    </header>
  ) : !Data ? (
    <main className={`max-w-5xl mx-auto px-4 lg:px-0 ${className}`}>{children}</main>
  ) : null
}
