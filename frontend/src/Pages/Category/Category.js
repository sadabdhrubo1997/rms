import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom'
import Footer from '../Partials/Footer/Footer';
import MenuBar from '../Partials/MenuBar/MenuBar';
import './Category.scss';
import SingleCard from './SingleCard';
import axios from 'axios'
import {BASE_URL} from '../../config'

const Category = () => {  
    useEffect(() => {
        window.scrollTo(0,0)
    }, []);

    const {id} = useParams();

    const [categoryName, setCategoryName] = useState('Loading.....');


    const [data, setdata] = useState(null);



    useEffect(() => {
        axios.get(`${BASE_URL}product/category/${id}`)
        .then(res=>{
            if (res.status === 201) {
                setdata(res.data)
                setCategoryName(res.data[0].category_name)
            }else{
                setdata(null)
                setCategoryName("No Product Exists")
            }
        })
    }, [id]);

    return (
        <div id="category">
            <title>{categoryName}</title>
            <MenuBar/>
            <div className="main_body body_height container">
                <h2>{categoryName}</h2>

                <div className="wrapper">
                    {
                        data &&
                        data.map((item,idx)=>(
                            <SingleCard key={idx} data={item}/>
                        ))
                    }
                  
                </div>
                
               

            </div>
            <Footer/>
        </div>
    );
}

export default Category;

