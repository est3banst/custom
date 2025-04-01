import { useEffect } from "react";
import { useLanguage } from "./LanguageContext";

function LanguageHandler() {
    const { lang } = useLanguage();

    useEffect(() => {
        
        document.documentElement.lang = lang;

        const metaData = lang === 'en'
            ? {
                  title: "Web Development, Online Stores, and Custom Solutions - Kustom",
                  description:
                      "Looking for a website to promote and sell your services or products? We have the right solution for you. Professional and modern web development that makes your brand stand out, online stores that boost your sales, and management systems that increase your operational efficiency.",
                  keywords:
                      "Web development, Online store development, eCommerce, Digital brand, Online presence, Website redesign, Modern and optimized websites",
                  ogTitle: "Web Development, Online Stores, and Custom Solutions - Kustom",
                  ogDescription:
                      "Looking for a website to promote and sell your services or products? We have the right solution for you.",
                  author: "kustomdev.com",
              }
            : {
                  title: "Desarrollo Web, Tiendas Virtuales y Soluciones Personalizadas - Kustom",
                  description:
                      "¿Buscas una página web que te ayude a promocionar y vender tus servicios y/o productos? Tenemos la solución adecuada para vos. Desarrollo de páginas web profesionales y modernas que destacan tu marca, tiendas virtuales que aumentan tus ventas y sistemas de gestión que aumentan tu eficiencia operativa.",
                  keywords:
                      "Páginas web, Desarrollo de tienda en línea, ecommerce, Marca digital, presencia en línea, rediseño de páginas web, páginas web modernas y optimizadas",
                  ogTitle: "Desarrollo Web, Tiendas Virtuales y Soluciones Personalizadas - Kustom",
                  ogDescription:
                      "¿Buscas una página web que te ayude a promocionar y vender servicios y/o productos? Tenemos la solución adecuada para vos.",
                  author: "kustomdev.com",
              };

        document.title = metaData.title;

        const metaTags = [
            { name: "description", content: metaData.description },
            { name: "keywords", content: metaData.keywords },
            { property: "og:title", content: metaData.ogTitle },
            { property: "og:description", content: metaData.ogDescription },
            { name: "author", content: metaData.author },
        ];

        metaTags.forEach(({ name, property, content }) => {
            let metaElement;
            if (name) {
                metaElement = document.querySelector(`meta[name="${name}"]`);
            } else if (property) {
                metaElement = document.querySelector(`meta[property="${property}"]`);
            }

            if (metaElement) {
                metaElement.setAttribute("content", content);
            } else {
                const newMeta = document.createElement("meta");
                if (name) newMeta.setAttribute("name", name);
                if (property) newMeta.setAttribute("property", property);
                newMeta.setAttribute("content", content);
                document.head.appendChild(newMeta);
            }
        });

    }, [lang]);

    return null; 
}

export default LanguageHandler;

