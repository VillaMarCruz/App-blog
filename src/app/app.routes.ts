import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'authenticate',
    children: [
      {
        path: 'login',
        loadComponent: () => import('./pages/admin/auth/login/login.component'),
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/public/home/home.component'),
  },
  {
    path: 'blog',
    loadComponent: () => import('./pages/public/blog/blog.component'),
  },
  {
    path: 'admin',
    loadComponent: () => import('./pages/admin/dashboard/dashboard.component'),
    children: [
      {
        path: 'categorias',
        children: [
          {
            path: '',
            loadComponent: () =>
              import(
                './pages/admin/dashboard/admin-category/category-list/category-list.component'
              ),
          },
          {
            path: 'agregar',
            loadComponent: () =>
              import(
                './pages/admin/dashboard/admin-category/category-form/category-form.component'
              ),
          },
          {
            path: 'modificar/:id',
            loadComponent: () =>
              import(
                './pages/admin/dashboard/admin-category/category-form/category-form.component'
              ),
          },
        ],
      },
      {
        path: 'tags',
        children: [
          {
            path: '',
            loadComponent: () =>
              import(
                './pages/admin/dashboard/admin-tags/tag-list/tag-list.component'
              ),
          },
          {
            path: 'agregar',
            loadComponent: () =>
              import(
                './pages/admin/dashboard/admin-tags/tag-form/tag-form.component'
              ),
          },
          {
            path: 'modificar/:id',
            loadComponent: () =>
              import(
                './pages/admin/dashboard/admin-tags/tag-form/tag-form.component'
              ),
          },
        ],
      },
      {
        path: 'publicaciones',
        children: [
          {
            path: '',
            loadComponent: () =>
              import(
                './pages/admin/dashboard/admin-post/posts/posts.component'
              ),
          },
          {
            path: 'agregar',
            loadComponent: () =>
              import(
                './pages/admin/dashboard/admin-post/posts-form/posts-form.component'
              ),
          },
          {
            path: 'modificar/:id',
            loadComponent: () =>
              import(
                './pages/admin/dashboard/admin-post/posts-form/posts-form.component'
              ),
          },
        ],
      },

      {
        path: '**',
        redirectTo: 'categorias',
        pathMatch: 'full',
      },
      {
        path: '',
        redirectTo: 'categorias',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
