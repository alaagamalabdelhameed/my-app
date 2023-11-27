import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular app';
  names = ["Alaa", "Fatma", "Esraa"];
  person1 = {name:"Alaa", age: 28, adress: "15 may"}
  catInfo = { name: "Kitty", image: "./assets/images/cat1.avif" };
  image = "https://img.freepik.com/free-vector/cute-cat-sitting-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-4148.jpg";
   books = [
    { title: "book1", description: "book desc 1" },
    { title: "book2", description: "book desc 2" },
    { title: "book3", description: "book desc 3" },
    { title: "book4", description: "book desc 4 " }
  ];

  students = [
    {name: "Judy", age: 12, grade: 8},
    {name: "Ahmed", age: 7, grade: 2},
    {name: "Mahmoud", age: 12, grade: 8},
    {name: "Abdelrahman", age: 12, grade: 8}
  ];

  name: string = "Steve";
    greet(): void {
        alert("Hello " + this.name);
    };
}
