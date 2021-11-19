import { GoogleForm } from "react-google-forms-hooks";

const GOOGLE_FORMS_URL = 'https://docs.google.com/forms/u/0/d/'

export const submitToGoogleForms = async (data: any, form: GoogleForm) => {
    const entriesArr: string[] = [];
    Object.keys(data).forEach(key => {
        if (Array.isArray(data[key])) {
            data[key].forEach((key2: number) => entriesArr.push(`entry.${key}=${key2}`));    
        } else {
            entriesArr.push(`entry.${key}=${data[key]}`)
        }
    });
    console.log(entriesArr);
    fetch(`${GOOGLE_FORMS_URL}${form.action}/formResponse`, {
        method: 'POST',
        body: `entry.929664963=tesy&entry.329462997=%D0%A1%D0%B0%D0%BB%D0%B0%D1%82+%D1%81+%D0%BB%D0%BE%D1%81%D0%BE%D1%81%D0%B5%D0%BC&entry.329462997=%D0%A1%D0%B0%D0%BB%D0%B0%D1%82+%D0%B8%D0%B7+%D0%BF%D0%B5%D1%87%D0%B5%D0%BD%D0%B8+%D1%84%D0%B5%D1%80%D0%BC%D0%B5%D1%80%D1%81%D0%BA%D0%BE%D0%B3%D0%BE+%D1%86%D1%8B%D0%BF%D0%BB%D0%B5%D0%BD%D0%BA%D0%B0+%D1%81+%D0%BC%D0%B0%D0%BB%D0%B8%D0%BD%D0%BE%D0%B2%D1%8B%D0%BC+%D1%81%D0%BE%D1%83%D1%81%D0%BE%D0%BC&dlut=1637269946655&entry.329462997_sentinel=&fvv=1&partialResponse=%5Bnull%2Cnull%2C%223302540247816963018%22%5D&pageHistory=0&fbzx=3302540247816963018`
    });
};