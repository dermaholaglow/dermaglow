import { Product } from '@interface/product';
import { has, isEmpty } from 'lodash';
import { ProductFilters } from 'types/filters';

const filterByCategory = ({
  products,
  filters,
}: {
  products: Product[];
  filters: ProductFilters;
}) => {
  let updatedProducts = products;

  console.log(
    updatedProducts.filter(product => product.visibility === true).length
  );

  if (has(filters, 'category') && !isEmpty(filters.category)) {
    updatedProducts = products.map(product => {
      return {
        ...product,
        visibility: product.category.some(category =>
          filters.category.includes(category.name)
        ),
      };
    });
  }

  console.log(
    updatedProducts.filter(product => product.visibility === true).length
  );

  return updatedProducts;
};

export const applyFilters = ({
  products,
  filters,
  setProducts,
}: {
  products: Product[];
  filters: ProductFilters;
  setProducts: (products: Product[]) => void;
}) => {
  let updatedProducts = products;

  console.log(filterByCategory({ products, filters }));

  updatedProducts = filterByCategory({ products, filters });

  //return updatedProducts;

  setProducts(updatedProducts);
};

export const updateFilterCount = (filters: ProductFilters) => {
  let filterCount = 0;

  for (const key in filters) {
    if (Array.isArray(filters[key])) {
      filterCount += filters[key].length;
    }
  }

  return filterCount;
};

export const toggleCategory = ({
  category,
  filters,
  setFilters,
}: {
  category: string;
  filters: ProductFilters;
  setFilters: (filters: ProductFilters) => void;
}) => {
  const updatedFilters: ProductFilters = { ...filters } || {};

  if (!updatedFilters.category) {
    updatedFilters.category = [];
  }

  const categoryIndex = updatedFilters.category.indexOf(category);

  if (categoryIndex === -1) {
    updatedFilters.category.push(category);
  } else {
    updatedFilters.category.splice(categoryIndex, 1);
  }

  console.log(updatedFilters);

  setFilters(updatedFilters);
};
