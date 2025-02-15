import "../components/Menu.css";
function Menu(){
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#top">
            <img src="/images/logo2.svg" className="" alt="Pressure Wash Franklin TN Logo" />
          </a>

          <div className="d-flex flex-row">
            <a href="#top">Home</a>
            <a href="#services">Services</a>
            <a href="#pricing">Prices</a>
            <a href="#contact">Contact</a>
          </div>
          
        </div>
      </nav>
    </>
)
}
export default Menu;