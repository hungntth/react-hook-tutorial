import { React, useState } from 'react';

AddNewProduct.propTypes = {

};

function AddNewProduct() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [size, setSize] = useState(0);
    const [color, setColor] = useState("");
    const [isShowDetail, setIsShowDetail] = useState(false);

    const handleClickBtn = () => {
        let object = {
            name, price, size, color
        }
        console.log(object)
    }

    const handleHideShow = () => {
        setIsShowDetail(!isShowDetail)
    }
    return (
        <div>
            {isShowDetail === false ? <div onClick={() => { handleHideShow() }}>Show The Form</div> : <div onClick={() => { handleHideShow() }}>Hide This Form</div>}
            {isShowDetail === true &&
                <fieldset>
                    <legend>Add a new product</legend>
                    <div className='input-product'>
                        <label>Name </label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className='input-product'>
                        <label>Price </label>
                        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    <div className='input-product'>
                        <label>Size </label>
                        <input type="text" value={size} onChange={(e) => setSize(e.target.value)} />
                    </div>
                    <div className='input-product'>
                        <label>Color </label>
                        <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />
                    </div>
                    <div>
                        <button onClick={() => handleClickBtn()}>Add New</button>
                    </div>
                </fieldset>
            }



        </div>
    );
}

export default AddNewProduct;