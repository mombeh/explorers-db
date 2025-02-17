import React from "react";
const Header = () => {
  return (
    <header>
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
        <div className="text">
          <input type="text" placeholder="Search Movies,Series..." />
          <img
            src="/images/search-interface-symbol.png"
            alt=""
            className="search"
          />
          <img src="/images/Ellipse 14.png" alt="
          " className="image" />
        </div>
      </div>

      <div className="informations">
        <img
          src="https://s3-alpha-sig.figma.com/img/dffb/b860/559f834e0275c009608027ccae5ee787?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=rkpO0pLndEZ7dHynMJtiO9nZc99PuLuk24zTVIUT0MRQscYgwziIDSruNUsKcB9UqDNlHZUJqUC04E9WCs7kZg6jC1AC03vSYMBX1lGNvQYsvHGpHPyKzBBx7JtMVI8Vl0jMzhAN5Ha3CDWP-mNKGJgraDO6IQLyQnh4l5A0ASPvLjuKjVte4awXJu9XvPTBnkihWYkEW~yqnHtTzbIThNcRpkKZfExR5AnD-h8xsa3F8DaqE3rBzP6uA2Aw7BFz~Vp7AIkV62inMC26DGLemANIx9ibBrVEsDyaBbHdZAR7OmvXszESGSKES4oAyYIAFkLStffuJaweSH9z8PolvA__"
          alt=""
          className="mavel"
        />
        <div className="actions">
          <p
            style={{
              border: "1px solid GREY",
              padding: "3px",
              fontSize: "15px",
              borderRadius: "10PX",
            }}
          >
            CBFC:U/A
          </p>
          <p>Action</p>
          <p>.</p>
          <p>Adventure</p>
          <p>.</p>
          <p>2h28m</p>
        </div>
        <div className="p">
          <p>
            When a spell goes wrong dangerous foes from other worlds start to
            appear, forcing Peter to discover what it truly means to be
            Spider-Man
          </p>
        </div>
        <div className="btn">
          <button className="watch">
            <img src="/images/play-button.png" alt="
            " />
            <p>Watch Now</p>
          </button>
          <button className="info">
            <img src="/images/play-button (1).png" alt="" />
            <p>More Info</p>
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
