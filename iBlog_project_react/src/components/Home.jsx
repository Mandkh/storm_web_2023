import Header from "./Header";
import SideBar from "./Side-Bar";
import Content from "./Content";
function Home() {
    return (
        // layout
        <div className="flex flex-row">
            {/* <Header /> */}
            <SideBar />
            <Content />
            {/* <Content /> */}
        </div>
    )

}

export default Home;