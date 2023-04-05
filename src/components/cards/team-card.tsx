import Icons from "@components/icons";

interface ITeam {
    name: string;
    code: string;
    totalMember?: number;
}

const TeamCard: React.FC<{ team: ITeam }> = ({ team }) => (
    <div className="team-card shadow flex-column align-items-start my-2">
        <div className="d-flex justify-content-between" style={{ width: '100%' }}>
            <h5>{team.name}</h5>
            <span className="d-flex align-items-center my-2 rounded px-2" style={{ backgroundColor: '#B0DAFF' }}>
                <b>{team.code}</b>
            </span>
        </div>
        <div className="d-flex justify-content-between align-items-center" style={{ width: '100%' }}>
            <span className="d-flex justify-content-between rounded my-2  px-2" style={{ backgroundColor: '#408E91' }}>
                <span className="text-light" style={{ fontSize: 14 }}>Total members : {10}</span>
            </span>
            <span className="card-icon bg-white" onClick={() => alert("GO BACK")}>
                <Icons name="arrow-right" color="#3C84AB" />
            </span>
        </div>
    </div>
)

export default TeamCard;