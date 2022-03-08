import './style.css';

import profilePicture from '../../../assets/img/profile.jpg';

function ProfilePictureWrapper() {
    return (
        <>
            <div id="prof-pic-wrap">
                <img src={profilePicture} className="rounded-circle" alt="profile" />
            </div>
        </>
    );
}

export default ProfilePictureWrapper;
