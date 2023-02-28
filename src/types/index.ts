export interface Work {
    logo: {
        src: string;
        height: number;
        width: number;
    },
    titles: {
        position: string,
        company: string,
    },
    responsabilities: string[]
}