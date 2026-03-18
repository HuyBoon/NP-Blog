"use client";

import { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "vi";

interface LanguageContextType {
    lang: Language;
    toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
    undefined,
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [lang, setLang] = useState<Language>("en");

    useEffect(() => {
        const savedLang = localStorage.getItem("pinblog_lang") as Language;
        if (savedLang) setLang(savedLang);
    }, []);

    const toggleLang = () => {
        const newLang = lang === "en" ? "vi" : "en";
        setLang(newLang);
        localStorage.setItem("pinblog_lang", newLang);
    };

    return (
        <LanguageContext.Provider value={{ lang, toggleLang }}>
            {children}
        </LanguageContext.Provider>
    );
}

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context)
        throw new Error("useLanguage must be used within LanguageProvider");
    return context;
};
