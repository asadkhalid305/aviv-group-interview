# AVIV technical test solution

## Notes

### Implementation Approach

I decided to break down the requirements into three tasks with the following priorities:

1. Listing Creation
2. Display Listings
3. Display Listing History

I prioritized them based on their impact. For instance, it wouldn't make sense to implement the **_Listing Creation_** task first if there is no data available for a new application.

Once I started working on the first task, I initially focused on implementing basic functionality. For example, I added all the missing fields, then incorporated a reducer to store the data, and finally implemented the API layer. After ensuring that the `POST` request was functioning correctly, I addressed the form's layout, validation, and other miscellaneous aspects.

Following the completion of the **_Listing Creation_** task, I followed the same approach for the remaining tasks.

During development, I created the necessary folders and files based on the requirements. For instance, when making a `POST` request, I added `utils/requests.ts` to handle API requests, providing code abstraction and scalability. Similarly, I added types and reducers folders to manage the respective code separately.

Once I finished all the tasks, I dedicated time to code refactoring, styling, and other miscellaneous improvements. Meanwhile, to make tests run, I adjusted the rendering of each test component just so that they get passed.

### Missing Features

For the Frontend task, every requirement is covered except component testing (which is not a requirement I guess) due to time constraints.

### Time Distribution

First I attempted only the Frontend test.

- **_Discovery Phase_**; took me ~15 minutes to understand the overall project and Frontend requirements. I skipped the details at this point to discover them later.
- **_Listing Creation_**; took me ~120 minutes to complete the form implementation. This task required a lot of code setup e.g. reducer, types, API request, etc.
- **_Display Listings_**; took me ~20 minutes to dynamically render the listing card.
- **_Display Listing History_**; took me ~30 minutes to create a price history page. This required setting up a new route, adding a new page, styling it and writing down its markup.
- **_Miscellaneous_**; took me additional ~30 minutes in code refactoring, splitting and organizing code better, rendering components in testing files, setup the GitHub repo, and everything else that was needed which is not mentioned above.

Overall, it took me approximately 4 hours instead of 3 to finish this test including writing this file.

### Assumptions

While developing, there were a few things that I assumed as follow

- The `ref` number of a listing is the same as its `id`.
- We do not need pagination on the listings.
- Form fields look better in a two-column grid.
- Timezone for a date is 'de-DE'.
- The currency will always be in euros.

## Questions

This section contains additional questions your expected to answer before the debrief interview.

- **What is missing with your implementation to go to production?**
  Performance measurements such as

  - Pagination on listings and price history.
  - More user-friendly form handling.
  - Placeholders for a respective listing field in a card in case its data is missing.
  - Complete integration tests, right now they do not do anything rather than just rendering the component.

  There could be room for code improvement through PR reviews.

- **How would you deploy your implementation?**
  I am assuming this question is related to the Backend test. However, with my limited knowledge, I say we need to make a new docker image using the Dockerfile with the `docker build` command. Once we have the new image we can deploy it to whichever cloud we use e.g. ECS/EC2.

- **If you had to implement the same application from scratch, what would you do differently?**

  - Create a better UI and UX.
  - Develop UI with a complete design system.
  - Extract routes to a separate folder.
  - Keep the form hidden from a listing page. For example, give a form dialog to create a listing.

- **The application aims at storing hundreds of thousands listings and millions of prices, and be accessed by millions
  of users every month. What should be anticipated and done to handle it?**

  - Delay in resolving APIs due to large data. Can be prevented using pagination or lazy loading.
  - A lot of users, therefore, load on the server. Could be prevented using load balancers to distribute traffic.
  - The data is static to the most extent. Only gets updated when a new listing is added hence cache mechanism must be added on both ends for fast response time and to avoid repeating requests.

NB: You can update the [given architecture schema](./schemas/Aviv_Technical_Test_Architecture.drawio) by importing it
on [diagrams.net](https://app.diagrams.net/)
