import './Coordinators.css';
import chairman from '../assets/Members Photos/Tamilzhini.jpg'
import coChairman1 from '../assets/Members Photos/Pranesh_.jpg'
import coChairman2 from '../assets/Members Photos/Parvathavarthini.jpg'
import president from '../assets/Members Photos/Bommisrilekkha.jpg'
import secretary from '../assets/Members Photos/Ram Karthik_.jpg'
import js1 from '../assets/Members Photos/Pramodh.jpg'
import js2 from '../assets/Members Photos/Surya Prasath_.jpg'
import js3 from '../assets/Members Photos/Athish_.jpg'
import treasurer from '../assets/Members Photos/Om prakash_.jpg'
import jt1 from '../assets/Members Photos/Harini.jpg'
import jt2 from '../assets/Members Photos/Rahul_.jpg'
import jt3 from '../assets/Members Photos/Rithuvarshini.jpg'
import a1 from '../assets/Members Photos/Rakshanasri.jpg'
import a2 from '../assets/Members Photos/Vishnu Kumar_.jpg'
import a3 from '../assets/Members Photos/Ahmed.jpg'
import a4 from '../assets/Members Photos/Navin.jpg'
import a5 from '../assets/Members Photos/Kaviyaa_.jpg'
import a6 from '../assets/Members Photos/Janani.jpg'
import a7 from '../assets/Members Photos/Poontamilselvan_.jpg'
import a8 from '../assets/Members Photos/Akashini_.jpg'
import a9 from '../assets/Members Photos/Gobika_.jpg'
import a10 from '../assets/Members Photos/Kavya.jpg'
import a11 from '../assets/Members Photos/Mahashwin_.jpg'
import a12 from '../assets/Members Photos/Vedhaa srii_.jpg'
import a13 from '../assets/Members Photos/Divya_.jpg'
import a14 from '../assets/Members Photos/Cheran.jpg'
import a15 from '../assets/Members Photos/Tarun.jpg'
import a16 from '../assets/Members Photos/Ramalingam_.jpg'
import a17 from '../assets/Members Photos/Sudheksha_.jpg'
import a18 from '../assets/Members Photos/Immanuel_.jpg'

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
                {student.map((event)=>(
                    
                <section className='student-member student-active'>
                <img src={event.image}/>
                <article className='student-details'>
                    <div className='wrap'>
                    <div>{event.name}</div>
                    <div>{event.post}</div>
                    </div>
                </article>
            </section>
                ))}
            </div>
        </>
    );
}
const student=[
    {
        name:"Ms. K.A THAMIZHINI",
        post:"CHAIRMAN",
        image:chairman
    },
    {
        name:"Mr. S. PRANESH",
        post:"CO-CHAIRMAN",
        image:coChairman1
    },
    {
        name:"Ms. S. PARVATHAVARTHINI",
        post:"CO-CHAIRMAN",
        image:coChairman2
    },
    {
        name:"Ms. G. BOMMISRILEKKHAA",
        post:"PRESIDENT",
        image:president
    },
    {
        name:"Mr. S. RAM KARTHIK",
        post:"SECRETARY",
        image:secretary
    },
    {
        name:"Mr. R. PRAMODH",
        post:"JOINT SECRETARY",
        image:js1
    },
    {
        name:"Mr. S.K. SURYA PRASATH",
        post:"JOINT SECRETARY",
        image:js2
    },
    {
        name:"Mr. S.K. ATHISH",
        post:"JOINT SECRETARY",
        image:js3
    },
    {
        name:"Mr. T. OMPRAKASH",
        post:"TREASURER",
        image:treasurer
    },
    
    {
        name:"Ms. E.S HARINI",
        post:"JOINT TREASURER",
        image:jt1
    },
    {
        name:"Mr.R.RAHUL",
        post:"JOINT TREASURER",
        image:jt2
    },
    {
        name:"Ms.T.RITHUVARSHINI",
        post:"JOINT TREASURER",
        image:jt3
    },
    {
        name:"Ms.K.RAKSHANA SRI",
        post:"EXECUTIVE MEMBER",
        image:a1
    },
    {
        name:"Mr.J.VISHNU KUMAR",
        post:"EXECUTIVE MEMBER",
        image:a2
    },
    {
        name:"Mr.M.AHMED SALIH",
        post:"EXECUTIVE MEMBER",
        image:a3
    },
    {
        name:"Mr.NAVIN KRISHNAN",
        post:"EXECUTIVE MEMBER",
        image:a4
    },
    {
        name:"Ms.V.KAVIYAA",
        post:"EXECUTIVE MEMBER",
        image:a5
    },
    {
        name:"Ms.R.JANANI",
        post:"EXECUTIVE MEMBER",
        image:a6
    },
    {
        name:"Mr.P.POONTAMILSELVAN",
        post:"EXECUTIVE MEMBER",
        image:a7
    },
    {
        name:"Ms.Y.AKASHINE",
        post:"EXECUTIVE MEMBER",
        image:a8
    },
    {
        name:"Ms.K.S.GOBIKA",
        post:"EXECUTIVE MEMBER",
        image:a9
    },
    {
        name:"Ms.M.KAVIYA",
        post:"EXECUTIVE MEMBER",
        image:a10
    },
    {
        name:"Mr.V.MAHASHWIN",
        post:"EXECUTIVE MEMBER",
        image:a11
    },
    {
        name:"Ms.R A.VEDHAA SRI",
        post:"EXECUTIVE MEMBER",
        image:a12
    },
    {
        name:"Ms.K.DIVYA",
        post:"EXECUTIVE MEMBER",
        image:a13
    },
    {
        name:"Mr.K.CHERAN",
        post:"EXECUTIVE MEMBER",
        image:a14
    },
    {
        name:"Mr.A.TARUN",
        post:"EXECUTIVE MEMBER",
        image:a15
    },
    {
        name:"Mr.RAMLINGAM",
        post:"EXECUTIVE MEMBER",
        image:a16
    },
    {
        name:"Ms.K.SUDHEKSHA",
        post:"EXECUTIVE MEMBER",
        image:a17
    },
    {
        name:"Mr.R.IMMANUEL",
        post:"EXECUTIVE MEMBER",
        image:a18
    }
]
function Coordinators(){
    return(
        <>
           <div className='coordinators'>
           <Faculty/>            
            <Student/>
           </div>
        </>
    );
}
export default Coordinators;