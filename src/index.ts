import * as readlineSync from 'readline-sync';
import { Voetbal, Positie, Team } from './interface'; // Zorg ervoor dat je interface.ts in dezelfde map bevindt
import data from './voetballers.json';

// Functie om data uit JSON-bestand te laden 
function loadVoetbalData(): Voetbal[] {
    return data as unknown as Voetbal[]; 
}
// Functie om voetbaldata op een overzichtelijke manier weer te geven
function displayVoetbalData(voetbalData: Voetbal[]) {
    console.log("Voetbaldata:");
    voetbalData.forEach(player => {
        console.log(`ID: ${player.id}, Naam: ${player.naam}, Positie: ${player.positie}`);
    });
}

function findVoetbalPlayerById(voetbalData: Voetbal[], id: number): Voetbal | undefined {
    return voetbalData.find(player => player.id === id);
}

function displayMenu() {
    console.log("\n1. Toon alle voetbalspelers");
    console.log("2. Zoek voetbalspeler op ID");
    console.log("3. Stoppen");
}

function main() {
    const voetbalData = loadVoetbalData();
    let stop = false;

    while (!stop) {
        displayMenu();
        const choice = parseInt(readlineSync.question("Voer uw keuze in: "));

        switch (choice) {
            case 1:
                displayVoetbalData(voetbalData);
                break;
            case 2:
                const playerId = parseInt(readlineSync.question("Voer de ID van de voetbalspeler in: "));
                const player = findVoetbalPlayerById(voetbalData, playerId);
                if (player) {
                    console.log("Gevonden voetbalspeler:");
                    console.log(player);
                } else {
                    console.log("Geen voetbalspeler gevonden met dat ID.");
                }
                break;
            case 3:
                stop = true;
                console.log("Bedankt voor het gebruik van de applicatie. Tot ziens!");
                break;
            default:
                console.log("Ongeldige keuze. Probeer opnieuw.");
                break;
        }
    }
}

main();
