import React, {useState, useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import Sidebar from '../Partials/Sidebar/Sidebar';
import Topbar from '../Partials/Topbar/Topbar';
import './AdminProduct.scss';
import axios from 'axios'
import {BASE_URL, PUBLIC_URL} from '../../../config';

const AdminProductEdit = () => {
  let {id} = useParams();

  let history = useHistory()

  const [category,
    setCategory] = useState([]);

  const productData = useState({
    cat_id: '',
    productNo: '',
    primaryMaterial: '',
    dimension: '',
    warrenty: '',
    price: ''
  });
  const [cat_id,
    setCatId] = useState(null);
  const [productNo,
    setProductNo] = useState('');
  const [primary_material,
    setPrimaryMaterial] = useState(null);
  const [dimension,
    setDimension] = useState(null);
  const [warrenty,
    setWarrenty] = useState(null);
  const [price,
    setPrice] = useState(null);
  const [dbImage,
    setDbImage] = useState(null);
  const [productImage,
    setProductImage] = useState(null);
  const [productImageBase64,
    setProductImageBase64] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [isProcessing, setIsProcessing] = useState(false);

  const submitHandler = async(e) => {
    e.preventDefault()
    setIsProcessing(true)

    const formData = new FormData()

    if (!productImage) {
      formData.append("cat_id", cat_id)
      formData.append("product_no", productNo)
      formData.append("primary_material", primary_material)
      formData.append("dimension", dimension)
      formData.append("warrenty", warrenty)
      formData.append("price", price)

      let data = {
        "cat_id": cat_id,
        "product_no": productNo,
        "primary_material": primary_material,
        "dimension": dimension,
        "warrenty": warrenty,
        "price": price
      }
      await axios
        .put(`${BASE_URL}product/withOutImage/${id}`, data)
        .then(res => {
          if (res.status === 201) {
            history.push("/admin/product")
          }
        })
        .catch(e => console.log(e))
    } else if (productImage) {
      formData.append("cat_id", cat_id)
      formData.append("product_no", productNo)
      formData.append("primary_material", primary_material)
      formData.append("dimension", dimension)
      formData.append("warrenty", warrenty)
      formData.append("price", price)
      formData.append("productImage", productImage)

      await axios
        .put(`${BASE_URL}product/withImage/${id}`, formData)
        .then(res => {
          setIsProcessing(true)

          if (res.status === 201) {
            history.push("/admin/product")
          }
        })
        .catch(e => console.log(e))
    }
  }

  const changeHandlerSelect = (e) => {
    setCatId(e.target.value)
  }

  const changeHandlerProductNo = (e) => {
    console.log(e.target.value);
    setProductNo(e.target.value)
  }

  const changeHandlerPrice = (e) => {
    setPrice(e.target.value)
  }

  const changeHandlerDimension = (e) => {
    setDimension(e.target.value)
  }

  const changeHandlerWarrenty = (e) => {
    setWarrenty(e.target.value)
  }

  const changeHandlerPrimatyMaterial = (e) => {
    setPrimaryMaterial(e.target.value)
  }



  const fileChangeHandler = (e) => {
    let file = e.target.files[0];
    setProductImage(file)

    if (file) {
      let reader = new FileReader();

      reader.onload = () => {
        setProductImageBase64(reader.result)
      };
      reader.readAsDataURL(file);
    }

  }

  useEffect(() => {
    axios
      .get(`${BASE_URL}product/${id}`)
      .then(res => {
        if (res.status === 201) {
          setCatId(res.data[0].cat_id)
          setProductNo(res.data[0].product_no)
          setPrimaryMaterial(res.data[0].primary_material)
          setDimension(res.data[0].dimension)
          setWarrenty(res.data[0].warrenty)
          setPrice(res.data[0].price)
          setDbImage(res.data[0].product_image)
          setIsLoading(false)
        }
      })
    axios
      .get(`${BASE_URL}category`)
      .then(res => {
        if (res.status === 201) {
          setCategory(res.data)
        }
      })
  },[]);

  return (
    <div id="adminProductAdd">
      <title>Admin | Edit Product</title>
      <Sidebar/>
      <Topbar pageName="Edit Product"/> 
      
      {productData && <div className="admin_main_body addCategoryPage">
      {
        isLoading &&
        <h1 style={{color:"#00629F"}}>Loading...</h1>
      }
        {
          !isLoading &&
          <>
          <form autoComplete="off" className="admin_form" onSubmit={submitHandler}>
          <select
            value={cat_id}
            name="cat_id"
            id="productCategory"
            onChange={changeHandlerSelect}>
            {category && category.map((item, idx) => (
              <option key={idx} value={item.category_id}>{item.category_name}</option>
            ))
}

          </select>
          <input
            type="text"
            onChange={changeHandlerProductNo}
            placeholder="Product No"
            name="productNo"
            value={productNo}
            id="productNo"/>
          <input
            type="text"
            onChange={changeHandlerPrimatyMaterial}
            placeholder="Product Primary Material"
            name="primaryMaterial"
            value={primary_material}
            id="primaryMaterial"/>
          <input
            type="text"
            onChange={changeHandlerDimension}
            placeholder="Product Dimension"
            name="dimension"
            value={dimension}
            id="dimension"/>
          <input
            type="text"
            onChange={changeHandlerWarrenty}
            placeholder="Product Warranty"
            name="warrenty"
            value={warrenty}
            id="warrenty"/>
          <input
            type="text"
            onChange={changeHandlerPrice}
            placeholder="Product Price"
            name="price"
            value={price}
            id="price"/> {productImageBase64 && <div className="image_wrapper">
            <img
              className="category_thumbnail"
              src={productImageBase64}
              alt="Category Thumbnail"/>
            <br/>
            <br/>
          </div>
}
          {!productImageBase64 && <div className="image_wrapper">
            <img
              className="category_thumbnail"
              src={PUBLIC_URL + dbImage}
              alt="Category Thumbnail"/>
            <br/>
            <br/>
          </div>
}
          <label htmlFor="image">Change Image</label>
          <input type="file" name="image" id="image" onChange={fileChangeHandler}/>
          <button type="submit">{isProcessing? "Saving ..." : "Save"}</button>
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
        </div></>
        }

      </div>
}
      <br/><br/><br/><br/><br/>

    </div>
  );
}

export default AdminProductEdit;
