# Virtual Spirit | Skill Test

## Project Test Description

Small project test:

1. request GET data from here https://jsonplaceholder.typicode.com/posts/1 till https://jsonplaceholder.typicode.com/posts/100 one by one then load it as component, layout can use bootstrap or framework else.
2. POST data to https://jsonplaceholder.typicode.com/posts and load it as first component
3. PATCH data https://jsonplaceholder.typicode.com/posts/:post_id have to be dynamic, user can choose which post item should be edited by button
4. DELETE data https://jsonplaceholder.typicode.com/posts/:post_id user can choose which post item can be deleted by button

Use ReactJS, Redux, Redux-Saga

## Notes

There are some bugs from JSONPlaceholder Public API that resource will not be really updated on the server but it will be faked as if. The bug caused some effect:

1. Data manipulation like POST, PATCH, DELETE not really affected the resource, but the response from http server is work perfectly
2. Getting newest data from POST Request can't load it as first because it won't saved on the resource.

## Technical Question

1. What’s ur experience in ReactJs

-   I was develop any project on frontend development things with React JS. Specially for slicing design into website, integrating data with backend apps, handling many logic that required to do in client sides.

2. What’s library do you normally used?

-   Axios: for sending asynchronous HTTP requests to the REST Endpoints.
-   Ant Design, Bootstrap: UI libraries for styling the website
-   Styled Component: for making some component that was styled
-   React Router: for routing and navigating the page
-   Redux: for state management
-   React Router Dom: for navigating from one to other page
-   etc

3. How to you encounter performance issue?

-   Working with management of HTTP request to not overloading too much
-

4. Are you familiar dealing with SEO?

-   A little bit, like in <head> tag html, include meta, title, etc

5. How do you handle caching in React?

-   There is some techniques, but in react there are some hooks that can used for caching like useMemo, useCallback, useRef

6. How do you handle offline in React?
   a. In pure javascript we can detect if the internet is not connectied using navigator.onLine property

7. Are you good at Sass, bootstrap, CSS?
   a. I'm good enough in each that you was mentioned it.

8. Have you handle admin theme in ReactJs?
   a. Yes, recently I have been working on it in my final project

9. Are you okay to go through a small test?
   a. If you mean unit tests, I don't have enough experience with them, but if needed to working on them, I'm fine but I'll need time to learn it first or while working with the project.
