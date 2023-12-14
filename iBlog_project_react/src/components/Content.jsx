import Card from "./Card";
import Header from "./Header";
function Content() {
    return (
        //here is main content and search section
        <div className="flex flex-col">
            {/* header section starts here */}
            <Header />
            {/* header section ends here
            then main content starts */}
            <div className="main-content">
                <div className="header flex justify-between p-10 ">
                    <h3>LIFESTYLE</h3>
                    <h3 className="text-gray-500">Бүгд</h3>
                </div>
                <div className="flex flex-row justify-between gap-x-5">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div className="flex justify-between p-10">
                    <h3>TECHNOLOGY</h3>
                    <h3 className="text-gray-500">Бүгд</h3>
                </div>
                <div className="flex flex-row justify-between gap-x-5">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div className="flex justify-between p-10">
                    <h3>HEALTH</h3>
                    <h3 className="text-gray-500">Бүгд</h3>
                </div>
                <div className="flex flex-row justify-between gap-x-5">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div className="flex justify-center items-center h-20">
                    <button className="flex justify-center items-center bg-zinc-200 rounded border-0 text-gray-500 w-15 h-7">
                        Цааш унших 
                    </button>
                </div>
            </div>
            {/* main content ends here */}
        </div>
    );
}

export default Content;