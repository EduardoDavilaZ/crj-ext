import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function MainLayout({ children }) {
    return (
        <div className='bg-container d-flex flex-column min-vh-100'>
            <Navbar />

            <main className="flex-fill container my-1 my-md-4">
                {children}
            </main>

            <Footer />
        </div>
    );
}