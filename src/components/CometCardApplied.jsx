import CometCard from "@/components/CometCard.jsx";
import { ClipboardCopy, LucideMailbox } from "lucide-react";
import { toast } from "sonner";

export default function CometCardApplied({cardClass}) {

    const handleCopy = () => {
        navigator.clipboard.writeText("michalakiscm@gmail.com");
        toast.info("Email copied to clipboard!");
    }

    return (
        <CometCard className={cardClass}>
            <div
                className="flex w-80 flex-col items-stretch rounded-[16px] border-0 bg-[#010614]/50 p-2 md:p-4"
                aria-label="View invite F7RA"
                style={{
                    transformStyle: "preserve-3d",
                    transform: "none",
                    opacity: 1,
                }}>
                <div className="mx-2 flex-1">
                    <div className="relative mt-2 aspect-[3/4] md:w-full">
                        <img
                            loading="lazy"
                            className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover contrast-75"
                            alt="Invite background"
                            src="/assets/ciaran-o-brien-cut.webp"
                            style={{
                                boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                                opacity: 1,
                            }} />
                    </div>
                </div>
                <div className="mt-2 flex flex-row items-center justify-between p-4 font-mono text-white">
                    <a
                        href="mailto:michalakiscm@gmail.com"
                        className="flex cursor-pointer text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-4 py-2.5 text-center me-2 mb-2"
                    >
                        <LucideMailbox className="pt-2" size={32}/>
                        <div>Send Email</div>
                    </a>
                    <button
                        onClick={handleCopy}
                        type="button"
                        className="flex flex-row cursor-pointer text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-4 py-2.5 text-center me-2 mb-2"
                    >
                        <ClipboardCopy className="pt-2" size={32}/>
                        <div>Copy Email</div>
                    </button>
                </div>
            </div>
        </CometCard>
    );
}
