import { Component, Renderer2, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component'; 
import { CreateUserComponent } from './create-user/create-user.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HomeComponent, SidebarComponent,HeaderComponent, CreateUserComponent, ReactiveFormsModule]
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  constructor(private renderer: Renderer2) {}

  toggleTheme() {
    const theme = document.body.classList.toggle('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
  }

  ngOnInit() {
    const theme = localStorage.getItem('theme') || 'light';
    if (theme === 'dark') {
      this.renderer.addClass(document.body, 'dark-mode');
    }
    document.getElementById('themeToggleBtn')?.addEventListener('click', () => this.toggleTheme());
  }
}