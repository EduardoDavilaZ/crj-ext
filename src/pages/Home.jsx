import MainLayout from '../layouts/MainLayout';
import Hero from '../components/Hero';
import Projects from "../components/Projects";

export default function Home() {
    return (
        <MainLayout>
            <Hero />

            <Projects />
        </MainLayout>
    );
}