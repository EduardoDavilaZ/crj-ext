import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function MainLayout({ children }) {
    return (
        <div className='bg-container'>
            <Navbar />

            <main className="flex-fill container my-4">
                {children}
            </main>

            <Footer />
        </div>
    );
}