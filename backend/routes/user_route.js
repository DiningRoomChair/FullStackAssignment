const express = require("express");
const UserModel = require('../models/user_model');
const mongoose = require('mongoose');
const router = express.Router();

router.get('', (req, res, next) => {
  UserModel.find(function(err,users){
    if(err){
      res.send(err);
    }else{
      res.json(users);
    }
  })});
  
  router.get('/:id', (req, res, next) => {
    UserModel.findOne({_id: req.params.id},function(err,user){
      if(err){
        res.send(err);
      }else{
        res.json(user);
      }
    });
  });
  
  router.put('/:id', (req, res, next) => {
    var user = req.body;
    var changedUser = {};
    
    changedUser.firstName = user.firstName;
    changedUser.lasttName = user.lastName;
    changedUser.email = user.email;
    changedUser.password = user.password;
    if(!changedUser){
      res.status(400);
    }else{
      UserModel.update({_id: req.params.id},changedUser,{},function(err, user){
        if(err){
          res.send(err);
        }else{
          res.json(user);
        }
      });
    }});
    
    router.post('', (req, res, next) => {
      var user = req.body;
      if(!user.firstName || !user.lastName|| !user.email || !user.password){
        res.status(400);
      }else{
        UserModel.save(user,function(err, user){
          if(err){
            res.send(err);
          }else{
            res.json(user);
          }
        });
      }});
      router.delete('/:id', (req, res, next) => {
        UserModel.remove({_id: req.params.id},function(err,user){
          if(err){
            res.send(err);
          }else{
            res.json(user);
          }
        });
      });
      module.exports = router;
      