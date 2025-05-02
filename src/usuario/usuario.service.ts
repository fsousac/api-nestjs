export class UsuarioService {
  private usuarios: any[] = [];

  public cria(usuario) {
    this.usuarios.push(usuario);

    return usuario;
  }
}
