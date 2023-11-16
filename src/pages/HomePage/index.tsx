import { ROLES } from "@app/constants/roles";
import { LOCALES } from "@i18n/type";
import i18nService from "@services/i18n.service";
import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t, i18n } = useTranslation();

  const [role] = React.useState(() => {
    return ROLES.ADMIN;
  });

  const handleChangeLng = useCallback(() => {
    const lng =
      i18nService.currentLocale === LOCALES.VI ? LOCALES.EN : LOCALES.VI;
    i18nService.changeLanguage(lng);
  }, []);

  return (
    <div>
      This is home page: {role} <h1>{t("hello")}</h1>{" "}
      <button onClick={handleChangeLng}>change lng</button>
    </div>
  );
};

export default HomePage;
