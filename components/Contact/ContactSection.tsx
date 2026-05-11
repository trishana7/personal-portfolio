import { MsgIcon, PhoneIcon } from "@/utils/icons";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="bg-secondary my-8 grid grid-cols-1 gap-16 rounded-4xl p-8 md:my-16 md:grid-cols-2 md:gap-8 lg:gap-12"
    >
      <div className="flex flex-col justify-between gap-8">
        <div>
          <h3 className="text-neutral text-3xl font-bold">
            Let’s Work Together
          </h3>
          <h4 className="text-accent text-2xl font-bold">
            Transforming ideas into real results
          </h4>
          <p className="text-neutral mt-8">
            Have a new project, want to improve an existing one, or explore working together? Reach out with a few details and I’ll respond soon.
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-neutral text-lg font-bold">Contact Information</p>
          <p className="text-neutral flex items-center gap-1 font-light">
            <MsgIcon /> trishanarai7@gmail.com
          </p>
          <a
            href="tel:+977 9818448489"
            className="text-neutral hover:text-accent flex items-center gap-1 font-light transition-colors duration-300"
          >
            <PhoneIcon /> +977 9818448489
          </a>
        </div>
      </div>

      <ContactForm />
    </section>
  );
};

export default ContactSection;
