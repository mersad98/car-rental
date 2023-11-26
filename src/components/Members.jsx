import { members } from "../Data";

function Members() {
  return (
    <section className="members">
      <div className="container">
        <div className="members__grid">
          {members.map((member) => (
            <div className="members__member" key={member.name}>
              <img src={member.img} alt={member.name} />
              <div className="members__member__desc">
                <h2 className="heading-tertiary">{member.name}</h2>
                <p className="paragraph m-0">{member.job}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Members;
