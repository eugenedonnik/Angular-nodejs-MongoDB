import { Component, OnInit } from '@angular/core';
import {CategoriesService} from "../shared/services/categories.service";
import {Category} from "../shared/interfaces";
import {Observable} from "rxjs";

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.scss']
})
export class CategoriesPageComponent implements OnInit {

  loading = false
//  categories: Category[] = []
  categories$: Observable<Category[]>
  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    // this.loading = true
    // this.categoriesService.fetch().subscribe(categories => {
    //   this.categories = categories
    //   this.loading = false
    //   console.log('Categories', categories)
    // })
    this.categories$ = this.categoriesService.fetch()
  }

}
