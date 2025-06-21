import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-4xl font-bold">Formula Review</h1>
      <p className="text-lg">
        Formula Review is a website that allows users to review Formula1 races.
      </p>
      <Link href="/dashboard" className="text-blue-500 hover:underline">
        Go to Dashboard
      </Link>
    </>
  );
}
