import React from "react";
import styled from "@emotion/styled";
import Dropdown from "react-bootstrap/Dropdown";
import SelectLangText from "./SelectLangText";
import { useTranslation, Trans } from "react-i18next";

const MyDropdown = styled(Dropdown)({
    paddingLeft: "16px",
});

const langs = [
    {
        code: "ru",
        name: "Русский (RU)",
    },
    {
        code: "zh",
        name: "中文 (ZH)",
    },
    {
        code: "en",
        name: "English (EN)",
    },
];

const getFontWeight = (selectedLang, code) => {
    if (selectedLang === code && selectedLang === "zh") {
        return "bold";
    }
    if (selectedLang === code) {
        return "500";
    }
    return "normal";
};

function SelectLang() {
    const { t, i18n } = useTranslation();
    return (
        <MyDropdown align="end" drop="down">
            <Dropdown.Toggle as={SelectLangText} id="select-lang" />
            <Dropdown.Menu>
                {langs.map((lang) => (
                    <Dropdown.Item
                        key={lang.code}
                        onClick={() => i18n.changeLanguage(lang.code)}
                        style={{ fontWeight: getFontWeight(i18n.resolvedLanguage, lang.code) }}
                    >
                        {lang.name}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </MyDropdown>
    );
}

export default SelectLang;
