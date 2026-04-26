import { playerModel } from '../models/player-model';
import { statisticsModel } from '../models/statistics-model';

const database: playerModel[] = [
  {
    "id": 1,
    "name": "Kylian Mbappé",
    "club": "Real Madrid",
    "position": "Forward",
    "nationality": "France",
    "statistics": {
      "overall": 92,
      "pace": 97,
      "shooting": 89,
      "passing": 80,
      "dribbling": 92,
      "defending": 38,
      "physical": 77
    },
    
  },
  {
    "id": 2,
    "name": "Harry Kane",
    "club": "Bayern Munich",
    "position": "Forward",
    "nationality": "England",
    "statistics": {
      "overall": 91,
      "pace": 74,
      "shooting": 93,
      "passing": 83,
      "dribbling": 85,
      "defending": 45,
      "physical": 84
    }
  },
  {
    "id": 3,
    "name": "Vinícius Júnior",
    "club": "Real Madrid",
    "position": "Forward",
    "nationality": "Brazil",
    "statistics": {
      "overall": 90,
      "pace": 95,
      "shooting": 84,
      "passing": 79,
      "dribbling": 91,
      "defending": 36,
      "physical": 72
    }
  },
  {
    "id": 4,
    "name": "Federico Valverde",
    "club": "Real Madrid",
    "position": "Midfielder",
    "nationality": "Uruguay",
    "statistics": {
      "overall": 88,
      "pace": 87,
      "shooting": 80,
      "passing": 84,
      "dribbling": 82,
      "defending": 78,
      "physical": 86
    }
  },
  {
    "id": 5,
    "name": "Lamine Yamal",
    "club": "Barcelona",
    "position": "Forward",
    "nationality": "Spain",
    "statistics": {
      "overall": 86,
      "pace": 90,
      "shooting": 80,
      "passing": 78,
      "dribbling": 89,
      "defending": 35,
      "physical": 70
    }
  },
  {
    "id": 6,
    "name": "Jude Bellingham",
    "club": "Real Madrid",
    "position": "Midfielder",
    "nationality": "England",
    "statistics": {
      "overall": 87,
      "pace": 89,
      "shooting": 82,
      "passing": 85,
      "dribbling": 86,
      "defending": 78,
      "physical": 84
    }
  },
  {
    "id": 7,
    "name": "Pedri",
    "club": "Barcelona",
    "position": "Midfielder",
    "nationality": "Spain",
    "statistics": {
      "overall": 86,
      "pace": 88,
      "shooting": 81,
      "passing": 84,
      "dribbling": 89,
      "defending": 75,
      "physical": 82
    }
  },
  {
    "id": 8,
    "name": "Erling Haaland",
    "club": "Manchester City",
    "position": "Forward",
    "nationality": "Norway",
    "statistics": {
      "overall": 91,
        "pace": 94,
        "shooting": 92,
        "passing": 78,
        "dribbling": 85,
        "defending": 40,
        "physical": 88
    }
  },
  {
    "id": 9,
    "name": "Mohamed Salah",
    "club": "Liverpool",
    "position": "Forward",
    "nationality": "Egypt",
    "statistics": {
      "overall": 90,
      "pace": 89,
      "shooting": 91,
      "passing": 84,
      "dribbling": 88,
      "defending": 42,
      "physical": 85
    }
  },
  {
    "id": 10,
    "name": "Kevin De Bruyne",
    "club": "Manchester City",
    "position": "Midfielder",
    "nationality": "Belgium",
    "statistics": {
      "overall": 90,
      "pace": 79,
      "shooting": 85,
      "passing": 93,
      "dribbling": 88,
      "defending": 75,
      "physical": 82
    }
  },
  {
    "id": 11,
    "name": "Kylian Mbappé",
    "club": "Real Madrid",
    "position": "Forward",
    "nationality": "France",
    "statistics": {
      "overall": 92,
      "pace": 97,
      "shooting": 89,
      "passing": 80,
      "dribbling": 92,
      "defending": 38,
      "physical": 77
    }
  },
  {
    "id": 12,
    "name": "Harry Kane",
    "club": "Bayern Munich",
    "position": "Forward",
    "nationality": "England",
    "statistics": {
      "overall": 91,
      "pace": 74,
      "shooting": 93,
      "passing": 83,
      "dribbling": 85,
      "defending": 45,
      "physical": 84
    }
  },
  {
    "id": 13,
    "name": "Vinícius Júnior",
    "club": "Real Madrid",
    "position": "Forward",
    "nationality": "Brazil",
    "statistics": {
      "overall": 90,
      "pace": 95,
      "shooting": 84,
      "passing": 79,
      "dribbling": 91,
      "defending": 36,
      "physical": 72
    }
  },
  {
    "id": 14,
    "name": "Federico Valverde",
    "club": "Real Madrid",
    "position": "Midfielder",
    "nationality": "Uruguay",
    "statistics": {
      "overall": 88,
      "pace": 87,
      "shooting": 80,
      "passing": 84,
      "dribbling": 82,
      "defending": 78,
      "physical": 86
    }
  },
  {
    "id": 15,
    "name": "Lamine Yamal",
    "club": "Barcelona",
    "position": "Forward",
    "nationality": "Spain",
    "statistics": {
      "overall": 86,
      "pace": 90,
      "shooting": 80,
      "passing": 78,
      "dribbling": 89,
      "defending": 35,
      "physical": 70
    }
  }
]


export const findAllPlayers = async (): Promise<playerModel[]> => {
  return database;
}

export const findPlayerById = async (
  id: number): Promise<playerModel | undefined> => {
  return database.find((player) => player.id === id);
}

export const insertPlayer = async (player: playerModel): Promise<void> => {
  database.push(player);
}

export const deleteOnePlayer = async (id: number): Promise<boolean> => {
  const index = database.findIndex((player) => player.id === id);
  if (index !== -1) {
    database.splice(index, 1);
    return true;
  }

  return false;
}

export const findAndModifyPlayer = async (
  id: number, 
  statistics: statisticsModel
): Promise<playerModel> => {
  const playerIndex = database.findIndex((player) => player.id === id);
  if (playerIndex !== -1) {
    database[playerIndex].statistics = statistics;
  }

  return database[playerIndex];
}