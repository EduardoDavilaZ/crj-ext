import MainLayout from '../layouts/MainLayout';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import PrinciplesMarquee from '../components/PrinciplesMarquee';
import SEO from '../components/SEO';

export default function Home() {
    return (
        <MainLayout>
            <SEO
                title="CRJ Tierras de Badajoz"
                description="Cruz Roja Juventud en Badajoz: descubre nuestros proyectos, actividades, voluntariado y oportunidades para participar con jóvenes y en la comunidad."
                canonical="https://crj-ext.vercel.app/"
                image="https://crj-ext.vercel.app/og-image.png"
            />

            <Hero />
            <PrinciplesMarquee />
            <Projects />
        </MainLayout>
    );
}