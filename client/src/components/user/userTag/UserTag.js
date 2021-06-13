import './UserTag.css';


function UserTag() {

    const userName = "unosxmopsus";
    const userTag = "#3432";

    return (
    <div className="user-tag">
        <span>{userName}</span>
        <span>{userTag}</span>
    </div>
    );
}

export default UserTag;
