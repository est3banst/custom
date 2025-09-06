import { useEffect, useState } from "react";

const QA_PAIRS = [
  {
    question: "asistente virtual",
    answer:
      "En Kustom nos encargamos del desarrollo e integración de asistentes virtuales. Puedes contactarnos [aquí](https://api.whatsapp.com/send/?phone=%2B59891632722&text=Asistente-IA..).",
  },
  {
    question: "quienes son kustomdev",
    answer:
      "Somos una empresa de desarrollo con enfoque en soluciones web a medida para clientes de todo el mundo.",
  },
  {
  question: "contacto",
  answer:
    'Puedes enviarnos un mensaje por <a href="https://api.whatsapp.com/send?phone=59891632722&text=Hola%2C%20quisiera%20hacer%20una%20consulta" target="_blank" class="wp-chat" rel="noopener noreferrer">WhatsApp</a> o usar la sección de contacto en la web.',
},
  {
    question: "precios",
    answer:
      "SPA: 4500 a 12000 UYU/anual. Tiendas: 33000 a 55000 UYU/anual con 5% extra si supera 5000 transacciones/mes. Soporte: 3500 (standard) o 9500 (premium)/mes.",
  },
  {
    question: "servicios",
    answer:
      "Desarrollo web, tiendas virtuales, integraciones completas, asistentes IA, soporte, APIs y más.",
  },
  {
    question: "tiempo",
    answer:
      "Sitios básicos: 2-4 semanas. Proyectos completos: 1-3 meses. Brindamos un cronograma detallado tras la fase de relevamiento.",
  },
];

const SUGGESTED_TOPICS = [
  "Servicios",
  "Precios",
  "Quiénes somos",
  "Contacto",
  "Asistente IA",
  "Tiempos de desarrollo",
];

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [chat, setChat] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (open && chat.length === 0) {
      setChat([
        {
          from: "bot",
          text: `Hola, soy el asistente virtual de Kustom, ¿en qué puedo ayudarte?<br/><br/>Puedes preguntar sobre: ${SUGGESTED_TOPICS.map(
            (t) => `<span class="bg-gray-100 px-2 py-1 rounded inline-block mr-1 mb-1">${t}</span>`
          ).join(" ")}`,
        },
      ]);
    }
  }, [open]);

  const handleSend = () => {
    if (!input.trim()) return;

    const lower = input.toLowerCase();
    const match = QA_PAIRS.find((qa) => lower.includes(qa.question));

    const userMessage = { from: "user", text: input };
    const botMessage = {
      from: "bot",
      text: match
        ? match.answer
        : 'Lo siento, no entendí tu pregunta. Puedes reformularla o contactarnos por <a href="https://api.whatsapp.com/send?phone=59891632722&text=Hola%2C%20quisiera%20hacer%20una%20consulta" target="_blank" class="wp-chat" rel="noopener noreferrer">WhatsApp</a>',
    };

    setChat((prev) => [...prev, userMessage]);
  setInput("");

 setChat((prev) => [...prev, { from: "bot", text: "<i>Escribiendo...</i>" }]);

setTimeout(() => {
  setChat((prev) => {
    const updated = [...prev];
    updated.pop(); 
    return [...updated, botMessage];
  });
}, 1000);
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed cursor-pointer bottom-4 right-4 bg-[#a78bfa] text-slate-900 px-4 py-2 rounded-full shadow-lg z-50"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width={34} height={34} viewBox="0 0 24 24">
	<path fill="currentColor" d="M19 10a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3v.966c0 1.06-1.236 1.639-2.05.96L14.638 19H12a3 3 0 0 1-3-3v-3a3 3 0 0 1 3-3z" className="duoicon-secondary-layer" opacity={0.3}></path>
	<path fill="currentColor" d="M16 4a3 3 0 0 1 3 3v1h-8a4 4 0 0 0-4 4v4c0 1.044.4 1.996 1.056 2.708L7 19.5c-.824.618-2 .03-2-1V17a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3z" className="duoicon-primary-layer"></path>
</svg>
      </button>

      {open && (
        <div className="fixed bottom-20 right-4 w-80 max-h-[80vh] bg-white border shadow-lg rounded-lg flex flex-col z-50">
          <div className="p-3 border-b font-semibold rounded-lg bg-[#a78bfa] text-slate-900">
            Asistente Virtual - Kustom
          </div>
          <div className="flex-1 p-3 overflow-y-auto text-sm space-y-2">
            {chat.map((msg, i) => (
              <div
                key={i}
                className={`${
                  msg.from === "user" ? "text-right text-black" : "text-left text-black"
                }`}
                dangerouslySetInnerHTML={{ __html: msg.text }}
              />
            ))}
          </div>
          <div className="p-2 border-t flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 border px-2 py-1 rounded text-black text-sm"
              placeholder="Escribe tu pregunta..."
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="ml-2 bg-[#a77bed] cursor-pointer text-white px-3 py-1 rounded"
            >
              Enviar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
