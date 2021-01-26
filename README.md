# RxVantage Frontend Coding Test

In this coding test you will need to create a **Vue** application that allows managing posts using [GraphQLZero API](https://graphqlzero.almansi.me/). The application should use a custom UI Kit.

GraphQLZero is an online GraphQL API that you can use to get fake data from a real backend. It provides 6 types of entities but you will be only using **Posts** in this coding test for CRUD operations.

## Required tech stack

- [Vue](https://vuejs.org/)
- [Apollo Client](https://www.apollographql.com/docs/react/) + [GraphQL](https://graphql.org/)
- [EmotionJS](https://emotion.sh/) or [Styled Components](https://styled-components.com/) (**EmotionJS** is prefered)

### Would be a plus

- [Styled System](https://styled-system.com/)
- [Lerna](https://github.com/lerna/lerna)

### Other tools

You are allowed to use other additional tools but **NOT third-party UI Kits**.

## Tasks

In the `design` folder you can find a Style Guide and Wireframes.
- [design/rxv_coding_design.fig](https://github.com/rxvantage/frontend-coding-test/blob/main/design/rxv_coding_design.fig) – Style Guide and Wireframes in Figma
- [design/rxv_coding_design.pdf](https://github.com/rxvantage/frontend-coding-test/blob/main/design/rxv_coding_design.pdf) – Style Guide and Wireframes in PDF
- [design/png/style_guide](https://github.com/rxvantage/frontend-coding-test/tree/main/design/png/style_guide) – Style Guide in PNG
- [design/png/wireframes](https://github.com/rxvantage/frontend-coding-test/tree/main/design/png/wireframes) – Wireframes in PNG
- [Live Preview in Figma](https://www.figma.com/file/0rIg69WnwDE3V9SGKDPc61/RxVantage-Coding?node-id=0%3A1)

Those Style Guides and Wireframes are provided as a reference so that it is easier to understand how the UX should look like. You are free to use custom styling as long as the User Experience is intuitive and allows you to perform all the necessary actions.

In case you are missing something in the Style Guide like spacings, feel free to implement your own based on your experience.

### Part 1: Сustom UI kit

Using Style Guide from the provided designs (or a custom one), create a custom UI kit with the following:

1. Theme with color palette, typography, spacings etc.
2. A set of required UI components for the application UX that use your custom theme

### Part 2: Post manager UX

Using your custom UI kit and provided wireframes, create a UX for managing posts.
Use https://graphqlzero.almansi.me/api for your queries and mutations

1. "Manage posts" screen requirements:
    - Preview all posts available (each post should have a `title` and an `author`)
    - Search for posts
    - Navigate to edit a post
    - Delete a post (with a confirmation dialog)
    - Navigate to create a new post
2. "Edit post" requirements
    - All fields should be required and validated on the client-side
    - Saving changes should redirect user back to "Manage posts" and show a success or error message for 5 seconds
    - The updated post should be present in the list of posts representing recent changes
3. "Delete post" requirements
    - When deleting a post, show a success or error message for 5 seconds
    - The post should disappear from the list of posts
    - If the post is deleted from the "Edit post" screen, redirect user back to the list of posts
4. "Create post" requirements
    - All fields should be required and validated on the client-side
    - Saving the post should redirect user back to "Manage posts" and show a success or error message for 5 seconds
    - The newely created post should be present in the list of posts

### Part 3: Additional tasks **(optional)**

Optional tasks are not required but recommended to implement at least one of them.

1. Integrate testing into your application
2. Ability to add posts to favorites with persistence on the client-side


## Application architecture recommendations

- Think of the application as it might grow to an enterprise level
- Think of the UI Kit as it might be reused in multiple projects

## Submitting your solution

Create a public repository on github and share a link with us.