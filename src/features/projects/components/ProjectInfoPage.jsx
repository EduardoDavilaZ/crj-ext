import MainLayout from '../../../layouts/MainLayout';
import SEO from '../../../components/SEO';

function normalizeIconClass(icon) {
    if (!icon) return 'bi bi-info-circle';
    if (icon.startsWith('bi ')) return icon;
    if (icon.startsWith('bi-')) return `bi ${icon}`;
    return `bi bi-${icon}`;
}

export default function ProjectInfoPage({
    title,
    subtitle,
    description,
    slug,
    ogImage,
    whatWeDo,
    image,
    infoCards = [],
    footer,
}) {
    const imageWidthClass = image?.widthClass || 'w-75';

    return (
        <MainLayout>
            <SEO
                title={title}
                description={description}
                canonical={`https://crj-ext.vercel.app/proyecto/${slug}`}
                image={`https://crj-ext.vercel.app/og/${slug}.png`}
            />
            
            <div className="container">
                <h1 className="h1">{title}</h1>
                <p className="subtitle">{subtitle}</p>

                <section>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <h2 className="h2">¿Qué se hace?</h2>
                            <p>{whatWeDo.description}</p>
                            <ul>
                                {whatWeDo.items.map((item) => (
                                    <li key={item.label}>
                                        <strong>{item.label}</strong>: {item.text}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="col-12 col-md-6 center">
                            <img
                                src={image.src}
                                alt={image.alt || 'crj'}
                                className={`shadow-md rounded-2 ${imageWidthClass}`}
                            />
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="h2">¿Qué debo tener en cuenta?</h2>

                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                        {infoCards.map((card) => (
                            <div className="col p-4" key={card.title}>
                                <div className="info-card row">
                                    <h4>{card.title}</h4>
                                    <p>{card.description}</p>
                                    <i className={normalizeIconClass(card.icon)} />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {footer}
            </div>
        </MainLayout>
    );
}
