import './index.css'

const HeaderPage = () => (
  <li className="header-content-item-card">
    <div className="insta-img-paragraph-card">
      <img
        src="https://res.cloudinary.com/dfbuwyuet/image/upload/v1686487653/Standard_Collection_8vectory_fdcbrr.png"
        alt="img"
        className="victory-img"
      />
      <p className="victory-paragraph">InstaShare</p>
    </div>
    <div className="header-text-card">
      <input type="search" className="search-header" />
      <p className="insta-home-paragraph">Home</p>
      <p className="insta-home-paragraph">Profile</p>
      <button type="button" className="logout-btn">
        Logout
      </button>
    </div>
  </li>
)

export default HeaderPage
