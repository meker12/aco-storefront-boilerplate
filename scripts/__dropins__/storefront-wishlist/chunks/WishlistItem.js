/*! Copyright 2025 Adobe
All Rights Reserved. */
import { u, t } from "./jsxRuntime.module.js";
import * as React from "@dropins/tools/preact-compat.js";
import { useState } from "@dropins/tools/preact-compat.js";
import { classes } from "@dropins/tools/lib.js";
import { Button, Icon, Price, Image } from "@dropins/tools/components.js";
import { Fragment } from "@dropins/tools/preact.js";
import { useText } from "@dropins/tools/i18n.js";
import { events } from "@dropins/tools/event-bus.js";
import { r as removeProductsFromWishlist } from "./removeProductsFromWishlist.js";
const SvgCart = (props) => /* @__PURE__ */ React.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React.createElement("g", { clipPath: "url(#clip0_102_196)" }, /* @__PURE__ */ React.createElement("path", { vectorEffect: "non-scaling-stroke", d: "M18.3601 18.16H6.5601L4.8801 3H2.3501M19.6701 19.59C19.6701 20.3687 19.0388 21 18.2601 21C17.4814 21 16.8501 20.3687 16.8501 19.59C16.8501 18.8113 17.4814 18.18 18.2601 18.18C19.0388 18.18 19.6701 18.8113 19.6701 19.59ZM7.42986 19.59C7.42986 20.3687 6.79858 21 6.01986 21C5.24114 21 4.60986 20.3687 4.60986 19.59C4.60986 18.8113 5.24114 18.18 6.01986 18.18C6.79858 18.18 7.42986 18.8113 7.42986 19.59Z", stroke: "currentColor", strokeLinejoin: "round" }), /* @__PURE__ */ React.createElement("path", { vectorEffect: "non-scaling-stroke", d: "M5.25 6.37L20.89 8.06L20.14 14.8H6.19", stroke: "currentColor", strokeLinejoin: "round" })), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "clip0_102_196" }, /* @__PURE__ */ React.createElement("rect", { vectorEffect: "non-scaling-stroke", width: 19.29, height: 19.5, fill: "white", transform: "translate(2.3501 2.25)" }))));
const SvgTrash = (props) => /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", ...props }, /* @__PURE__ */ React.createElement("path", { d: "M1 5H23", stroke: "currentColor", strokeWidth: 1.5, strokeMiterlimit: 10 }), /* @__PURE__ */ React.createElement("path", { d: "M17.3674 22H6.63446C5.67952 22 4.88992 21.2688 4.8379 20.3338L4 5H20L19.1621 20.3338C19.1119 21.2688 18.3223 22 17.3655 22H17.3674Z", stroke: "currentColor", strokeWidth: 1.5, strokeMiterlimit: 10 }), /* @__PURE__ */ React.createElement("path", { d: "M9.87189 2H14.1281C14.6085 2 15 2.39766 15 2.88889V5H9V2.88889C9 2.39912 9.39006 2 9.87189 2Z", stroke: "currentColor", strokeWidth: 1.5, strokeMiterlimit: 10 }), /* @__PURE__ */ React.createElement("path", { d: "M8.87402 8.58057L9.39348 17.682", stroke: "currentColor", strokeWidth: 1.5, strokeMiterlimit: 10 }), /* @__PURE__ */ React.createElement("path", { d: "M14.6673 8.58057L14.146 17.682", stroke: "currentColor", strokeWidth: 1.5, strokeMiterlimit: 10 }));
var _jsxFileName$2 = "/Users/rafaljanicki/www/storefront-wishlist/src/components/ProductItem/ProductItem.tsx";
const ProductItem = ({
  className,
  children,
  item,
  onCartActionButtonClick,
  onTrashButtonClick,
  ...props
}) => {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const labels = useText({
    cartActionBtn: "ProductItem.CartActionButton",
    trashActionBtn: "ProductItem.TrashActionButton"
  });
  const discounted = ((_b = (_a = item == null ? void 0 : item.prices) == null ? void 0 : _a.discount) == null ? void 0 : _b.amountOff) != 0 || ((_d = (_c = item == null ? void 0 : item.prices) == null ? void 0 : _c.discount) == null ? void 0 : _d.percentOff) != 0;
  return u("div", {
    ...props,
    className: classes(["wishlist-product-item", className]),
    children: u("div", {
      ...props,
      className: classes(["wishlist-product-item__content", className]),
      children: [u("div", {
        className: classes(["wishlist-product-item-image"]),
        style: {
          backgroundColor: "var(--color-neutral-200)"
        },
        "data-testid": "wishlist-product-item-image",
        children: u(ImageCarousel, {
          images: (item == null ? void 0 : item.image) ? [item.image] : []
        }, void 0, false, {
          fileName: _jsxFileName$2,
          lineNumber: 63,
          columnNumber: 11
        }, void 0)
      }, void 0, false, {
        fileName: _jsxFileName$2,
        lineNumber: 58,
        columnNumber: 9
      }, void 0), u("div", {
        className: classes(["wishlist-product-item__title"]),
        "data-testid": "wishlist-product-item-header",
        children: [
          u("span", {
            className: "wishlist-product-item-name",
            "data-testid": "wishlist-product-item-name",
            children: item == null ? void 0 : item.name
          }, void 0, false, {
            fileName: _jsxFileName$2,
            lineNumber: 70,
            columnNumber: 11
          }, void 0),
          u(Button, {
            "data-testid": "wishlist-product-item-remove-button",
            className: classes(["wishlist-product-item-button__remove"]),
            variant: "tertiary",
            onClick: () => onTrashButtonClick == null ? void 0 : onTrashButtonClick(),
            icon: u(Icon, {
              source: SvgTrash,
              size: "24",
              stroke: "2",
              viewBox: "0 0 24 24",
              "aria-label": labels.trashActionBtn
            }, void 0, false, {
              fileName: _jsxFileName$2,
              lineNumber: 84,
              columnNumber: 15
            }, void 0)
          }, void 0, false, {
            fileName: _jsxFileName$2,
            lineNumber: 78,
            columnNumber: 11
          }, void 0),
          u(Price, {
            className: classes(["wishlist-product-item-price", discounted ? "strikeout" : ""]),
            "data-testid": "wishlist-product-item-price",
            amount: (_e = item == null ? void 0 : item.prices) == null ? void 0 : _e.regularPrice.value,
            currency: (_f = item == null ? void 0 : item.prices) == null ? void 0 : _f.regularPrice.currency
          }, void 0, false, {
            fileName: _jsxFileName$2,
            lineNumber: 94,
            columnNumber: 11
          }, void 0),
          /* Discounted price */
          discounted && u(Price, {
            className: classes(["wishlist-product-item-discounted-price"]),
            "data-testid": "wishlist-product-item-discounted-price",
            amount: (_g = item == null ? void 0 : item.prices) == null ? void 0 : _g.finalPrice.value,
            currency: (_h = item == null ? void 0 : item.prices) == null ? void 0 : _h.finalPrice.currency
          }, void 0, false, {
            fileName: _jsxFileName$2,
            lineNumber: 106,
            columnNumber: 15
          }, void 0)
        ]
      }, void 0, true, {
        fileName: _jsxFileName$2,
        lineNumber: 66,
        columnNumber: 9
      }, void 0), u(Button, {
        "data-testid": "wishlist-product-item-move-to-cart-button",
        size: "medium",
        type: "submit",
        icon: u(Icon, {
          source: SvgCart
        }, void 0, false, {
          fileName: _jsxFileName$2,
          lineNumber: 121,
          columnNumber: 17
        }, void 0),
        disabled: (item == null ? void 0 : item.stockStatus) !== "IN_STOCK",
        "aria-label": labels.moveItemToCart,
        onClick: () => onCartActionButtonClick == null ? void 0 : onCartActionButtonClick(),
        children: labels.cartActionBtn
      }, void 0, false, {
        fileName: _jsxFileName$2,
        lineNumber: 117,
        columnNumber: 9
      }, void 0)]
    }, void 0, true, {
      fileName: _jsxFileName$2,
      lineNumber: 54,
      columnNumber: 7
    }, void 0)
  }, void 0, false, {
    fileName: _jsxFileName$2,
    lineNumber: 53,
    columnNumber: 5
  }, void 0);
};
var _jsxFileName$1 = "/Users/rafaljanicki/www/storefront-wishlist/src/components/ImageCarousel/ImageCarousel.tsx";
const ImageCarousel = ({
  className,
  children,
  images,
  ...props
}) => {
  const [carouselIndex, setCarouselIndex] = t(useState(0), "carouselIndex");
  return u(Fragment, {
    children: [u("div", {
      ...props,
      className: classes(["image-carousel", className]),
      children: u("div", {
        className: classes(["overflow-hidden relative max-w-[200px]", className]),
        children: images == null ? void 0 : images.map((image, index) => {
          return index === carouselIndex && u(Image, {
            className: "image-carousel-image",
            alt: image.alt,
            src: image.src
          }, void 0, false, {
            fileName: _jsxFileName$1,
            lineNumber: 56,
            columnNumber: 19
          }, void 0);
        })
      }, void 0, false, {
        fileName: _jsxFileName$1,
        lineNumber: 46,
        columnNumber: 9
      }, void 0)
    }, void 0, false, {
      fileName: _jsxFileName$1,
      lineNumber: 45,
      columnNumber: 7
    }, void 0), (images == null ? void 0 : images.length) > 1 && u("div", {
      className: classes(["absolute", "image-switcher-area"]),
      children: images == null ? void 0 : images.map((_image, index) => {
        return u("span", {
          className: classes(["image-switcher", carouselIndex === index ? "image-switcher-active" : "image-switcher-inactive"]),
          onClick: (event) => {
            setCarouselIndex(index);
            event.stopPropagation();
          }
        }, index, false, {
          fileName: _jsxFileName$1,
          lineNumber: 72,
          columnNumber: 17
        }, void 0);
      })
    }, void 0, false, {
      fileName: _jsxFileName$1,
      lineNumber: 68,
      columnNumber: 9
    }, void 0)]
  }, void 0);
};
var _jsxFileName = "/Users/rafaljanicki/www/storefront-wishlist/src/containers/WishlistItem/WishlistItem.tsx";
const WishlistItem = ({
  initialData = null,
  moveProdToCart
}) => {
  const [item] = t(useState(initialData), "item");
  const removeProductFromWishlist = (showAlert = true) => {
    return removeProductsFromWishlist([item]).then(() => {
      var _a;
      console.log(`Product ${(_a = item == null ? void 0 : item.product) == null ? void 0 : _a.sku} removed from wishlist!`);
      if (showAlert) events.emit("wishlist/update", {
        action: "remove",
        item
      });
      return true;
    }).catch((error) => {
      var _a;
      console.error(`Product ${(_a = item == null ? void 0 : item.product) == null ? void 0 : _a.sku} could not be removed from wishlist`, error);
      return false;
    });
  };
  const moveProductToCart = async () => {
    var _a;
    return await moveProdToCart([{
      sku: (_a = item == null ? void 0 : item.product) == null ? void 0 : _a.sku,
      quantity: 1
    }]).then(() => {
      var _a2;
      console.log(`Product ${(_a2 = item == null ? void 0 : item.product) == null ? void 0 : _a2.sku} successfully moved to cart 🛒!`);
      events.emit("wishlist/update", {
        action: "move",
        item
      });
      return removeProductFromWishlist(false);
    }).catch((error) => {
      console.error("Cart creation/update failed: ", error);
      return false;
    });
  };
  if (!(item == null ? void 0 : item.product)) return null;
  return u("div", {
    "data-testid": "wishlist-items",
    children: u(ProductItem, {
      item: item.product,
      onCartActionButtonClick: () => moveProductToCart(),
      onTrashButtonClick: () => removeProductFromWishlist()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }, void 0)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 89,
    columnNumber: 5
  }, void 0);
};
export {
  SvgTrash as S,
  WishlistItem as W,
  SvgCart as a
};
//# sourceMappingURL=WishlistItem.js.map
