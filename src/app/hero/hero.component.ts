import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  menuItems: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:3000/api/food').subscribe(
      (data) => {
        this.menuItems = data;
      },
      (error) => {
        console.error('Error fetching menu items:', error);
      }
    );
  }

  getStockStatus(stock: number): string {
    if (stock === 0) {
      return 'agotado';
    } else if (stock < 10) {
      return 'por agotarse';
    } else {
      return 'disponible';
    }
  }
}
