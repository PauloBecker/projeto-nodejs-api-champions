import { Request, Response } from 'express';
import * as service from '../services/players-service';
import { noContent } from '../utils/http-helper';
import { statisticsModel } from '../models/statistics-model';


export const getPlayers = async (req: Request, res: Response) => {
  const httpResponse = await service.getPlayerService();
  
  res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const getPlayerById = async (req: Request, res: Response) => {
  const idParam = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
  const id = parseInt(idParam, 10);
  
  const httpResponse = await service.getPlayerByIdService(id);  
  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const postPlayer = async (req: Request, res: Response) => {
  // Lógica para criar um novo jogador
  const bodyValue = req.body;
  const httpResponse = await service.createPlayerService(bodyValue); 

  if(httpResponse){
    res.status(httpResponse.statusCode).json(httpResponse.body);
  }else{    
    const response = await noContent();
    res.status(response.statusCode).json(response.body);
  }
  
};

export const deletePlayer = async (req: Request, res: Response) => {
  // Lógica para deletar um jogador
  const idParam = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
  const id = parseInt(idParam, 10);
  const httpResponse = await service.deletePlayerService(id); 
  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const updatePlayer = async (req: Request, res: Response) => {
  // Lógica para atualizar um jogador
  const idParam = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
  const id = parseInt(idParam, 10);
  const bodyValue: statisticsModel = req.body;
  const httpResponse = await service.updatePlayerService(id, bodyValue);
  res.status(200).json({ message: 'Jogador atualizado com sucesso!' });
}
