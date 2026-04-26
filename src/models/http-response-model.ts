export interface HttpResponse {
    find: (id: string) => any;
    statusCode: number;
    body: any;
}