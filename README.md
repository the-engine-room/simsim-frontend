# simsim-frontend
this is the frontend codebase for SimSim's Nouabook Platform.

# Notes

After cloning the repo, navigate to the /assets directory

Run 

    npm install
To download all needed depencies and packages

In assets/gulpfile.js, change the proxy variable to your local url

    gulp dev 
task is intended for development. has Browser Sync, does not minify, does not optimize images 

    gulp build 

task is for production deployment, no watch progress, minifies everything, optimizies images
