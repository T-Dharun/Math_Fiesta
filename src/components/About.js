import './About.css';
import Math from '../assets/Math.gif';
import Trophy from '../assets/trophy.gif';
function About(){
    return(
        <>
            <section className='about' >
                <article>
                    <h1>Srinivasa Ramanujan Mathematics Club</h1>
                    <img src={Math} />
                    <aside className='reveal'>Srinivasa Ramanujan Mathematics Club was started in the year 2014-15. The club is unique in its own way. This club aims students to be faster and accurate in their works and apply Math in daily life situations. The club is functioned by students representing as main bodies such as secretary, treasurer, chairman and executive members.</aside>
                    <aside>The club conducts many events such as Quiz , Sudoko and puzzle solving, Math Fiesta, Math pi-Thons and so on, to enhance the Student's Math and Problem Solving skills. Math Fiesta, A National Level Mathemical Symposium is one of the most popular event of the club,which is conducted each year.</aside>
                </article>
                <article>
                <h1>Math Fiesta ' 24</h1>
                <img src={Trophy}/>
                    <aside>Math Fiesta is a National Level Mathematical Symposium conducted by Srinivasa Ramanujan Mathematics Club each year. The event mainly focuses on math related technical and non-technical areas that enlightens the youth generation to be more specific. Many of us study math as formulas and in written format, but we doesn't know where to apply it in daily life. Math Fiesta provides a wonderful opportunity to know how Math is applied in all Fields through the Events such as, Paper presentation, Idea presentation, Quiz, Math Rangoli, Treasure hunt and Skit.</aside>
                </article>
            </section>
        </>
    )
}
export default About;