import { footerLinks, languages } from "@/appData";
import { socials } from "@/appData/personal";
import Logo from "../Navbar/Logo";

const Footer = () => {
  return (
    <footer className="bg-secondary overflow-hidden px-4 py-14 md:p-14">
      <div className="mx-auto max-w-300 relative flex flex-col gap-16">
        <div className="relative z-20 grid grid-cols-1 items-start md:grid-cols-2 gap-12">
          <div>
            <h5 className="flex mb-8 items-center gap-2">
              <Logo />
              <p className="text-neutral text-lg font-medium">Trishana Rai</p>
            </h5>
            <p className="text-tertiary-content">
              Full Stack Developer delivering high-quality web solutions through smart architecture and solid engineering - end to end
            </p>
          </div>

          <div className="flex flex-wrap gap-8 md:justify-end">
            {footerLinks.map((link) => (
              <a
                href={link.href}
                key={link.href}
                className="text-tertiary-content hover:text-neutral transition-colors duration-300 hover:underline"
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-between md:flex-row gap-12">
          <div>
            <div className="flex flex-col">
              <h5 className="text-neutral mb-4 text-lg font-medium">
                Contact Us
              </h5>
              <p className="text-tertiary-content text-sm font-light mb-1">
                trishanarai7@gmail.com
              </p>
              <a
                href="tel:+977 9818448489"
                className="text-tertiary-content hover:text-neutral text-sm font-light transition-colors duration-300"
              >
                +977 9818448489
              </a>
              <div className="grid grid-cols-2 gap-4 mt-2">
                <ul className="flex gap-4">
                  {socials.map((item, index) => (
                    <li key={index} className="cursor-pointer bg-transparent">
                      <a
                        href={item.href}
                        className="text-neutral transition-color hover:text-neutral/50 h-full w-full duration-300"
                      >
                        {item.icon}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div>
            <p className="text-neutral mb-4 text-lg font-medium md:text-right">
              Languages
            </p>
            <div className="flex gap-8 md:gap-4 lg:gap-8 text-sm">
              {languages.map((language, idx) => (
                <span
                  key={language}
                  className={
                    idx === 0 ? "text-neutral" : "text-tertiary-content"
                  }
                >
                  {language}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="relative self-bottom flex w-full justify-center pt-6">
          <p className="text-tertiary-content flex flex-col self-end text-right text-xs md:text-center">
            © 2026 — Trishana Rai
          </p>
        </div>
        <div className="bg-neutral/4 absolute top-1/2 -right-[40%] z-0 h-[120dvw] w-[120dvw] -translate-y-1/2 rounded-full p-14 md:top-0 md:-right-63.75 md:-bottom-112.5 md:size-257.5 md:translate-y-0 md:p-20">
          <div className="bg-neutral/4 size-full rounded-full p-14 md:p-20">
            <div className="bg-neutral/5 size-full rounded-full" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
