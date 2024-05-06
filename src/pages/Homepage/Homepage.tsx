import { About } from "./About";
import { Clients } from "./Clients/Clients";
import { Expertise } from "./Expertise/Expertise";
import { Hero } from "./Hero/Hero";
import { Services } from "./Services/Services";
import { Team } from "./Team/Team";

export const HomePage = () => {
    return (
        <>
            <Hero />
            <About />
            <Expertise />
            <Services />
            <Clients />
            <Team />
        </>
    );
}