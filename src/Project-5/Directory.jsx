import Navbar from "../Project-5/Components/Navbar"
import "./Directory.css"
import SearchBox from "../Project-5/Components/SearchBox"


export default function Directory() {
    return(<>
        <div className="mx-auto max-w-[370px] px-4 ">
        <Navbar/>
        <SearchBox/>
        </div>
    </>)
}
