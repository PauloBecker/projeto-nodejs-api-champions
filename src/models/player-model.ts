interface playerModel {
  id: number;
  name: string;
  club: string;
  position: string;
  nationality: string;
  statistics: {
    overall: number;
    pace: number;
    shooting: number;
    passing: number;
    dribbling: number;
    defending: number;
    physical: number;
  };
  
}

export { playerModel };