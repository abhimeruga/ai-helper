const constants : constTypes =  {
    preambles : {
        CA:'code',
        WP:'poems',
        CS:'grammar',
        RAG:'RAG',
        PG:'prompt'
    }
}

 type constTypes = {
    preambles : preamblesType
}

export type preamblesType = {
    CA:string,
    WP:string,
    CS:string,
    RAG:string,
    PG:string
}

export type ChatId = 'CA' | 'WP' | 'CS' | 'RAG' | 'PG';

export const descriptions: Record<ChatId, string> = {
        CA:'Helps write JS code',
        WP:'Write poems',
        CS:'Correct your grammar',
        RAG:'Build RAG',
        PG:'Prompt Generator'
}


export default constants;