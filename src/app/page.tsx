import HomeClient from "./page.client";

export default function Home() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="mb-4 text-4xl font-bold">BoxBox BoxBox</h1>
        <p className="text-muted-foreground text-lg">
          Your premier destination for Formula 1 race reviews and ratings
        </p>
      </div>

      <HomeClient />
    </div>
  );
}
