const express = require("express");
const VideoModel = require('../models/video_model');
const mongoose = require('mongoose');
const router = express.Router();

router.get('', (req, res, next) => {

  VideoModel.find(function(err,videos){
    if(err){
      res.send(err);
    }
    else{
      res.json(videos);
    }
  })
});
router.get('/:id', (req, res, next) => {
  VideoModel.findOne({_id: req.params.id},function(err,video){
    if(err){
      res.send(err);
    }
    else{
      res.json(video);
    }
  });
});
router.put('/:id', (req, res, next) => { 
  console.log('UPDATE: Video by id: ' + req.params.id);
  var video = req.body;
  var editedVid = {};
  
  if(video.title){
    editedVid.title = video.title;
  }
  if(video.rating){
    editedVid.rating = video.rating;
  }
  if(video.length){
    editedVid.length = video.length;
  }
  if(video.genre){
    editedVid.genre = video.genre;
  }
  if(video.status){
    editedVid.status = video.status;
  }
  if(video.director){
    editedVid.director = video.director;
  }
  if(!editedVid){
    res.status(400);
  }else{
    VideoModel.update({_id: req.params.id},editedVid,{},function(err, video){
      if(err){
        res.send(err);
      }
      else{
        res.json(video);
      }
    });
  }
});
router.post('', (req, res, next) => {
  var video = req.body;
  if(!video.title || !video.rating || !video.length || !video.genre || ! video.director){
    res.status(400);
    console.log('Nope');
  }
  else{
    VideoModel.create(video);
  }
});
router.delete('/:id', (req, res, next) => {
  VideoModel.remove({_id: req.params.id},function(err,video){
    if(err){
      res.send(err);
    }
    else{
      res.json(video);
    }
  });
});

module.exports = router;
