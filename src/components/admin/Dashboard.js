import React from "react";
const Dashboard = () => {
    return(
        
        <div class="container-fluid px-4">
            <h4 class="mt-4 mb-3">Dashboard</h4>
            <div className="row">
                <div className="col-xl-3 col-md-6">
                    <div className="card bg-primary text-white mb-4">
                        <div className="card-body">Total Products</div>
                        <div className="card-footer d-flex align-items-center justify-content-between">
                            <h3>123</h3>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="card bg-warning text-white mb-4">
                        <div className="card-body">Pending Orders</div>
                        <div className="card-footer d-flex align-items-center justify-content-between">
                            <h3>123</h3>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="card bg-success text-white mb-4">
                        <div className="card-body">Successful Orders</div>
                        <div className="card-footer d-flex align-items-center justify-content-between">
                            <h3>123</h3>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="card bg-danger text-white mb-4">
                        <div className="card-body">Total customers</div>
                        <div className="card-footer d-flex align-items-center justify-content-between">
                            <h3>123</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard