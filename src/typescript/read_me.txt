1. npm install -g typescript

2. cd src/typescript

3. tsc test.ts

4. the new 'test.js' file will be created in current directory.

5. Install "File Watchers" plugin to IntelliJ IDEA
   (
     so next time when you go to test.ts file you will
     see pop-up messages asking to sync/map .ts file to .js one.
     It will watch ts-file to change and will translate one to another.
     The output will be two files, actually:
      1. *.js file
      2. *.js.map file - shows the translations like by line (ts-js mapping)
   )
   More info is here:
   https://www.jetbrains.com/idea/help/transpiling-typescript-to-javascript.html

   Nice video is here: https://www.youtube.com/watch?v=bNjH_2pUXJA

Here we go.

--
For IntelliJ IDEA: https://www.jetbrains.com/idea/help/typescript-support.html

https://github.com/borisyankov/DefinitelyTyped



