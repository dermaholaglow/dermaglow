import Bugsnag from '@bugsnag/js';
import blogService from '@services/BlogService';
import clinicService from '@services/ClinicService';
import ProductService from '@services/ProductService';
import promoService from '@services/PromoService';
import { Post } from 'app/types/blog';
import { Clinic } from 'app/types/clinic';
import { Product } from 'app/types/product';
import { Promo } from 'app/types/promo';

export async function fetchProducts() {
  // Esthetic = 1, Medical = 2
  const allowedProductType = [1, 2];

  try {
    const fetchedProducts = await ProductService.getAllProducts();
    if (fetchedProducts && fetchedProducts.length) {
      const filteredProducts = fetchedProducts.filter(
        (product: Product) =>
          allowedProductType.includes(product.type) && product.price > 0
      );

      const products = filteredProducts.map((product: Product) => ({
        ...product,
        visibility: true,
      }));

      return products;
    }
    return [];
  } catch (error: any) {
    Bugsnag.notify(
      'Error fetching products ' + error + '. Products: ' + fetchProducts.length
    );
  }

  return [] as Product[];
}

export async function fetchProduct(id: string) {
  try {
    const product: Product = await ProductService.getProduct(id);

    return product;
  } catch (error: any) {
    Bugsnag.notify('Error fetching product:', error);
  }

  return {} as Product;
}

export async function fetchClinics() {
  try {
    const clinics: Clinic[] = await clinicService.getClinics();

    return clinics;
  } catch (error: any) {
    Bugsnag.notify('Error fetching clinics:', error);
  }

  return [] as Clinic[];
}

export async function fetchPromos() {
  try {
    const promo: Promo = await promoService.getPromos();

    return promo;
  } catch (error: any) {
    Bugsnag.notify('Error fetching promos:', error);
  }

  return {} as Promo;
}

export async function fetchBlogPosts() {
  try {
    const blogPosts: Post[] = await blogService.getBlogPosts();

    return blogPosts;
  } catch (error: any) {
    Bugsnag.notify('Error fetching posts from blog:', error);
  }

  return [] as Post[];
}
