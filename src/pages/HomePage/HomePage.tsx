import { About } from "./About.tsx";
import { Clients } from "./Clients/Clients.tsx";
import { Expertise } from "./Expertise/Expertise.tsx";
import { Hero } from "./Hero/Hero.tsx";
import { Services } from "./Services/Services.tsx";
import { Team } from "./Team/Team.tsx";

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