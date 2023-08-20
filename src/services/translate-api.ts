import { FromLanguage, Languages } from "../types.d.ts";

const URL = "http://localhost:8080/api/translate";

export async function translate(from: FromLanguage, to: Languages, text: string){
    const params = new URLSearchParams({from, to, text});
    const request = await fetch(`${URL}/?${params}`);
    const response = await request.json();
    return response.translation;
}