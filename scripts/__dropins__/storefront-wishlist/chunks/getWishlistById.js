/*! Copyright 2025 Adobe
All Rights Reserved. */
import { W as WISHLIST_ITEM_FRAGMENT, s as state, g as getPersistedWishlistData, f as fetchGraphQl, h as handleFetchError, t as transformWishlist } from "./removeProductsFromWishlist.js";
const GET_WISHLIST_BY_ID_QUERY = `
  query GET_WISHLIST_BY_ID_QUERY(
    $wishlistId: ID!,
    $currentPage: Int!,
    $pageSize: Int!
  ) {
    customer {
      wishlist_v2(id: $wishlistId) {
        id
        updated_at
        sharing_code
        items_count
        items_v2(
            currentPage: $currentPage,
            pageSize: $pageSize
          ) {
          items {
            ...WISHLIST_ITEM_FRAGMENT
          }
          page_info {
            page_size
            current_page
            total_pages
          }
        }
      }
    }
  }

  ${WISHLIST_ITEM_FRAGMENT}
`;
const getWishlistById = async (wishlistId, currentPage, pageSize) => {
  if (!state.authenticated) {
    return getPersistedWishlistData();
  }
  if (!wishlistId) {
    throw Error("Wishlist ID is not set");
  }
  return fetchGraphQl(GET_WISHLIST_BY_ID_QUERY, {
    variables: {
      wishlistId,
      currentPage,
      pageSize
    }
  }).then(({
    errors,
    data
  }) => {
    var _a;
    if (errors) return handleFetchError(errors);
    if (!((_a = data == null ? void 0 : data.customer) == null ? void 0 : _a.wishlist_v2)) {
      return null;
    }
    return transformWishlist(data.customer.wishlist_v2);
  });
};
export {
  getWishlistById as g
};
//# sourceMappingURL=getWishlistById.js.map
