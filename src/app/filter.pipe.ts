import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {
  transform(articles: any[], searchText: string): any[] {
    if (!articles) return [];
    if (!searchText) return articles;
    searchText = searchText.toLowerCase();
    return articles.filter(article => article.title.toLowerCase().includes(searchText));
  }
}
