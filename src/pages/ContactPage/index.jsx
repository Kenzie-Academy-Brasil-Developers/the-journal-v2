import { ContactForm } from "../../components/forms/ContactForm";
import Contact from "../../assets/ContactIllustration.jpg";

export const ContactPage = () => {
   return (
      <>
         <div className="container">
            <img src={Contact} alt="Ilustração Contato" />
            <div>
               <h1 className="title one">Fale conosco</h1>
               <p className="paragraph">Preencha o formulário para enviar uma mensagem</p>
               <ContactForm />
            </div>
         </div>
      </>
   );
};
