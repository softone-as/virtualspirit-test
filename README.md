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
