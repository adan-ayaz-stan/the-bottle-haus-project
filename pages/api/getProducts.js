import dbclient from "../../prisma/client";

export default async function handler(req, res) {
  const requestBody = req.body;
  console.log(requestBody);

  const priceFilter = requestBody.filterByPrice;
  const brandFilter = requestBody.filterByBrand;
  const sortByFilter = requestBody.filterBySortBy;
  const categoryFilter = requestBody.filterByCategory;

  const products =
    categoryFilter == ""
      ? await dbclient.products.findMany({
          where: {
            // PRICE FILTER
            price: {
              is: {
                new: {
                  gte: priceFilter.min,
                  lte: priceFilter.max,
                },
              },
            },

            // BRAND FILTER
            brand: {
              in: brandFilter,
            },
          },
          // SORT BY FILTER
          orderBy: {
            price: {
              new: sortByFilter,
            },
          },
        })
      : await dbclient.products.findMany({
          where: {
            // PRICE FILTER
            price: {
              is: {
                new: {
                  gte: priceFilter.min,
                  lte: priceFilter.max,
                },
              },
            },

            // BRAND FILTER
            brand: {
              in: brandFilter,
            },

            // CATEGORY FILTER
            category: {
              contains: categoryFilter,
            },
          },
          // SORT BY FILTER
          orderBy: {
            price: {
              new: sortByFilter,
            },
          },
        });

  res.status(200).json(products);
}
