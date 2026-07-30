export default function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-auto">
      <div className="container">
        <p className="mb-1 fw-semibold">Cruz Roja Juventud - Sección Local</p>
        <p className="text-muted small mb-0">
          Plataforma de gestión de voluntariado y proyectos sociales. &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}