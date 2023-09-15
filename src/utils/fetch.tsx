import Bugsnag from '@bugsnag/js';
import { Clinic } from '@interface/clinic';
import { Product } from '@interface/product';
import clinicService from '@services/ClinicService';
import ProductService from '@services/ProductService';

export async function fetchProducts() {
  // Esthetic = 1, Medical = 2
  const allowedProductType = [1, 2];

  try {
    const fetchedProducts = await ProductService.getAllProducts();

    const filteredProducts = fetchedProducts.filter((product: Product) =>
      allowedProductType.includes(product.type)
    );

    const products = filteredProducts.map((product: Product) => ({
      ...product,
      visibility: true,
    }));

    return products;
  } catch (error: any) {
    Bugsnag.notify('Error fetching products:', error);
  }

  return [];
}

export async function fetchClinics() {
  try {
    const clinics: Clinic[] = await clinicService.getClinics();

    return clinics;
  } catch (error: any) {
    Bugsnag.notify('Error fetching clinics:', error);
  }

  return [];
}
