"use client";

import { createContext, useContext, useState, useEffect, useMemo, type ReactNode } from "react";
import { en } from "@/translations/en";
import { id } from "@/translations/id";

export type Lang = "en" | "id";
type DeepString<T> = T extends string ? string : T extends readonly (infer U)[] ? readonly DeepString<U>[] : { [K in keyof T]: DeepString<T[K]> };
export type Translations = DeepString<typeof en>;

const translations = { en, id } as const;

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
}

const LanguageContext = createContext<LangCtx>({
  lang: "id",
  setLang: () => {},
  t: id,
});

export function LanguageProvider({ children }: Readonly<{ children: ReactNode }>) {
  const [lang, setLangState] = useState<Lang>("id");

  useEffect(() => {
    const stored = localStorage.getItem("lang") as Lang | null;
    if (stored === "en" || stored === "id") setLangState(stored);
  }, []);

  function setLang(l: Lang) {
    setLangState(l);
    localStorage.setItem("lang", l);
    document.documentElement.lang = l;
  }

  const value = useMemo<LangCtx>(
    () => ({ lang, setLang, t: translations[lang] }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [lang],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
