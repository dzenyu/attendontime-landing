import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Loader2 } from "lucide-react";

const AOT_BASE_APP_URL = import.meta.env.VITE_AOT_BASE_APP_URL || "https://app.attendontime.com";

interface RedirectProps {
    to: string;
}

const Redirect = ({ to }: RedirectProps) => {
    const location = useLocation();

    useEffect(() => {
        // Preserve query parameters and hash
        const queryParams = location.search;
        const hash = location.hash;
        const fullUrl = `${AOT_BASE_APP_URL}${to}${queryParams}${hash}`;

        // Redirect after a brief delay to show the message
        const timer = setTimeout(() => {
            window.location.href = fullUrl;
        }, 1000);

        return () => clearTimeout(timer);
    }, [to, location.search, location.hash]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-hero">
            <div className="text-center space-y-6 p-8">
                <div className="flex justify-center">
                    <Loader2 className="h-12 w-12 animate-spin text-primary" />
                </div>
                <div className="space-y-2">
                    <h1 className="text-2xl font-bold text-foreground">Redirecting...</h1>
                    <p className="text-muted-foreground">
                        Taking you to the application
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Redirect;
