const { Router }  = require("express")
const { Country , Activity} = require("../db");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const router = Router();