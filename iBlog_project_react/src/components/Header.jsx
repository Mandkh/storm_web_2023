function Header() {
    return (
        <div className="header flex flex-row gap-x-[116px] ">
            <div className="search-section flex inline-flex">
                <input type="text" placeholder="хайх" className="rounded-lg border-y-[1px] border-x-[1px] w-[400px] h-[28px] " />
                <img src="" alt="" />
            </div>
            <div className="gap-x-[14px]">
                <button className="w-[140px] h-[32px] rounded-lg border-0 bg-gray-100">Бүртгүүлэх</button>
                <button className="bg-orange-500 h-[32px] border-0 rounded-lg text-white w-[120px]">Нэвтрэх</button>
            </div>
        </div>
    )
}
export default Header;