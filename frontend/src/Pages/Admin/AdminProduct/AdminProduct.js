import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import Sidebar from '../Partials/Sidebar/Sidebar';
import Topbar from '../Partials/Topbar/Topbar';
import AdminSIngleProduct from './AdminSIngleProduct';
import {BASE_URL} from '../../../config';
import axios from 'axios';

const AdminProduct = () => {   
    const [compRndr, setCompRndr] = useState(false);  
    const [data, setData] = useState([]);
    const [noData, setNoData] = useState(false);
    const [isLoading, setIsLoading] = useState(true);


    const rerender = ()=>{
        setCompRndr(!compRndr)
    }


    useEffect(() => {        
        axios.get(`${BASE_URL}product`)
        .then(res=>{            
            console.log(res.status);
            if (res.status === 201) {
                setIsLoading(false)
                setData(res.data)                
            }else if(res.status === 202){
                setIsLoading(false)
                setNoData(true)
            }
        }).catch(e=>{
            setIsLoading(false)
            console.log(e);
        })
    },[compRndr]);
    return (
        <div>
            <title>Admin | Product</title>
            <Sidebar/>
            <Topbar pageName="Product"/>
            {
        isLoading &&
        <div className="admin_main_body">
          <h1 style={{color:"#00609D",textAlign:"center"}}>Loading...</h1>
        </div>
      }
      {
        noData &&
        <div className="admin_main_body">
          <h1 style={{color:"#00609D",textAlign:"center"}}>No Product Exists.</h1>
        </div>
      }
           <div className="admin_main_body">
                <Link className="addCategoryButton" exact to="/admin/product/add">Add New Product</Link>
      {
          !noData &&
      <>
                {!isLoading && 
                <div className="wrapper">
                    <table>
                        <thead>
                            <th>Product Code</th>
                            <th>Image</th>
                            <th>Category</th>
                            <th>Primary Material</th>
                            <th>Dimension</th>
                            <th>Warrenty</th>
                            <th>Price</th>
                            <th>Action</th>
                        </thead>
                        <tbody>
                            {
                                data && 
                                data.map((item, idx)=>(
                                    <AdminSIngleProduct rerender={rerender} data={item} serial={idx} key={idx}/>
                                ))
                            }

                        </tbody>
                    </table>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </div>}
                </>}
            </div>
          
        </div>
    );
}

export default AdminProduct;
