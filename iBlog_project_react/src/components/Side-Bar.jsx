import { useState } from "react";



function SideBar() {

    const [menu, setMenu] = useState(false)

    function trigger() {
        setMenu(!menu)
    }

    return (
        <div className="sidebar flex flex-col bg-white px-[49px] py-[40px] m-w-[350px] border-2">
            <div className="sidebar-top w-1/3 flex flex-row">
                <img src="" />
                <h1 className="text-red-600" >i</h1>
                <h1 className="text-orange-500">blog</h1>
            </div>
            <div className="sidebar-main">
                {/* <h3 className="font-inter">Lifestyle</h3> */}
                <div onClick={trigger} style={{ height: (menu ? 300 : 10) }}>Lifestyle
                    <p className="py-[8px] px-[16px]">Travel</p>
                    <p className="py-[8px] px-[16px]">Food&Beverage</p>
                    <p className="py-[8px] px-[16px]">Home and decor</p>
                </div>

                <div onClick={trigger} className="Sport gap-8" style={{ height: (menu ? 300 : 10) }}>
                    Sport
                    {/* <h3>Sport</h3> */}
                    <p className="py-[8px] px-[16px]">Soccer</p>
                    <p className="py-[8px] px-[16px]">Volleyball</p>
                </div>
                <h3>Technology</h3>
                <h3>Entertainment</h3>
            </div>

        </div>
    )
}
export default SideBar;