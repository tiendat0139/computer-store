import React from "react";

const AddProduct = () => {
    return(
        <div className="px-4 mt-4">
            <h4 className="mb-3">Add Product</h4>
            <form>
                <div class="mb-3">
                    <label for="name" class="form-label px-3">Name</label>
                    <input type="text" class="form-control" id="name" placeholder="Product name"/>
                </div>
                <div class="mb-3">
                    <label for="thumnail" class="form-label px-3">Thumbnail URL</label>
                    <input type="text" class="form-control" id="thumnail" placeholder="Thumbnail" required/>
                </div>
                <div class="mb-3">
                    <label for="price" class="form-label px-3">Price</label>
                    <input type="number" class="form-control" id="price" placeholder="Thumbnail" required/>
                </div>
                <div class="mb-3">
                    <label for="desc" class="form-label px-3">Description</label>
                    <input type="text" class="form-control" id="desc" placeholder="Description" required/>
                </div>
                <div className="row">
                    <div class="mb-3 col-md-6">
                        <label for="qtt" class="form-label px-3">Quantity</label>
                        <input type="number" class="form-control" id="qtt" placeholder="Quantity" required/>
                    </div>
                    <div class="mb-3 col-md-6">
                        <label for="wp" class="form-label px-3">Warranty period</label>
                        <input type="number" class="form-control" id="wp" placeholder="Warranty period" required/>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary w-100">Add Product</button>
            </form>
        </div>
    )
}
export default AddProduct