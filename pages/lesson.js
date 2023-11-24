export default function Lesson(){
    return <div className="container-fluid main_sub">
        <button className="btn btn-danger mt-2 mb-3 rounded-0" style="font-weight: 600; " >X</button>
        <div className="container main rounded-3"></div>
        <div className="row m-3">
            <div className="col-sm-12 mb-3 card me-2 shadow-lg rounded-0  border  border-2 border-danger">
                <div className="card-body pt-0 text-warning bg-white ">
                    <h5 className="ps-0" style="font-weight: 600;">INFORMATIONS: </h5>

                </div>
            </div>
            <div className="col-sm-12 card bg-secondary shadow-lg rounded-0 border border-2  border-danger ">
                <div className="card-body text-dark" style="font-weight: 600;">
                    <h5 className="ps-0 pt-0" style="font-weight: 600; ">Tips: </h5>

                </div>
            </div>
        </div>

        <button type="button">Continue</button>
    </div>
}