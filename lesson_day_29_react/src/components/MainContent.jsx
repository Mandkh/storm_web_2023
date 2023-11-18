const MainContent = () => {
    return (
        <div class="container">
            <aside>
                <ul>
                    <li><a href="#settings">Settings</a></li>
                    <li><a href="#profile">Profile</a></li>
                    <li><a href="#help">Help</a></li>
                </ul>
            </aside>
            <main>
                <section id="dashboard">
                    <h2>Dashboard Overview</h2>
                </section>
                <section id="reports">
                    <h2>Reports</h2>
                </section>
                <section id="analytics">
                    <h2>Analytics</h2>
                </section>
            </main>
        </div>
    );
}
export default MainContent;