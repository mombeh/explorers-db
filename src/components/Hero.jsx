const Hero = () =>{
    return(
        <>
        <div className="head">
        <div className="logo">
          <img src="/images/Group.png" alt="" />
        </div>
        <div className="nav-bar">
          <nav>
            <a onClick={() => navigate("/")}>Home</a>
            <a onClick={() => navigate("/about_us")}>Movies</a>
            <a onClick={() => navigate("/package")}>Series</a>
            <a onClick={() => navigate("/gallery")}>Trending</a>
            <a onClick={() => navigate("/contact_us")}>Categories</a>
          </nav>
        </div>
      </div>
        </>
    )
}
export default Hero