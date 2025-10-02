import {ClipboardCopy, LucideMailbox} from "lucide-react";
import { toast } from "sonner";

const PhoneCard = () => {

    const handleCopy = () => {
        navigator.clipboard.writeText("michalakiscm@gmail.com");
        toast.info("Email copied to clipboard!");
    }

    return (
        <div className="flex flex-col max-w-sm max-h-sm p-2 md:p-6 rounded-[16px] border-0 shadow-lg shadow-gray-700 bg-gray-900/50 dark:bg-[#010614]/40">
            <img
                loading="lazy"
                className="h-full w-full rounded-[16px] dark:opacity-70 "
                alt="Invite background"
                src="/assets/ciaran-o-brien-cut.webp"
            />
            <div className="flex flex-row justify-between pt-4">
                <a
                    href="mailto:michalakiscm@gmail.com"
                    className="flex w-1/2 items-center justify-around cursor-pointer text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-4 py-2.5 text-center me-2 mb-2"
                >
                    <LucideMailbox className="" size={30}/>
                    <div>Send Email</div>
                </a>
                <button
                    onClick={handleCopy}
                    type="button"
                    className="flex w-1/2 items-center justify-around cursor-pointer text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-4 py-2.5 text-center me-2 mb-2"
                >
                    <ClipboardCopy className="" size={30}/>
                    <div>Copy Email</div>
                </button>
            </div>
        </div>
    )
}

export default PhoneCard;