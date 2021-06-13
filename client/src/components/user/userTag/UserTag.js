import './UserTag.css';


function UserTag() {

    const userName = "unosxmopsus";
    const userTag = "#3432";

    return (
    <div className="user-tag">
        <div>{userName}</div>
        <div>{userTag}</div>
    </div>
    );
}

export default UserTag;
