import { Link } from 'react-router-dom';
import './Home.css';
function Home() {
    return (
        <>
            <section className='home'>
                <div className="home-page">

                    <img src="https://mathsclub.kongu.edu/static/media/logo.dcc2667924d40ad1bc45.png" />
                    <article>Organised by</article>
                    <section>SRINIVASA RAMANUJAN MATHEMATICS CLUB</section>
                    <img src='https://mathsclub.kongu.edu/static/media/club_logo.073c311a451e4aee431c.jpg' className='home-image'/>
                    <Link to={'/events'}>
                    <button className='Register'>
                        Register
                    </button>
                    </Link>
                </div>
            </section>
        </>
    )
}
export default Home;