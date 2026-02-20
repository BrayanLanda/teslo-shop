import { Injectable } from '@nestjs/common';
import { ConnectedClients } from './interfaces/connect-clients.interfaces';
import { Socket } from 'socket.io';

@Injectable()
export class MessageWsService {
  private connectedClients: ConnectedClients = {};

  registerClient(client: Socket) {
    this.connectedClients[client.id] = client;
  }

  removeClient(clientId: string) {
    delete this.connectedClients[clientId];
  }

  getConnectedClients(): string[] {
    return Object.keys(this.connectedClients);
  }

  sendMessageToClient(clientId: string, message: string) {
    const client = this.connectedClients[clientId];
    if (client) {
      client.emit('message', message);
    }
  }
}
