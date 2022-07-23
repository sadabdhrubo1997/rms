const router = require('express').Router()
const CategoryRoute = require("../allRoutes/CategoryRoute")
const ProductRoute = require("../allRoutes/ProductRoute")
const AlbumRoute = require("../allRoutes/AlbumRoute")
const PhotoRoute = require("../allRoutes/PhotoRoute")
const QuotationRoute = require("../allRoutes/QuotationRoute")
const MessageRoute = require("../allRoutes/MessageRoute")
const ContactRoute = require("../allRoutes/ContactRoute")
const DirectorRoute = require("../allRoutes/DirectorRoute")
const AdminRoute = require("../allRoutes/AdminRoute")
const NewArrivalRoute = require("../allRoutes/NewArrivalRoute")
const AboutUsRoute = require("../allRoutes/AboutUsRoute")
const OtherRoute = require("../allRoutes/OtherRoute")
const ServiceRoute = require("../allRoutes/ServiceRoute")
const HeaderSliderRoute = require("../allRoutes/HeaderSliderRoute")

//localhost:8000/api/aboutUs

router.get("/", function(req,res,next){
    console.log('hello');
})

router.use('/header-slider', HeaderSliderRoute)
router.use('/aboutUs', AboutUsRoute);
router.use('/service', ServiceRoute);
router.use('/other', OtherRoute);
router.use('/category', CategoryRoute);
router.use('/product', ProductRoute);
router.use('/newArrival', NewArrivalRoute);
router.use('/album', AlbumRoute)
router.use('/photo', PhotoRoute)
router.use('/quotation', QuotationRoute)
router.use('/message', MessageRoute)
router.use('/contact', ContactRoute)
router.use('/director', DirectorRoute)
router.use('/admin', AdminRoute)

module.exports = router