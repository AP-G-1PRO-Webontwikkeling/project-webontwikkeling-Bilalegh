export interface Voetbal {
    id:            number;
    naam:          string;
    beschrijving:  string;
    leeftijd:      number;
    actief:        boolean;
    geboortedatum: Date;
    profielfoto:   string;
    positie:       Positie;
    hobbies:       string[];
    team:          Team;
}

export enum Positie {
    Aanvaller = "aanvaller",
    Middenvelder = "middenvelder",
    Verdediger = "verdediger",
}

export interface Team {
    id:   number;
    naam: string;
    land: string;
    logo: string;
}
