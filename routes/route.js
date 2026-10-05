import express from "express"
import { home } from "../controller/home.js";
import { about } from "../controller/about.js";
import { resume } from "../controller/resume.js";
import { services } from "../controller/services.js";
import { portfolio } from "../controller/portfolio.js";
import { contact,userContact } from "../controller/contact.js";
const route = express.Router();


route.get('/',home);
route.get('/about',about);
route.get('/resume',resume);
route.get('/services',services);
route.get('/portfolio',portfolio);
route.get('/contact',contact);
route.post('/contact',userContact)


export default route;



