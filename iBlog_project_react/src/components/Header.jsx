// import search from "./images/search.png"

function Header() {
    return (
        <div className="header flex flex-row gap-x-[116px] m-15 py-16 w-96 h-10 border-neutral-300 justify-between items-center inline-flex">
            <div className="search-section flex inline-flex flex-row">
                <input type="text" placeholder="Хайх" className="rounded-lg border-y-[1px] border-x-[1px] w-[400px] h-[28px] " />
                <img src="" alt="" />
                <div className="gap-x-[14p] flex">
                <button className="w-[140px] h-[34px] rounded-lg border-0 bg-gray-100">Бүртгүүлэх</button>
                <button className="bg-orange-500 h-[34px] border-0 rounded-lg text-white w-[120px]">Нэвтрэх</button>
            </div>
            </div>
        </div>
    )
}
export default Header;