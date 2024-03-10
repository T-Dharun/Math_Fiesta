import "./Coordinators.css";
import chairman from "../assets/Members Photos/Tamilzhini.jpg";
import coChairman1 from "../assets/Members Photos/Pranesh_.jpg";
import coChairman2 from "../assets/Members Photos/Parvathavarthini.jpg";
import president from "../assets/Members Photos/Bommisrilekkha.jpg";
import secretary from "../assets/Members Photos/Ram Karthik_.jpg";
import js1 from "../assets/Members Photos/Pramodh.jpg";
import js2 from "../assets/Members Photos/Surya Prasath_.jpg";
import js3 from "../assets/Members Photos/Athish_.jpg";
import treasurer from "../assets/Members Photos/Om prakash_.jpg";
import jt1 from "../assets/Members Photos/Harini.jpg";
import jt2 from "../assets/Members Photos/Rahul_.jpg";
import jt3 from "../assets/Members Photos/Rithuvarshini.jpg";

const val = "(Sr.G)";
export function Faculty() {
  return (
    <>
      <div className="faculty">
        <h1>FACULTY COORDINATORS</h1>
        <section className="faculty-members">
          <article>Dr.M.DHAVAMANI</article>
          <article>Assc.Prof</article>
        </section>
        <section className="faculty-members">
          <article>Dr.A.L. NACHAMMAI</article>
          <article>Assc.Prof {val}</article>
        </section>
      </div>
    </>
  );
}
function Student() {
  return (
    <>
      <h1 className="student-header">STUDENT COORDINATORS</h1>
      <div className="student">
        {student.map((event) => (
          <section className="student-member student-active">
            <img src={event.image} alt="coordinators img" />
            <article className="student-details">
              <div className="wrap">
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
const student = [
  {
    name: "Ms. K.A THAMIZHINI",
    post: "CHAIRMAN",
    image: chairman,
  },
  {
    name: "Mr. S. PRANESH",
    post: "CO-CHAIRMAN",
    image: coChairman1,
  },
  {
    name: "Ms. S. PARVATHAVARTHINI",
    post: "CO-CHAIRMAN",
    image: coChairman2,
  },
  {
    name: "Ms. G. BOMMISRILEKKHAA",
    post: "PRESIDENT",
    image: president,
  },
  {
    name: "Mr. S. RAM KARTHIK",
    post: "SECRETARY",
    image: secretary,
  },
  {
    name: "Mr. R. PRAMODH",
    post: "JOINT SECRETARY",
    image: js1,
  },
  {
    name: "Mr. S.K. SURYA PRASATH",
    post: "JOINT SECRETARY",
    image: js2,
  },
  {
    name: "Mr. S.K. ATHISH",
    post: "JOINT SECRETARY",
    image: js3,
  },
  {
    name: "Mr. T. OMPRAKASH",
    post: "TREASURER",
    image: treasurer,
  },

  {
    name: "Ms. E.S HARINI",
    post: "JOINT TREASURER",
    image: jt1,
  },
  {
    name: "Mr.R.RAHUL",
    post: "JOINT TREASURER",
    image: jt2,
  },
  {
    name: "Ms.T.RITHUVARSHINI",
    post: "JOINT TREASURER",
    image: jt3,
  },
];
function Coordinators() {
  return (
    <>
      <div className="coordinators">
        <Faculty />
        <Student />
      </div>
    </>
  );
}
export default Coordinators;
