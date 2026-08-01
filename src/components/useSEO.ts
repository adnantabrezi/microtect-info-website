import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const localeMap: Record<string, string> = {
  en: "en_US",
  gu: "gu_IN",
  it: "it_IT",
  fr: "fr_FR",
  zh: "zh_CN",
};

const supportedLangs = ["en", "gu", "it", "fr", "zh"];

export function useSEO(title: string, description?: string) {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || "en";

  useEffect(() => {
    // 1. Update html lang attribute
    document.documentElement.lang = currentLang;

    // 2. Update document title
    document.title = title;

    // 3. Update meta description
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", description);
      } else {
        metaDescription = document.createElement("meta");
        metaDescription.setAttribute("name", "description");
        metaDescription.setAttribute("content", description);
        document.head.appendChild(metaDescription);
      }

      // Open Graph & Twitter description
      let ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute("content", description);
      
      let twitterDesc = document.querySelector('meta[property="twitter:description"]');
      if (twitterDesc) twitterDesc.setAttribute("content", description);
    }

    // 4. Update Open Graph & Twitter title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", title);

    let twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute("content", title);

    // 5. Update Open Graph locale
    let ogLocale = document.querySelector('meta[property="og:locale"]');
    const targetLocale = localeMap[currentLang] || "en_US";
    if (ogLocale) {
      ogLocale.setAttribute("content", targetLocale);
    } else {
      ogLocale = document.createElement("meta");
      ogLocale.setAttribute("property", "og:locale");
      ogLocale.setAttribute("content", targetLocale);
      document.head.appendChild(ogLocale);
    }

    // 6. Ensure hreflang alternate links exist
    const currentPath = window.location.pathname;
    const baseUrl = "https://microtechindia.com";

    // Manage x-default
    let xDefaultLink = document.querySelector('link[rel="alternate"][hreflang="x-default"]');
    if (!xDefaultLink) {
      xDefaultLink = document.createElement("link");
      xDefaultLink.setAttribute("rel", "alternate");
      xDefaultLink.setAttribute("hreflang", "x-default");
      xDefaultLink.setAttribute("href", `${baseUrl}${currentPath}`);
      document.head.appendChild(xDefaultLink);
    } else {
      xDefaultLink.setAttribute("href", `${baseUrl}${currentPath}`);
    }

    // Manage language-specific hreflang tags
    supportedLangs.forEach((lang) => {
      let langLink = document.querySelector(`link[rel="alternate"][hreflang="${lang}"]`);
      if (!langLink) {
        langLink = document.createElement("link");
        langLink.setAttribute("rel", "alternate");
        langLink.setAttribute("hreflang", lang);
        langLink.setAttribute("href", `${baseUrl}${currentPath}`);
        document.head.appendChild(langLink);
      } else {
        langLink.setAttribute("href", `${baseUrl}${currentPath}`);
      }
    });

  }, [title, description, currentLang]);
}

