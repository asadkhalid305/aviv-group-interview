# AVIV technical test solution

## Notes

### Implementation

<details>
  <summary>
    <style>
      summary::marker, summary {
        font-size: 22px;
        font-weight: 800;
        color: #fff;
      }
    </style>
    Frontend
  </summary>

#### Approach

I decided to break down the requirements into three tasks with the following priorities:

1. Listing Creation
2. Display Listings
3. Display Listing History

I prioritized them based on their impact. For instance, it wouldn't make sense to implement the **_Listing Creation_** task first if there is no data available for a new application.

Once I started working on the first task, I initially focused on implementing basic functionality. For example, I added all the missing fields, then incorporated a reducer to store the data, and finally implemented the API layer. After ensuring that the `POST` request was functioning correctly, I addressed the form's layout, validation, and other miscellaneous aspects.

Following the completion of the **_Listing Creation_** task, I followed the same approach for the remaining tasks.

During development, I created the necessary folders and files based on the requirements. For instance, when making a `POST` request, I added `utils/requests.ts` to handle API requests, providing code abstraction and scalability. Similarly, I added types and reducers folders to manage the respective code separately.

Once I finished all the tasks, I dedicated time to code refactoring, styling, and other miscellaneous improvements. Meanwhile, to make tests run, I adjusted the rendering of each test component just so that they get passed.

#### Missing Features

For the Frontend task, every requirement is covered except component testing (which is not a requirement I guess) due to time constraints.I can this over call how would I write these if I had time.

#### Time Distribution

Following is the approximate time duration spent on Frontend test.

- **_Discovery Phase_**; took me ~15 minutes to understand the overall project and Frontend requirements. I skipped the details at this point to discover them later.
- **_Listing Creation_**; took me ~120 minutes to complete the form implementation. This task required a lot of code setup e.g. reducer, types, API request, etc.
- **_Display Listings_**; took me ~20 minutes to dynamically render the listing card.
- **_Display Listing History_**; ~~took me ~30 minutes to create a price history page. This required setting up a new route, adding a new page, styling it and writing down its markup.~~
  I somehow overlooked that we have `PriceHistory` and `PriceHistoryCard` components already available. I spent time writing everything for it from scratch until I realized what have I done. Hence then I removed my slightly different implementation and modified the existing components. This change itself took some time hence this task took ~40 minutes, out of which 30 minutes were completely wasted due to my mistake.
- **_Miscellaneous_**; took me additional ~30 minutes in code refactoring, splitting and organizing code better, rendering components in testing files, setup the GitHub repo, and everything else that was needed which is not mentioned above.

Overall, it took me approximately 4 hours instead of 3 to finish this test including writing this file.

#### Assumptions

While developing, there were a few things that I assumed as follow

- The `ref` number of a listing is the same as its `id`.
- We do not need pagination on the listings.
- Form fields look better in a two-column grid.
- Timezone for a date is 'de-DE'.
- The currency will always be in Euros.

</details>

<details>
  <summary>
    <style>
      summary::marker, summary {
        font-size: 22px;
        font-weight: 800;
        color: #fff;
      }
    </style>
    Backend
  </summary>
  
#### Approach

In order to make `/listings/:id/prices` run as requested, the following steps were taken:

1. Fixed the `Dockerfile` in `typescript/serverless` to avoid the `groupid` error while running `docker-compose`.
2. Added a schema file to create the `price_history` table.
3. Added a repository for `price_history`.
4. Created the `getPriceHistory` and `insertPriceHistory` functions to handle database relations.
5. Defined helper functions like `tableRowToPriceHistory` and `priceHistoryToTableRow`.
6. Added appropriate types as arguments and return types, such as `Price` and `PriceWrite`.
7. Called `insertPriceHistory` with the appropriate parameters during listing creation and updation.

### Context

I would like to discuss my thoughts on this task.

In this test, I chose to create a database table for `price_history` to track price history. However, I believe we needed an `audit_trail` table instead. The purpose of an `audit_trail` table is to track changes in data, allowing us to go back in records and see what was changed and where. Having an `audit_trail` table would fulfill our needs and prove beneficial in the future when we require other changed information.

The reason I went with `price_history` is due to the existing implementation of the endpoint and the types we had from the documentation. I did not want to change the existing code.

The current implementation is correct, but I believe an `audit_trail` can be another effective way to achieve this feature for scalability.

### Missing Features

None. Everything that was asked in the requirements has been covered.

### Time Distribution

To complete this feature, it took me approximately 1 hour in total, including time spent reading about the serverless framework and writing this file. Additionally, I spent around 20 extra minutes refreshing my knowledge on Docker concepts.

</details>

## Questions

This section contains additional questions your expected to answer before the debrief interview.

- **What is missing with your implementation to go to production?**
  Performance measurements such as

  - Pagination on listings and price history.
  - More user-friendly form handling.
  - Placeholders for a respective listing field in a card in case its data is missing.
  - Appropriate testing. Right now Frontend test do nothing except just rendering the components.

  Also, there would be room for code improvement through PR reviews before the code goes into production.

- **How would you deploy your implementation?**
  With my limited knowledge, I say we do as follows

  1. Make a latest build of docker image using the `docker-compose` with the `docker build` command.
  2. Once we have the new image, push it to a container registry such as Docker Hub, Amazon ECR, etc.
  3. Adjust configuration file such as `serverless.ts`. Ensure that the Docker image details (e.g., registry URL, image name, and tag) are correctly specified in the serverless configuration.
  4. Use the Serverless Framework CLI to deploy the application finally by run the `serverless deploy` command.

- **If you had to implement the same application from scratch, what would you do differently?**

  - Create a better UI and UX.
  - Develop UI with a design system.
  - Extract routes to a separate folder.
  - Keep the form hidden from a listing page. For example, open a form dialog to create a listing in response to the user's click on the "Create New Listing" button which would be located somewhere above the listings.
  - Create types and endpoint to fetch price history from `audit_trail` table.

- **The application aims at storing hundreds of thousands listings and millions of prices, and be accessed by millions
  of users every month. What should be anticipated and done to handle it?**

  - Delay in resolving APIs due to large data. Can be prevented using pagination or lazy loading.
  - A lot of users, therefore, load on the server. Could be prevented using load balancers to distribute traffic. If further optimization is needed, then we could use concepts like sharding database.
  - The data is static to the most extent. Only gets updated when a new listing is added hence cache mechanism must be added on both ends for fast response time and to avoid repeating requests.

NB: You can update the [given architecture schema](./schemas/Aviv_Technical_Test_Architecture.drawio) by importing it
on [diagrams.net](https://app.diagrams.net/)
