(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{291:function(e,t,i){"use strict";i.r(t);var r=i(0),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[e._m(0),e._v(" "),i("p",[e._v("To calculate prices and taxes, we first need to get the proper tax rate. It's based on the "),i("router-link",{attrs:{to:"./integration.html#taxrate-entity"}},[i("code",[e._v("taxrate")])]),e._v(" entity, and stored in the Elastic. Each product can have the property "),i("code",[e._v("product.tax_class_id")]),e._v(" fixed. According to its value, Storefront API applies the "),i("code",[e._v("taxrate")]),e._v(". It also applies the country and region to the filter.")],1),e._v(" "),e._m(1),e._v(" "),i("p",[e._v("After getting the right tax rate, we can calculate the prices.")]),e._v(" "),i("p",[e._v("We've got the following price fields priority in VS:")]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),i("p",[e._v("Product Special price:")]),e._v(" "),e._m(4),e._v(" "),i("p",[e._v("Product Regular price:")]),e._v(" "),e._m(5),e._v(" "),i("p",[e._v("Product Final price:")]),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"prices-how-to"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prices-how-to"}},[this._v("#")]),this._v(" Prices how-to")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[i("strong",[e._v("Note:")]),e._v(" We currently do not support searching the tax rules by "),i("code",[e._v("customer_tax_class_id")]),e._v(" or by the "),i("code",[e._v("tax_postcode")]),e._v(" fields of the "),i("code",[e._v("taxrate")]),e._v(" entity. Pull requests are more than welcome 😉")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[i("code",[e._v("final_price")]),e._v(" - if set, depending on the "),i("code",[e._v("config.tax.finalPriceIncludesTax")]),e._v(", it's taken as the final price or Net final price.")]),e._v(" "),i("li",[i("code",[e._v("special_price")]),e._v(" - if set and lower than the "),i("code",[e._v("price")]),e._v(", it will replace the "),i("code",[e._v("price")]),e._v(" and the "),i("code",[e._v("price")]),e._v(" value will be set into the "),i("code",[e._v("original_price")]),e._v(" property.")]),e._v(" "),i("li",[i("code",[e._v("price")]),e._v(" - if set, depending on the "),i("code",[e._v("config.tax.sourcePriceIncludesTax")]),e._v(", it's taken as the final price or Net final price.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Depending on the "),t("code",[this._v("config.tax.finalPriceIncludesTax")]),this._v(" and "),t("code",[this._v("config.tax.sourcePriceIncludesTax")]),this._v(" settings, Vue Storefront calculates the prices and stores them into the following fields:")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[i("code",[e._v("special_price")]),e._v(" - optional - if set, it's always the Net price.")]),e._v(" "),i("li",[i("code",[e._v("special_price_incl_tax")]),e._v(" - optional - if set, it's always the price after taxes.")]),e._v(" "),i("li",[i("code",[e._v("special_price_tax")]),e._v(" - optional - if set, it's the tax amount.")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[i("code",[e._v("price")]),e._v(" - required - if set, it's always the Net price.")]),e._v(" "),i("li",[i("code",[e._v("price_incl_tax")]),e._v(" - required - if set, it's always the price after taxes.")]),e._v(" "),i("li",[i("code",[e._v("price_tax")]),e._v(" - required - if set, it's the tax amount.")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[i("code",[e._v("final_price")]),e._v(" - optional - if set, it's always the Net price.")]),e._v(" "),i("li",[i("code",[e._v("final_price_incl_tax")]),e._v(" - optional - if set, it's always the price after taxes.")]),e._v(" "),i("li",[i("code",[e._v("final_price_tax")]),e._v(" - optional - if set, it's the tax amount.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Product Original price (set only if "),t("code",[this._v("final_price")]),this._v(" or "),t("code",[this._v("special_price")]),this._v(" are lower than "),t("code",[this._v("price")]),this._v("):")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[i("code",[e._v("original_price")]),e._v(" - optional - if set, it's always the Net price.")]),e._v(" "),i("li",[i("code",[e._v("original_price_incl_tax")]),e._v(" - optional - if set, it's always the price after taxes.")]),e._v(" "),i("li",[i("code",[e._v("original_price_tax")]),e._v(" - optional - if set, it's the tax amount.")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[i("strong",[e._v("Note:")]),e._v(" The prices are set for all "),i("code",[e._v("configurable_children")]),e._v(" with the same format.\n"),i("strong",[e._v("Note:")]),e._v(" If any of the "),i("code",[e._v("configurable_children")]),e._v(" has a price lower than the main product price, the main product price will be updated accordingly.")])}],!1,null,null,null);t.default=a.exports}}]);