import i18n from "@config/i18n-config";
import { LOCALES } from "@i18n/type";
import { LOCAL_STORAGE_LANGUAGE } from "../constants";

class I18nService {
  changeLanguage(lng: LOCALES) {
    i18n.changeLanguage(lng).then(_ => {
      localStorage.setItem(LOCAL_STORAGE_LANGUAGE, lng);
    });
  }

  get currentLocale(): LOCALES {
    return i18n.language as LOCALES;
  }
}

export default new I18nService();
