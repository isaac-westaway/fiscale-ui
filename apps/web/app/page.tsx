export default function HomePage() {
  return (
    <main className="flex h-screen flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">Hello World</h1>
      <p className="text-fd-muted-foreground">
        You can open{' '}
        <a
          href="/docs"
          className="text-fd-foreground font-semibold underline"
        >
          /docs
        </a>{' '}
        and see the documentation.
      </p>
    </main>
  );
}
