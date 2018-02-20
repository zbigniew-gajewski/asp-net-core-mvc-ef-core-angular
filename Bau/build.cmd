@echo off
cls
call npm install
call bower install
call gulp
call ng build
pause