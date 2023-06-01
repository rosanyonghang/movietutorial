import {Home} from "../pages/Home";
import {Nav} from "../components/partials/Nav";
import {Sidebar} from "../components/partials/Sidebar";

export const HomeLayout = () => {
    return <main className={"home"}>
        <Sidebar/>
        <section className={"content"}>
            <Nav/>
            <div className="routing-area">
                <Home/>
            </div>
        </section>
    </main>
}