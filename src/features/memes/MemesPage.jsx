import { useState, useEffect, useCallback, useRef } from 'react';
import { memeService } from '../../services/memeService';
import MemeCard from './components/MemeCard';
import MainLayout from '../../layouts/MainLayout';
import catLoader from '../../assets/cat-loader.gif';
import SEO from '../../components/SEO';

export default function MemesPage() {
    const [memes, setMemes] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);

    const loadingRef = useRef(false);

    const loadMemes = useCallback(async (currentPage) => {
        if (loadingRef.current) return;
        
        loadingRef.current = true;
        setLoading(true);
        
        try {
            const data = await memeService.getMemes(currentPage);
            
            setMemes(prev => {
                const existingIds = new Set(prev.map(m => m.id));
                const uniqueNewMemes = data.data.filter(m => !existingIds.has(m.id));
                return [...prev, ...uniqueNewMemes];
            });

            setHasMore(currentPage < data.last_page);
        } catch (error) {
            console.error("Error al cargar más memes", error);
        } finally {
            loadingRef.current = false;
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        loadMemes(1);
    }, [loadMemes]);

    useEffect(() => {
        const handleScroll = () => {
            if (
                window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 500 && 
                hasMore && 
                !loadingRef.current
            ) {
                setPage(prev => {
                    const nextPage = prev + 1;
                    loadMemes(nextPage);
                    return nextPage;
                });
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [hasMore, loadMemes]);

    return (
        <MainLayout>
            <div className="container">
                <SEO
                    title="Memes de Cruz Roja Juventud"
                    description="Memes y contenido de humor de Cruz Roja Juventud para nuestra comunidad de voluntariado."
                    canonical="https://crj-ext.vercel.app/zona-feliz/memes"
                    image="https://crj-ext.vercel.app/og/memes.png"
                />

                <h1 className='h1 text-center'>El lado menos serio de CRJ</h1>
                <p className='subtitle text-center'>No podemos ser serios todo el tiempo, ¿no?</p>

                <div className="d-flex flex-column align-items-center gap-4">
                    {memes.map((meme, index) => (
                        <div className="w-100 d-flex justify-content-center" key={`${meme.id}-${index}`}>
                            <MemeCard meme={meme} />
                        </div>
                    ))}
                </div>

                {loading && (
                    <div className="center loader">
                        <img src={catLoader} alt="Cargando memes..." />
                    </div>
                )}

                {!hasMore && memes.length > 0 && (
                    <p className="text-center text-muted mt-4">¡Has llegado al final de los memes! 🎉</p>
                )}
            </div>
        </MainLayout>
    );
}