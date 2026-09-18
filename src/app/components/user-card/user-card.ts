import { Component, input, signal, WritableSignal } from '@angular/core';
import { User} from '../../interfaces/user.interfaces';

@Component({
  imports: [],
  selector: 'app-user-card',
  styleUrl: './user-card.css',
  templateUrl: './user-card.html',
})
export class UserCard {
  //user: WritableSignal<User> = signal({
    //id: 1,
    //name: "Juan Lopex",
    //username: "LeGra",
    //email: "legra@legra.com",
    //image: "https://img.magnific.com/foto-gratis/joven-hombre-barbudo-camisa-rayas_273609-5677.jpg?semt=ais_hybrid&w=740&q=80"
  //})

  user = input.required<User>();

}
