import MainLayout from '../layouts/MainLayout';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import PrinciplesMarquee from '../components/PrinciplesMarquee';

export default function Home() {
    return (
        <MainLayout>
            <Hero />
            <PrinciplesMarquee />
            <Projects />
        </MainLayout>
    );
}