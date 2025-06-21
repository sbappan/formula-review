import { latestReviews } from "@/lib/mock-data";

export default function DashboardPage() {
  return (
    <section>
      <h1 className="mb-4 text-2xl font-bold">
        Latest Reviews for Austrian Grand Prix 2025
      </h1>
      <div className="space-y-4">
        {latestReviews.map((review) => (
          <div key={review.id} className="rounded-lg border p-4">
            <div className="mb-2 flex items-center">
              <p className="font-semibold">{review.author}</p>
              <p className="ml-auto text-sm text-gray-500">
                {"⭐".repeat(review.rating)}
              </p>
            </div>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
