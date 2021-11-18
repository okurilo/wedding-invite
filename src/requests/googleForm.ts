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
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': '*'
        },
        mode: 'no-cors',
        body: `${entriesArr.join('&')}&fvv=${form.fvv}&fbzx=${form.fbzx}`
    });
};