export class Credit {
  movie: any;
  actor: any;
  role: string;
  constructor(movie: any, actor: any, role: string = "") {
    this.movie = movie;
    this.actor = actor;
    this.role = role;
  }
}
