import React from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.css";

// SVGs das bandeiras para garantir renderização perfeita em qualquer SO/Windows
const FlagPT = () => (
  <svg
    className="language-switcher__flag"
    viewBox="0 0 640 480"
    width="18"
    height="13"
    aria-hidden="true"
  >
    <path fill="#006600" d="M0 0h256v480H0z" />
    <path fill="#ff0000" d="M256 0h384v480H256z" />
    <circle cx="256" cy="240" r="90" fill="#ffff00" />
    <circle cx="256" cy="240" r="70" fill="#ffffff" />
    <path fill="#00267f" d="M236 215h40v50c0 11-9 20-20 20s-20-9-20-20z" />
  </svg>
);

const FlagGB = () => (
  <svg
    className="language-switcher__flag"
    viewBox="0 0 60 30"
    width="18"
    height="13"
    aria-hidden="true"
  >
    <clipPath id="s">
      <path d="M0 0v30h60V0z" />
    </clipPath>
    <clipPath id="t">
      <path d="M30 15h30v15zv15H0zH0V0zV0h30z" />
    </clipPath>
    <g clipPath="url(#s)">
      <path d="M0 0v30h60V0z" fill="#012169" />
      <path d="M0 0l60 30m0-30L0 30" stroke="#fff" strokeWidth="6" />
      <path
        d="M0 0l60 30m0-30L0 30"
        clipPath="url(#t)"
        stroke="#c8102e"
        strokeWidth="4"
      />
      <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10" />
      <path d="M30 0v30M0 15h60" stroke="#c8102e" strokeWidth="6" />
    </g>
  </svg>
);

const LANGUAGES = [
  { code: "pt", Flag: FlagPT, label: "Português" },
  { code: "en", Flag: FlagGB, label: "English" },
];

function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const activeLanguage = i18n.resolvedLanguage?.split("-")[0] ?? "pt";

  return (
    <div className="language-switcher" role="group" aria-label={t("language")}>
      {LANGUAGES.map(({ code, Flag, label }) => {
        const isActive = activeLanguage === code;
        return (
          <button
            key={code}
            type="button"
            className={`language-switcher__btn${isActive ? " is-active" : ""}`}
            onClick={() => i18n.changeLanguage(code)}
            aria-pressed={isActive}
            aria-label={label}
          >
            <Flag />
            <span className="language-switcher__text">
              {t(`languages.${code}`)}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default LanguageSwitcher;
