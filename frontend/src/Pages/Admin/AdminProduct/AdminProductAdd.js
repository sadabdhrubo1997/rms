import React, {useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import Sidebar from '../Partials/Sidebar/Sidebar';
import Topbar from '../Partials/Topbar/Topbar';
import './AdminProduct.scss';
import axios from 'axios'
import {BASE_URL} from '../../../config';

const AdminProductAdd = () => {

  let history = useHistory()

  const [adding, setAdding] = useState(false);

  const [category, setCategory] = useState([]);

  const [productData,
    setProductData] = useState({cat_id: '', product_no:'', primaryMaterial: '', dimension: '', warrenty: '', price: ''});
  const [productImage,
    setProductImage] = useState(null);
  const [productImageBase64,
    setProductImageBase64] = useState('');

  const submitHandler = (e) => {
    e.preventDefault()
    setAdding(true)
    const formData = new FormData()
    formData.append("cat_id",productData.cat_id)
    formData.append("product_no",productData.product_no)
    formData.append("primary_material",productData.primaryMaterial)
    formData.append("dimension",productData.dimension)
    formData.append("warrenty",productData.warrenty)
    formData.append("price",productData.price)
    formData.append("productImage",productImage)
   
    // return console.log(`${BASE_URL}product`);

   axios.post(`${BASE_URL}product`,formData,{
      headers:{
        authorization:localStorage.getItem("token")
      }
    }).then(res=>{
      if (res.status === 201) {
        history.push('/admin/product')
      }
    })

  }

  const changeHandler = (e) => {
    setProductData({
      ...productData,
      [e.target.name]: e.target.value
    })
  }

  const fileChangeHandler = (e) => {
    let file = e.target.files[0];
    setProductImage(file)

    if (file) {
      let reader = new FileReader();

      reader.onload = () => {
        // console.log('RESULT', reader.result)
        setProductImageBase64(reader.result)
      };
      reader.readAsDataURL(file);

    }

  }


  useEffect(() => {
    axios.get(`${BASE_URL}category`)
    .then(res=>{
      if (res.status === 201) {
        setCategory(res.data);
      }    
    })
  },[]);

  return (
    <div id="adminProductAdd">
      <title>Admin | Add Product</title>
      <Sidebar/>
      <Topbar pageName="Add Product"/>
      <div className="admin_main_body addCategoryPage">
        <form autoComplete="off" className="admin_form" onSubmit={submitHandler}>
          <select name="cat_id" id="productCategory" onChange={changeHandler}>
              {category.length && <option value selected={true} disabled>Select Category</option>}
              {
                category &&
                category.map((item,idx)=>(
                  <option key={idx} value={item.category_id}>{item.category_name}</option>
                ))
              }

              {
                !category.length &&
                <option value selected disabled>No Category Exists</option>
              }
              
          </select>  
          <input
            type="text"
            onChange={changeHandler}
            placeholder="Product No"
            name="product_no"
            value={productData.product_no}
            id="productNo"/>
          <input
            type="text"
            onChange={changeHandler}
            placeholder="Product Primary Material"
            name="primaryMaterial"
            value={productData.primaryMaterial}
            id="primaryMaterial"/>
          <input
            type="text"
            onChange={changeHandler}
            placeholder="Product Dimension"
            name="dimension"
            value={productData.dimension}
            id="dimension"/>
          <input
            type="text"
            onChange={changeHandler}
            placeholder="Product Warranty"
            name="warrenty"
            value={productData.warrenty}
            id="warrenty"/>
          <input
            type="text"
            onChange={changeHandler}
            placeholder="Product Price"
            name="price"
            value={productData.price}
            id="price"/>
            {productImage && <div className="image_wrapper">
            <img
              className="category_thumbnail"
              src={productImageBase64}
              alt="Category Thumbnail"/>
            <br/>
            <br/>
          </div>
            }
          <label htmlFor="image">{productImage
              ? "Change Image"
              : "Select Image"}</label>
          <input type="file" name="image" id="image" onChange={fileChangeHandler}/> 
          {productImage && <button type="submit">{adding? "Submitting" :"Submit"}</button>}
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </form>

        <div className="read_board">
          <p>
            For better view, image size is :-
            <br/>
            Width =
            <b>290px</b>
            <br/>
            Height =
            <b>370px</b>
          </p>
        </div>

      </div>
     <br/><br/>

    </div>
  );
}

export default AdminProductAdd;
