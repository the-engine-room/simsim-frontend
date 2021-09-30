#Nouabook Platform
The Nouabook Platform is a website created by SimSim that aims to increase dialogue between MPs and citizens in Morocco.

>Type of project: website

##What does it do?
The website allows users to send messages to their MPs, as well as post public questions and vote for questions posted by other users.

##Credits
The Engine Room helped SimSim to redesign Nouabook for enhanced mobile responsiveness and improved user experience to maximize constructive citizen-MP dialogue. After a needs-assessment was done, UX researcher Ruth Miller was brought in. We contracted a front-end coder Andrew McNaughton, who worked with The Engine Room’s in house front-end developer, Alan Zard to convert the Sketch files with the redesigned pages, into development files. As for backend implementation, the SimSim team decided to bring Software Center (Morocco) to develop this final stage of the process. The project was paid by SimSim.

##Note:
This project is no longer maintained

# Notes
This project is no longer maintained

# simsim-frontend
this is the frontend codebase for SimSim's Nouabook Platform.

After cloning the repo, navigate to the /assets directory

Run

    npm install
To download all needed depencies and packages

In assets/gulpfile.js, change the proxy variable to your local url.

Headers and footers are loaded asynchronously. They can be found in the

`/inc`

directory.

Once these are correctly imported, line 23 of /assets/src/js/modules/theme.js can be commented out and the distribution files rebuilt.

## Gulp Tasks

There are two different tasks configured.

    gulp dev
Task is intended for development. Has Browser Sync, does not minify, does not optimize images. Works off the /assets/src/ directory

    gulp build

task is for production deployment, no watch progress, minifies everything, optimizies images, copies all minified and optimized files to /assets/dist. **These are the files that are meant to be used in production**
