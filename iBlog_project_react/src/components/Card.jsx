function card() {
    return (
        <div className="flex flex-col shadow rounded-lg">
            <img src="./images/logo.png" className="w-52 h-36 m-2 rouned" />
            <div className="w-48 text-gray-900 text-base font-semibold font-['Inter'] leading-none flex-start flex pl-2">
                The Impact of <br /> Technology on the <br /> Workspace
            </div>
            <div className="flex inline-flex text-gray-500 text-xs gap-2">
                <img src="" className="" />
                <p> Tracey Wilson</p><p> Aug 20, 2022</p>
            </div>
            <div className="flex items-center justify-around w-48">
                <h4>23</h4>
                <div className="w-14 h-6 bg-blue-600 text-white items-center text-center rounded">
                    <img src="" />
                    Share
                </div>
            </div>
        </div>
    );
}

export default card;