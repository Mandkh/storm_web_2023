const ProfileInfo = () => {
    return (
        <div>
            <div className="bg-blue-600">
                <h1>Your name</h1>
                <p>Your Frofession or Tagline</p>
                <div className="profile-info">
                    <p className="text-3xl font-bold underline">
                        <strong>
                            About me:
                        </strong>
                        Brief description or bio doess here
                    </p>
                    <p>
                        <strong>
                            Skills:
                        </strong>
                        Skill 2, Skill 2, Skill 3
                    </p>
                    <p>
                        <strong>
                            Contact:
                        </strong>
                        <a href="mailto:your.email@example.com">your.email@example.com</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo