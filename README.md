# shminance
A finance app using Spectre API, Angular, and who knows what ruckus

This application is built with Angular 6 and LoopBack 4, but we may switch out of Angular later.

The root project is a superproject. The API server and UI can and should be considered two seperate applications.

Do this:
1. Utilize the root project for shared documentation.
1. Isomorphically share resources by storing them in the api server folder structure.
1. Utilize the root superproject to `npm init`, `ng new`, and `lb4`.

Not that:
1. Add documentation to the child folders.
1. Install packages or run-time code under the root project.

Maybe do this? Idk
1. Concurrent `npm start` and `npm test` tasks allowed in root
