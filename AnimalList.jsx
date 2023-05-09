import './animalList.css'
import { useNavigate } from 'react-router';

function AnimalList () {
  const navigate = useNavigate();
  const navigateToLandingPage = () => {
      navigate('/');
};
  // const [search,setSearch] = useState("")
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   history.pushState('/search?name=${search}');
  //   setSearch("");
  // }

  return (
    <>
      <header>
        <a className="logo" onClick={navigateToLandingPage}>
          {" "}
          <i className="fas fa-paw" /> Zootopia
        </a>
        <nav className="navbar">
          {/* <form onSubmit={} >
            <input
              className="search"
              type="text"
              placeholder="Cari Hewan"
              // onChange={(e)=>setSearch(e.target.value)}
              // value={search}
              onChange=""
              defaultValue=""
            />
            <input
              className="buttoncari"
              id="searchButton"
              type="button"
              defaultValue="Search"
            />
          </form> */}
        </nav>
      </header>
      <section className="home1" id="home">
        <img src="src/assets/images/bottom_wave.png" alt="" className="wave" />
      </section>
      <section className="data">
        <h2 className="judul">DATA HEWAN</h2>
        <div className="flex-box">
          <div className="card">
            <img src="src/assets/images/datahewan/rusa.jpg" alt="" />
            <h2 className="headingList">Rusa</h2>
            <p className="title">Deskripsi hewan Zootopia.</p>
          </div>
          <div className="card">
            <img src="src/assets/images/datahewan/kancil.jpg" alt="" />
            <h2 className="headingList">Kancil</h2>
            <p className="title">Deskripsi hewan Zootopia.</p>
          </div>
          <div className="card">
            <img src="src/assets/images/datahewan/kangguru.jpg" alt="" />
            <h2 className="headingList">Kanguru</h2>
            <p className="title">Deskripsi hewan Zootopia.</p>
          </div>
          <div className="card">
            <img src="src/assets/images/datahewan/zebra.jpg" alt="" />
            <h2 className="headingList">Zebra</h2>
            <p className="title">Deskripsi hewan Zootopia.</p>
          </div>
          <div className="card">
            <img src="src/assets/images/datahewan/monyet.jpg" alt="" />
            <h2 className="headingList">Monyet</h2>
            <p className="title">Deskripsi hewan Zootopia.</p>
          </div>
          <div className="card">
            <img src="src/assets/images/datahewan/harimau.jpg" alt="" />
            <h2 className="headingList">Harimau</h2>
            <p className="title">Deskripsi hewan Zootopia.</p>
          </div>
          <div className="card">
            <img src="src/assets/images/datahewan/buaya.jpeg" alt="" />
            <h2 className="headingList">Buaya</h2>
            <p className="title">Deskripsi hewan Zootopia.</p>
          </div>
          <div className="card">
            <img src="src/assets/images/datahewan/serigala.jpg" alt="" />
            <h2 className="headingList">serigala</h2>
            <p className="title">Deskripsi hewan Zootopia.</p>
          </div>
        </div>
      </section>
      <section className="designed">
        <p>Designed by Fitria Nur Fatmawati.</p>
      </section>
    </>
  )
}

export default AnimalList