import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UsuarioController {
  private usuarios: any[] = [];

  @Post()
  public cria(@Body() usuario) {
    this.usuarios.push(usuario);

    return usuario;
  }
}
