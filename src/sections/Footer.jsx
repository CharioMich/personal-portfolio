import {Github, Linkedin, LucideMail} from "lucide-react";

const Footer = () => {

    const year = new Date().getFullYear();

    const socials = [
        {
            name: 'Mail',
            url: 'mailto:michalakiscm@gmail.com',
            icon: <LucideMail/>
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/cmichalakis/',
            icon: <Linkedin />
        },
        {
            name: 'GitHub',
            url: 'https://github.com/CharioMich',
            icon: <Github/>
        },
    ]

    return (
        <footer className="flex justify-between items-center pointer-events-auto z-50 px-3 border-t-1
                            border-black/60 dark:border-neutral-600 text-neutral-600 dark:text-neutral-600 h-15">
            <div>{year} &copy; C.Michalakis. All Rights Reserved</div>
            <div className="flex justify-end gap-3">
                {socials.map((social, index) => (
                    <a
                        href={social.url}
                        target="_blank"
                        className="hover:text-gray-900 dark:hover:text-white hover:scale-[120%]"
                        key={index}
                    >{social.icon}</a>
                ))}
            </div>
        </footer>
    )
}

export default Footer;