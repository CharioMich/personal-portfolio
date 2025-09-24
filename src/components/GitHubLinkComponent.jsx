const GitHubLink = ({ url, className, children }) => {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-4 py-2 mt-4 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold ${className || ""}`}
        >
            {children || "View on GitHub"}
        </a>
    );
};

export default GitHubLink;