import {Logo} from "../common/Logo";

export const Sidebar = () => {
    const navItems = [
        {title: "Home", path: ""},
        {title: "About", path: ""},
        {title: "Services", path: ""},
        {title: "Features", path: ""},
        {title: "Contact", path: ""},
    ];
    return <div className={"side-bar-section"}>
        <Logo/>
        <div className="side-bar-items">
            {navItems.map((v,key)=>(
                <div className="side-bar-item">Home</div>
            ))}
        </div>
    </div>
}