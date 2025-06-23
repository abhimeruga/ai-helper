const constants : constTypes =  {
    preambles : {
        CA:'code',
        WP:'poems',
        CS:'grammar',
        RAG:'RAG'
    }
}

 type constTypes = {
    preambles : preamblesType
}

export type preamblesType = {
    CA:string,
    WP:string,
    CS:string,
    RAG:string
}

export default constants;