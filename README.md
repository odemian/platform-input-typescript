# Platform input typescript
Platform input typescript allows you to define platform specific files to be used.

### How it works
Platform input plugin allows switching between different files based on target platform.
When a file containing `.platform.` name is requested for load, it will be replaced by a different file, which provides implementation for teh target platform.
Platform is indicated in `vite.config.ts` file.

### What to do
* install dependencies (yarn or npm are good)
* run `dev` command to start development server
* run `build` command to create distribution bundle