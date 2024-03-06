import './Coordinators.css';
import A from '../assets/gallery/dharshan.jpeg'
import B from '../assets/gallery/gk.jpeg'
import C from '../assets/gallery/Untitled.jpg'
import D from '../assets/gallery/nishanth.jpeg'
import F from '../assets/gallery/pranesh.jpeg'
import G from '../assets/gallery/priya.jpeg'
import H from '../assets/gallery/tamil.jpeg'
import I from '../assets/gallery/vg.jpeg'

const val='(Sr.G)';
export function Faculty(){
    return(
        <>
            <div className='faculty'>
                <h1>FACULTY COORDINATORS</h1>
                <section className='faculty-members'>
                    <article>Dr.M.DHAVAMANI</article>
                    <article>Assc.Prof</article>
                </section>
                <section className='faculty-members'>
                    <article>Dr.A.L. NACHAMMAI</article>
                    <article>Assc.Prof {val}</article>
                </section>
            </div>
        </>
    );
};
function Student(){
    return(
        <>
            <h1 className='student-header'>STUDENT COORDINATORS</h1>
            <div className='student'>
                
                <section className='student-member student-active'>
                    <img src={A}/>
                    <article className='student-details'>
                        <div>CHAIRMAN</div>
                        <div>S.DHARSAN</div>
                    </article>
                </section>
                <section className='student-member'>
                    <img src={C}/>
                    <article className='student-details'>
                        <div>CO-CHARIMAN</div>
                        <div>K.V KEVIN</div>
                    </article>
                </section>
                <section className='student-member'>
                    <img src={H}/>
                    <article className='student-details'>
                        <div>PRESIDENT</div>
                        <div>K.A THAMIZHINI</div>
                    </article>
                </section>
                <section className='student-member'>
                    <img src={I}/>
                    <article className='student-details'>
                        <div>SECRETARY</div>
                        <div>S. VISHNUGILANAND</div>
                    </article>
                </section>
                <section className='student-member'>
                    <img src={F}/>
                    <article className='student-details'>
                        <div>JOINT SECRETARY</div>
                        <div>S.PRANESH</div>
                    </article>
                </section>
                <section className='student-member'>
                    <img src={D}/>
                    <article className='student-details'>
                        <div>JOINT SECRETARY</div>
                        <div>P.NISHAANTH</div>
                    </article>
                </section>
                <section className='student-member'>
                    <img src={G}/>
                    <article className='student-details'>
                        <div>TREASURER</div>
                        <div>R.PRIYADHARSHINI</div>
                    </article>
                </section>
                <section className='student-member'>
                    <img src={B}/>
                    <article className='student-details'>
                        <div>JOINT TREASURER</div>
                        <div>R.GOKULKRISHNA</div>
                    </article>
                </section>
            </div>
        </>
    );
}
function Gallery(){
    return(
        <>
      
        </>
    );
};
function Coordinators(){
    return(
        <>
           <div className='coordinators'>
           <Faculty/>            
            <Student/>
            <Gallery/>
           </div>
        </>
    );
}
export default Coordinators;