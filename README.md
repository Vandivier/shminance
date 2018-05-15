# shminance
A finance app using Spectre API, Angular, and who knows what ruckus

This application is built with Angular 6 and LoopBack 4, but we may switch out of Angular later.

The root project is a superproject. The API server and UI can and should be considered two seperate applications.

schminance-ui [On StackBlitz](https://stackblitz.com/github/Vandivier/shminance/tree/master/shminance-ui)

Do this:
1. Utilize the root project for shared documentation.
2. Isomorphically share resources by storing them in the api server folder structure.
3. Utilize the root superproject to `npm init`, `ng new`, and `lb4`.

Not that:
1. Add documentation to the child folders.
2. Install packages or run-time code under the root project.

Maybe do this? Idk
1. Concurrent `npm start` and `npm test` tasks allowed in root

Misc links:
1. [Great Progressive Web App Experiences with Angular ('17)](https://www.youtube.com/watch?time_continue=52&v=C8KcW1Nj3Mw)
2. [What's new in Angular (Google I/O '18)](https://www.youtube.com/watch?v=jnp_ny4SOQE)
3. [PWA starter kit (Google I/O '18)](https://www.youtube.com/watch?v=we3lLo-UFtk)
4. [Build the future of the web with modern JavaScript (Google I/O '18)](https://www.youtube.com/watch?v=mIWCLOftfRw)
5. [Web performance made easy (Google I/O '18)](https://www.youtube.com/watch?v=Mv-l3-tJgGk)
