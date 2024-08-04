

const Navbar = () => {
    return (
        <div className="flex justify-between px-10 bg-black text-white p-10 mb-10 w-full">
            <h1 className="font-bold text-xl">Dragon Ball Z</h1>

            <ul className="flex gap-10 font-bold text-xl">
                <li>Characters</li>
                <li>Planets</li>
            </ul>
        </div>
    )
}

export default Navbar