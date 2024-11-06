export const Currencies = [
    {
        value: "USD",
        label: "$ Dollar",
        locale: "en-US",
    },
    {
        value: "EUR",
        label: "€ Euro",
        locale: "de-DE",
    },
    {
        value: "GBP",
        label: "£ Pound",
        locale: "en-GB",
    },
    {
        value: "JPY",
        label: "¥ Yen",
        locale: "ja-JP",
    },
    {
        value: "IDR",
        label: "Rp Rupiah",
        locale: "id-ID",
    },
    {
        value: "BRL",
        label: "R$ Real",
        locale: "pt-BR",
    }
];

export type Currency = (typeof Currencies)[0];