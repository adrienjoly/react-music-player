# react-music-player

A web app made with react.js, that can play a list of tracks from various streaming services.

## What is this?

This web app defines a Playem component that takes the following attributes:

- `tracks`: a list of tracks in JSON format, [as exported from my whyd profile](http://whyd.com/adrien?export=json&limit=3)
- `sc_api_key`: the api key of your soundcloud developer account, needed for streaming music from soundcloud.com

Based on the provided list of tracks, it loads and instanciates [PlayemJS](http://github.com/adrienjoly/playemjs) using browserify, and streams the tracks.

## How to install and run

After cloning this repo, just type:

    npm install
    npm start

Then browse [http://localhosh:3000/](http://localhosh:3000/)
