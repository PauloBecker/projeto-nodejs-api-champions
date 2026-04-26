import { HttpResponse } from '../models/http-response-model';

export const ok = async (data: any): Promise<HttpResponse> => {
  return {
    statusCode: 200,
    body: data,
    find: id => data.find((p: { id: string }) => p.id === id),
  };
}

export const noContent = async (): Promise<HttpResponse> => {
  return {
    statusCode: 204,    
    body: null,
    find: id => null,
  };
}   

export const badRequest = async (): Promise<HttpResponse> => {
  return {
    statusCode: 400,
    body: null,
    find: id => null,
  };

};

export const created = async (): Promise<HttpResponse> => {
  return {
    statusCode: 201,
    body: { message: 'Jogador criado com sucesso!' },
    find: id => null,
  };
}
