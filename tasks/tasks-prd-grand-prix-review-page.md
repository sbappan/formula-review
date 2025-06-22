## Relevant Files

- `src/app/races/[raceId]/page.tsx` - This will be the main page component for the race review page.
- `src/components/races/race-review-form.tsx` - A new component for the review submission form.
- `src/components/races/race-review-list.tsx` - A new component to display the list of reviews.
- `src/components/races/race-review-card.tsx` - A new component for displaying a single review item.
- `src/lib/types.ts` - To define the TypeScript types for Race and Review data.
- `src/lib/mock-data.ts` - To add the mock data for a sample race and its reviews.

### Notes

- We will use a dynamic route `[raceId]` to represent a specific race page.
- New components will be created within a new `races` subdirectory inside `src/components` to keep the code organized.

## Tasks

- [ ] 1.0 Setup Mock Data and Types
  - [x] 1.1 Define `Race` and `Review` types in `src/lib/types.ts`.
  - [x] 1.2 Create mock data for one sample Grand Prix and several reviews in `src/lib/mock-data.ts`.
- [ ] 2.0 Create the Race Review Page Structure
  - [ ] 2.1 Create the directory `src/app/races/[raceId]`.
  - [ ] 2.2 Create the page file `src/app/races/[raceId]/page.tsx`.
  - [ ] 2.3 Add a basic layout to the page, including a heading for the race name.
  - [ ] 2.4 Fetch the mock race data and pass it as a prop to the page component.
- [ ] 3.0 Implement Review Submission Form
  - [ ] 3.1 Create the `race-review-form.tsx` component.
  - [ ] 3.2 Add a form with a `textarea` for the review and a `button` for submission.
  - [ ] 3.3 Add a star rating component to the form (we can use an existing library or a simple custom one).
  - [ ] 3.4 Import and render the form on the main review page.
- [ ] 4.0 Implement Reviews List
  - [ ] 4.1 Create the `race-review-list.tsx` component that takes a list of reviews as a prop.
  - [ ] 4.2 Create the `race-review-card.tsx` component to display a single review's details (author, rating, text).
  - [ ] 4.3 `race-review-list.tsx` should map over the reviews and render a `race-review-card.tsx` for each one.
  - [ ] 4.4 Import and render the list on the main review page, passing the mock reviews data.
- [ ] 5.0 Assemble and Style the Page
  - [ ] 5.1 Use `shadcn/ui` components (`Card`, `Button`, `Textarea`, etc.) to style the form and review list.
  - [ ] 5.2 Arrange the form and the review list on the page using Flexbox or CSS Grid.
  - [ ] 5.3 Ensure the page is responsive and follows the existing site's design language.
