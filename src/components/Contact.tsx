import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6 bg-gray-100 text-center">
      <div className="max-w-2xl mx-auto">
        <h3 className="text-3xl font-bold text-gray-800">Entre em Contato</h3>
        <p className="mt-4 text-gray-600">
          Tem alguma dúvida ou sugestão? Envie uma mensagem ou entre em contato pelo e-mail:
          <span className="block text-blue-600 font-semibold mt-1">
            prsousa.dev@gmail.com
          </span>
        </p>
      </div>

      <div className="mt-8">
        <ContactForm />
      </div>
    </section>
  );
}
