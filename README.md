# simsim-frontend
this is the frontend codebase for SimSim's Nouabook Platform.

# Notes

After cloning the repo, navigate to the /assets directory

Run 

    npm install
To download all needed depencies and packages

In assets/gulpfile.js, change the proxy variable to your local url.

## Gulp Tasks

There are two different tasks configured. 

    gulp dev 
Task is intended for development. Has Browser Sync, does not minify, does not optimize images. Works off the /assets/src/ directory 

    gulp build 

task is for production deployment, no watch progress, minifies everything, optimizies images, copies all minified and optimized files to /assets/dist. **These are the files that are meant to be used in production**


