@echo off

REM Build the Angular project
ng build --base-href "https://davejubasan.github.io/theadave-a-z/"

REM Deploy to GitHub Pages
npx angular-cli-ghpages --dir=dist/a-z/browser