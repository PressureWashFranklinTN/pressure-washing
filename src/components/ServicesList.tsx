import "./ServicesList.css";
function ServicesList() {
  return (
    <>
    
      <div className="row w-100 overflow-hidden">
        <div className="col">
          <div className="container">
          <a id="services"></a>
            <div className="row">
             
              <div className="col-lg-8 col-md-12   p-5">
                <h2 className="text-center">Services</h2>

                <ul className="servicesList">
                  <li className="">
                    Driveway Pressure washing (exposed aggregate, cement, brick,
                    stone)
                  </li>
                  <li className="">Brick Siding</li>
                  <li className="">Cement Board Siding</li>
                  <li className="">Entry Way</li>
                  <li className="">Decking</li>
                </ul>
              </div>
              <div className="col-lg-4 d-none d-lg-flex justify-content-center align-items-center">
                <div className="pressureWashImg" ></div>
              </div>
            </div>
            <div className="row">
              <div className="col p-5">
                <h2>Revitalize Your Property with Expert Pressure Washing!</h2>

<p className="p-3">Say goodbye to dirt, grime, and stains! Our professional pressure washing services restore the beauty of your home or business, leaving surfaces spotless and refreshed. Whether it&apos;s your driveway, siding, or deck, we deliver a deep clean that lasts. </p>
                  
               
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </>
  );
}

export default ServicesList;
