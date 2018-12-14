const express = require("express");
const VideoModel = require('../models/video_model');
const mongoose = require('mongoose');
const router = express.Router();

router.get('', (req, res, next) => {
  VideoModel.find(function(err,videos){
    if(err){
      res.send(err);
    }else{
      res.json(videos);
    }})});
    router.get('/:id', (req, res, next) => {
      VideoModel.findOne({_id: req.params.id},function(err,video){
        if(err){
          res.send(err);
        }else{
          res.json(video);
        }});
      });
      router.put('/:id', (req, res, next) => { 
        var video = req.body;
        var updVideo = {};
        
        updVideo.title = video.title;
        updVideo.rating = video.rating;
        updVideo.length = video.length;
        updVideo.genre = video.genre;
        updVideo.rent = video.rent;
        updVideo.director = video.director;
        
        if(!updVideo){
          res.status(400);
        }else{
          VideoModel.update({_id: req.params.id},updVideo,{},function(err, video){
            if(err){
              res.send(err);
            }else{
              res.json(video);
            }});
          }});
          router.post('', (req, res, next) => {
            var video = req.body;
            if(!video.title || !video.rating || !video.length || !video.genre){
              res.status(400);
            }else{
              VideoModel.create(video);
            }});
            router.delete('/:id', (req, res, next) => {
              VideoModel.remove({_id: req.params.id},function(err,video){
                if(err){
                  res.send(err);
                }else{
                  res.json(video);
                }}); 
              });
module.exports = router;
              