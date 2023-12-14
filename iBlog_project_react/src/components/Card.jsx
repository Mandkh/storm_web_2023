import beach from "./images/beach.png"
import heart from "./images/heart.png"
import fb from "./images/facebook.png"
import face from "./images/face.png"

function Card() {
    return (
        <div className="flex flex-col shadow rounded-lg">
            <img src={beach} className="w-52 h-36 m-2 rouned" />
            <div className="w-48 text-gray-900 text-base font-semibold font-['Inter'] leading-none flex-start flex pl-2">
                The Impact of <br /> Technology on the <br /> Workspace
            </div>
            <div className="flex inline-flex text-gray-500 text-xs gap-2 items-center px-2">
                <img src={face} className="w-5 h-5" />
                <p> Tracey Wilson</p><p> Aug 20, 2022</p>
            </div>
            <div className="flex items-center justify-around w-48">
                <div className="flex flex row items-center gap-1">
                    <img src={heart} className="w-5 h-5" />
                    <h4 className="text-neutral-900 text-base font-medium font-['Inter'] leading-tight tracking-tight">23</h4>
                </div>
                <div className="w-16 h-6 bg-blue-600 text-white items-center text-center rounded">
                    <img src={fb} className="items-center w-4 h-4 flex justify-around inline-flex" />
                    Share
                </div>
            </div>
        </div>
    );
}

export default Card;