import "./OurTeam.css";
import team from "./teamData.js";
import "./allElementsCSS.css";

function OurTeam() {
  return (
    <>
      <div className="body-section" id="our-team">
        <h3>Our Team</h3>
        <div className="section-wrapper-nogrid">
          {team.map((member) => (
            <div className="team-item" key={member.id}>
              <div className="team-image-wrapper">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="caption">
                <h4>{member.name}</h4>
                <p>{member.job}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default OurTeam;
