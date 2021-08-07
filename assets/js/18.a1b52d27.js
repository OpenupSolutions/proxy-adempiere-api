(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{240:function(a,e,s){"use strict";s.r(e);var t=s(0),r=Object(t.a)({},(function(){var a=this.$createElement;this._self._c;return this._m(0)}),[function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",{staticClass:"content"},[s("h2",{attrs:{id:"modulo-inscripcion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#modulo-inscripcion"}},[a._v("#")]),a._v(" Módulo Inscripción")]),a._v(" "),s("h3",{attrs:{id:"post-adempiere-api-enrollment-enroll"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#post-adempiere-api-enrollment-enroll"}},[a._v("#")]),a._v(" POST /adempiere-api/enrollment/enroll")]),a._v(" "),s("p",[a._v("Inscribir un usuario")]),a._v(" "),s("h4",{attrs:{id:"parametros-post"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parametros-post"}},[a._v("#")]),a._v(" Paràmetros POST:")]),a._v(" "),s("p",[s("code",[a._v("user_name")]),a._v(" - codigo del usuario.\n"),s("code",[a._v("name")]),a._v(" - nombre del usuario.\n"),s("code",[a._v("email")]),a._v(" - correo del usuario.\n"),s("code",[a._v("client_version")]),a._v(" - version de aplicaciòn del cliente.\n"),s("code",[a._v("application_type")]),a._v(" - tipo de aplicacion.\n"),s("code",[a._v("password")]),a._v(" - contraseña del usuario.")]),a._v(" "),s("h4",{attrs:{id:"cuerpo-de-la-peticion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cuerpo-de-la-peticion"}},[a._v("#")]),a._v(" Cuerpo de la Peticiòn:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("null\n")])])]),s("h4",{attrs:{id:"ejemplo-de-llamada"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ejemplo-de-llamada"}},[a._v("#")]),a._v(" Ejemplo de Llamada:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'https://api.erpya.com/adempiere-api/enrollment/enroll'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    -X POST "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    -H "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'content-type: application/json'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    -H "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'accept: */*;charset=UTF-8'")]),a._v("\n    --data-binary "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'{"user_name": "Prueba1","name": "Prueba","email": "prueba@test.com"}\'')]),a._v("\n")])])]),s("h4",{attrs:{id:"cuerpo-de-respuesta"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cuerpo-de-respuesta"}},[a._v("#")]),a._v(" Cuerpo de Respuesta:")]),a._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"code"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"result"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"user_name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Prueba1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Prueba"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"email"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"prueba@test.com"')]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h4",{attrs:{id:"codigo-de-respuesta"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#codigo-de-respuesta"}},[a._v("#")]),a._v(" Código de Respuesta:")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("200")]),a._v(" cuando es exitoso")]),a._v(" "),s("li",[s("code",[a._v("500")]),a._v(" en caso de error")])]),a._v(" "),s("h3",{attrs:{id:"post-adempiere-api-enrollment-reset-password"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#post-adempiere-api-enrollment-reset-password"}},[a._v("#")]),a._v(" POST /adempiere-api/enrollment/reset-password")]),a._v(" "),s("p",[a._v("Solicitar el restablecimiento de la contraseña")]),a._v(" "),s("h4",{attrs:{id:"parametros-post-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parametros-post-2"}},[a._v("#")]),a._v(" Paràmetros POST:")]),a._v(" "),s("p",[s("code",[a._v("user_name")]),a._v(" - nombre de usuario del usuario.\n"),s("code",[a._v("email")]),a._v(" - correo del usuario.\n"),s("code",[a._v("client_version")]),a._v(" - version de aplicaciòn del cliente.")]),a._v(" "),s("h4",{attrs:{id:"cuerpo-de-la-peticion-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cuerpo-de-la-peticion-2"}},[a._v("#")]),a._v(" Cuerpo de la Peticiòn:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("null\n")])])]),s("h4",{attrs:{id:"ejemplo-de-llamada-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ejemplo-de-llamada-2"}},[a._v("#")]),a._v(" Ejemplo de Llamada:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'https://api.erpya.com/adempiere-api/enrollment/reset-password'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    -X POST "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    -H "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'content-type: application/json'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    -H "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'accept: */*;charset=UTF-8'")]),a._v("\n    --data-binary "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'{"user_name": "Prueba1","email": "prueba@test.com"}\'')]),a._v("\n")])])]),s("h4",{attrs:{id:"cuerpo-de-respuesta-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cuerpo-de-respuesta-2"}},[a._v("#")]),a._v(" Cuerpo de Respuesta:")]),a._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"code"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"result"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"OK"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h4",{attrs:{id:"codigo-de-respuesta-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#codigo-de-respuesta-2"}},[a._v("#")]),a._v(" Código de Respuesta:")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("200")]),a._v(" cuando es exitoso")]),a._v(" "),s("li",[s("code",[a._v("500")]),a._v(" en caso de error")])]),a._v(" "),s("h3",{attrs:{id:"post-adempiere-api-enrollment-change-password"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#post-adempiere-api-enrollment-change-password"}},[a._v("#")]),a._v(" POST /adempiere-api/enrollment/change-password")]),a._v(" "),s("p",[a._v("Cambiar la contraseña del token")]),a._v(" "),s("h4",{attrs:{id:"parametros-post-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parametros-post-3"}},[a._v("#")]),a._v(" Paràmetros POST:")]),a._v(" "),s("p",[s("code",[a._v("user_name")]),a._v(" - codigo del usuario.\n"),s("code",[a._v("password")]),a._v(" - contasea del usuario.\n"),s("code",[a._v("token")]),a._v(" - token del usuario.\n"),s("code",[a._v("client_version")]),a._v(" - version de aplicaciòn del cliente.")]),a._v(" "),s("h4",{attrs:{id:"cuerpo-de-la-peticion-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cuerpo-de-la-peticion-3"}},[a._v("#")]),a._v(" Cuerpo de la Peticiòn:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("null\n")])])]),s("h4",{attrs:{id:"ejemplo-de-llamada-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ejemplo-de-llamada-3"}},[a._v("#")]),a._v(" Ejemplo de Llamada:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'https://api.erpya.com/adempiere-api/enrollment/change-password'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    -X POST "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    -H "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'content-type: application/json'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    -H "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'accept: */*;charset=UTF-8'")]),a._v("\n    --data-binary "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'{"token":"akhjgdsfsdq476328463249234032anbfkd", "password":"TopSecretPassword"}\'')]),a._v("\n")])])]),s("h4",{attrs:{id:"cuerpo-de-respuesta-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cuerpo-de-respuesta-3"}},[a._v("#")]),a._v(" Cuerpo de Respuesta:")]),a._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"code"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"result"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"OK"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h4",{attrs:{id:"codigo-de-respuesta-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#codigo-de-respuesta-3"}},[a._v("#")]),a._v(" Código de Respuesta:")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("200")]),a._v(" cuando es exitoso")]),a._v(" "),s("li",[s("code",[a._v("500")]),a._v(" en caso de error")])]),a._v(" "),s("h3",{attrs:{id:"post-adempiere-api-enrollment-activate-user"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#post-adempiere-api-enrollment-activate-user"}},[a._v("#")]),a._v(" POST /adempiere-api/enrollment/activate-user")]),a._v(" "),s("p",[a._v("Activar usuario")]),a._v(" "),s("h4",{attrs:{id:"parametros-post-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parametros-post-4"}},[a._v("#")]),a._v(" Paràmetros POST:")]),a._v(" "),s("p",[s("code",[a._v("token")]),a._v(" - token del usuario.\n"),s("code",[a._v("client_version")]),a._v(" - version de aplicaciòn del cliente.")]),a._v(" "),s("h4",{attrs:{id:"cuerpo-de-la-peticion-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cuerpo-de-la-peticion-4"}},[a._v("#")]),a._v(" Cuerpo de la Peticiòn:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("null\n")])])]),s("h4",{attrs:{id:"ejemplo-de-llamada-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ejemplo-de-llamada-4"}},[a._v("#")]),a._v(" Ejemplo de Llamada:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'https://api.erpya.com/adempiere-api/enrollment/activate-user'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    -X POST "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    -H "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'content-type: application/json'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    -H "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'accept: */*;charset=UTF-8'")]),a._v("\n    --data-binary "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'{"token":"akhjgdsfsdq476328463249234032anbfkd""}\'')]),a._v("\n")])])]),s("h4",{attrs:{id:"cuerpo-de-respuesta-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cuerpo-de-respuesta-4"}},[a._v("#")]),a._v(" Cuerpo de Respuesta:")]),a._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"code"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"result"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"OK"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h4",{attrs:{id:"codigo-de-respuesta-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#codigo-de-respuesta-4"}},[a._v("#")]),a._v(" Código de Respuesta:")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("200")]),a._v(" cuando es exitoso")]),a._v(" "),s("li",[s("code",[a._v("500")]),a._v(" en caso de error")])])])}],!1,null,null,null);e.default=r.exports}}]);