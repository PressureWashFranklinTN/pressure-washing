
import Menu from "./components/Menu";
import "bootstrap/dist/css/bootstrap.css";
import ServicesList from "./components/ServicesList";
import "./hero.css";
import MyMapComponent from "./components/GoogleMap";
// import Pricing from "./components/Pricing";
//import VideoLoop from "./components/VideoLoop";
import './App.css'
import { Helmet } from 'react-helmet';

function App() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Pressure Wash - Franklin, TN",
    "url": "https://pressurewashfranklintn.com",
    "description": "Pressure washing services, driveways, walkways, siding and decking.",
    "publisher": {
      "@type": "Organization",
      "name": "PressureWashFranklinTN.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://pressurewashfranklintn.com/images/logo2.svg"
      }
    }
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        <meta name="description" content="Pressure washing services, driveways, walkways, siding and decking." />
        <meta name="keywords" content="Pressure Wash, Power Wash, Franklin, TN, Tennessee" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Pressure Wash - Franklin, TN" />
        <meta property="og:description" content="Pressure washing services, driveways, walkways, siding and decking." />
        <meta property="og:url" content="https://pressurewashfranklintn.com" />
        <meta property="og:image" content="https://pressurewashfranklintn.com/images/logo2.svg" />
      </Helmet>
      <a id="top"></a>
     <Menu /> 
      <div className="container-fluid m-0 p-0" >
        <div className="row m-0">
        <a id="top"></a>
        </div>
    
    
  
         <div className="row m-0">
          <div className="col p-0 shadow">
            <div className="heroWrapper">
              <div className="hero"></div>
              <div className="heroOverlay"></div>

              <div className="container">
                <div className="row">
                  <div className="col dFlex2 pt-sm-0">
                    <p>Get a free quote today and make your property shine!</p>
                    <a className="btn btn-primary" href="#contact">Get A Quote</a>
                  </div>
                </div>
              </div>
           
            </div>
          </div>
        </div>

      
                <ServicesList></ServicesList>  
             
     
          <MyMapComponent></MyMapComponent>        
     
      
          {/* <Pricing></Pricing> */}

          
       
      </div>
     
    </>
  )
}

export default App
