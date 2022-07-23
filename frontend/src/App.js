import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.scss';
import HomePage from './Pages/HomePage/HomePage';
import NotFound from './Pages/NotFound/NotFound';
import Quotation from './Pages/Quotation/Quotation';
import AboutUs from './Pages/AboutUs/AboutUs';
import Services from './Pages/Services/Services';
import Contact from './Pages/Contact/Contact';
import Category from './Pages/Category/Category';
import Gallery from './Pages/Gallery/Gallery';
import SingleAlbum from './Pages/Gallery/SingleAlbum';
import Dashboard from './Pages/Admin/Dashboard/Dashboard';
import Login from './Pages/Admin/Login/Login';
import AdminAlbum from './Pages/Admin/AdminAlbum/AdminAlbum';
import AdminCategory from './Pages/Admin/AdminCategory/AdminCategory';
import AdminProduct from './Pages/Admin/AdminProduct/AdminProduct';
import AdminMessage from './Pages/Admin/AdminMessage/AdminMessage';
import AdminQuotation from './Pages/Admin/AdminQuotation/AdminQuotation';
import AdminContact from './Pages/Admin/AdminContact/AdminContact';
import AdminSetting from './Pages/Admin/AdminSetting/AdminSetting';
import AdminDirector from './Pages/Admin/AdminDirector/AdminDirector';
import AdminCategoryAdd from './Pages/Admin/AdminCategory/AdminCategoryAdd';
import AdminProductAdd from './Pages/Admin/AdminProduct/AdminProductAdd';
import AdminAlbumCreate from './Pages/Admin/AdminAlbum/AdminAlbumCreate';
import AdminDirectorAdd from './Pages/Admin/AdminDirector/AdminDirectorAdd';
import SingleMessageView from './Pages/Admin/AdminMessage/SingleMessageView';
import AdminSingleAlbum from './Pages/Admin/AdminAlbum/AdminSingleAlbum';
import AdminAlbumUpload from './Pages/Admin/AdminAlbum/AdminAlbumUpload';
import ForgetPassword from './Pages/Admin/ForgetPassword/ForgetPassword';
import ResetForgottedPassword from './Pages/Admin/ForgetPassword/ResetForgottedPassword';
import AdminDirectorEdit from './Pages/Admin/AdminDirector/AdminDirectorEdit';
import AdminCategoryEdit from './Pages/Admin/AdminCategory/AdminCategoryEdit';
import AdminProductEdit from './Pages/Admin/AdminProduct/AdminProductEdit';
import AlbumEdit from './Pages/Admin/AdminAlbum/AlbumEdit';
import AdminAboutUs from './Pages//Admin/AdminAboutUs/AdminAboutUs'
import AdminNewArrival from './Pages//Admin/AdminNewArrival/AdminNewArrival'
import AdminSIngleNewArrival from './Pages/Admin/AdminCategory/AdminSingleCategory';
import AdminNewArrivalAdd from './Pages/Admin/AdminNewArrival/AdminNewArrivalAdd';
import AdminNewArrivalEdit from './Pages/Admin/AdminNewArrival/AdminNewArrivalEdit';
import AdminService from './Pages/Admin/AdminService/AdminService';
import AdminOther from './Pages/Admin/AdminOther/AdminOther';
import LifeStyleAndIndustries from './Pages/LifeStyleAndIndustries/LifeStyleAndIndustries';
import AdminHeaderSlider from './Pages/Admin/AdminHeaderSlider/AdminHeaderSlider';
import ExportAndImport from './Pages/ExportAndImport/ExportAndImport';

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
                    
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/get-a-quotation" component={Quotation}/>
          <Route exact path="/about-us" component={AboutUs}/>
          <Route exact path="/our-companies" component={LifeStyleAndIndustries}/>
          <Route exact path="/gallery" component={Gallery}/>
          <Route exact path="/gallery/album/:id" component={SingleAlbum}/>
          <Route exact path="/services" component={Services}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/category/:id" component={Category}/>
          <Route exact path="/export-and-import" component={ExportAndImport}/>
          
          {/* Admin Routes */}
          <Route exact path="/admin" component={Dashboard}/>
          <Route exact path="/admin/login" component={Login}/>
          <Route exact path="/admin/header-slider" component={AdminHeaderSlider}/>
          <Route exact path="/admin/about-us" component={AdminAboutUs}/>
          <Route exact path="/admin/services" component={AdminService}/>
          <Route exact path="/admin/other" component={AdminOther}/>
          <Route exact path="/admin/new-arrival" component={AdminNewArrival}/>
          <Route exact path="/admin/new-arrival/add" component={AdminNewArrivalAdd}/>
          <Route exact path="/admin/new-arrival/edit/:id" component={AdminNewArrivalEdit}/>
          <Route exact path="/admin/category" component={AdminCategory}/>
          <Route exact path="/admin/category/add" component={AdminCategoryAdd}/>
          <Route exact path="/admin/category/edit/:id" component={AdminCategoryEdit}/>
          <Route exact path="/admin/product" component={AdminProduct}/>
          <Route exact path="/admin/product/add" component={AdminProductAdd}/>
          <Route exact path="/admin/product/edit/:id" component={AdminProductEdit}/>
          <Route exact path="/admin/album" component={AdminAlbum}/>
          <Route exact path="/admin/album/create" component={AdminAlbumCreate}/>
          <Route exact path="/admin/album/edit/:id" component={AlbumEdit}/>
          <Route exact path="/admin/album/upload/:id" component={AdminAlbumUpload}/>
          <Route exact path="/admin/album/:id" component={AdminSingleAlbum}/>
          <Route exact path="/admin/message" component={AdminMessage}/>
          <Route exact path="/admin/message/:id" component={SingleMessageView}/>
          <Route exact path="/admin/quotation" component={AdminQuotation}/>
          <Route exact path="/admin/contact" component={AdminContact}/>
          <Route exact path="/admin/setting" component={AdminSetting}/>
          <Route exact path="/admin/director" component={AdminDirector}/>
          <Route exact path="/admin/director/add" component={AdminDirectorAdd}/>
          <Route exact path="/admin/director/edit/:id" component={AdminDirectorEdit}/>
          <Route exact path="/admin/forget/password" component={ForgetPassword}/>
          <Route exact path="/admin/forget/password/:params" component={ResetForgottedPassword}/>

          {/* not found */}
          <Route component={NotFound}/>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
