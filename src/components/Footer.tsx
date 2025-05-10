import { useLocation } from "react-router-dom";




const Footer = () => {
    const location = useLocation();
    if (location.pathname === "/") {
        return <></>;
    }

    return (
        <footer className="text-center text-sm text-gray-500 py-2 border-t">
            © {new Date().getFullYear()} NextTrend
        </footer>
    );
};

export default Footer;
