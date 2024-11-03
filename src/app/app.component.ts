import { Component } from '@angular/core';
import { NgFor, NgIf, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';

interface Article {
  title: string;
  date: Date;
  description: string;
  score: number;
  photo: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, FilterPipe, DatePipe],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[] = [
    {
      title: 'First Article',
      date: new Date(),
      description: 'This is the first article showcasing the new Angular icon.',
      score: 0,
      photo: 'https://cdn.britannica.com/78/43678-050-F4DC8D93/Starry-Night-canvas-Vincent-van-Gogh-New-1889.jpg'
    },
  ];
  showForm = false;
  newArticle: Article = { title: '', photo: '', date: new Date(), description: '', score: 0 };
  searchText: string = '';

  toggleForm() {
    this.showForm = !this.showForm;
  }

  addArticle() {
    this.articles.push({ ...this.newArticle, date: new Date(), score: 0 });
    this.sortArticles();
    this.toggleForm();
  }

  vote(article: Article, type: 'up' | 'down') {
    article.score += type === 'up' ? 1 : -1;
    if (article.score < 0) article.score = 0;
    this.sortArticles();
  }

  sortArticles() {
    this.articles.sort((a, b) => b.score - a.score);
  }
}