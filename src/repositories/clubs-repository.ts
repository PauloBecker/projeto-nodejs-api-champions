import { clubModel } from "../models/club-model";
import { findAllPlayers } from "./players-repository";
import fs from 'fs/promises';

const database: clubModel[] = [
    {
        "id": 1,
        "name": "Real Madrid",
        "country": "Spain",
        "league": "La Liga",
        "stadium": "Santiago Bernabéu",
        "founded": 1902
    },
    {
        "id": 2,
        "name": "Barcelona",
        "country": "Spain",
        "league": "La Liga",
        "stadium": "Camp Nou",
        "founded": 1899
    },
    {
        "id": 3,
        "name": "Manchester United",
        "country": "England",
        "league": "Premier League",
        "stadium": "Old Trafford",
        "founded": 1878
    },
    {
        "id": 4,
        "name": "Liverpool",
        "country": "England",
        "league": "Premier League",
        "stadium": "Anfield",
        "founded": 1892
    },
    {
        "id": 5,
        "name": "Bayern Munich",
        "country": "Germany",
        "league": "Bundesliga",
        "stadium": "Allianz Arena",
        "founded": 1900
    },
    {
        "id": 6,
        "name": "Paris Saint-Germain",
        "country": "France",
        "league": "Ligue 1",
        "stadium": "Parc des Princes",
        "founded": 1970
    },
    {
        "id": 7,
        "name": "Juventus",
        "country": "Italy",
        "league": "Serie A",
        "stadium": "Allianz Stadium",
        "founded": 1897
    },
    {
        "id": 8,
        "name": "Dortmund",
        "country": "Germany",
        "league": "Bundesliga",
        "stadium": "Signal Iduna Park",
        "founded": 1909
    },
    {
        "id": 9,
        "name": "Chelsea",
        "country": "England",
        "league": "Premier League",
        "stadium": "Stamford Bridge",
        "founded": 1905
    },
    {
        "id": 10,
        "name": "Inter Milan",
        "country": "Italy",
        "league": "Serie A",
        "stadium": "San Siro",
        "founded": 1908
    }
];

export const findAllClubs = async (): Promise<clubModel[]> => {
    const data = await fs.readFile('./src/data/clubs.json', 'utf-8');
    const clubs = JSON.parse(data) as clubModel[];
    return clubs;
}