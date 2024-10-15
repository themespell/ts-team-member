import { j as jsxRuntimeExports } from "./Frontend-otZikUsK.js";
const layout = {
  name: "Card",
  editor: {
    controls: {}
  },
  container: {
    style: "max-w-sm bg-white rounded-lg shadow-lg overflow-hidden"
  },
  image: {
    style: "w-full h-auto rounded-b-lg"
  },
  animation: {
    style: ""
  },
  content: {
    style: "p-6",
    header: {
      title: {
        markup: "h3",
        style: "text-xl font-bold"
      },
      subtitle: {
        visible: true,
        markup: "h4",
        style: "text-sm font-medium"
      }
    },
    body: {
      visible: true,
      markup: "div",
      style: "mt-4"
    },
    footer: {
      markup: "div",
      social: {
        visible: true,
        markup: "div",
        container: {
          style: ""
        },
        icon: {
          style: ""
        }
      }
    }
  }
};
const config = {
  layout
};
function Card({ settings, imageUrl, title, subtitle, description, socialIcons }) {
  var _a, _b;
  const { container, image, content, animation } = config.layout;
  const { header, body, footer } = content;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: container.style, children: [
    imageUrl && /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: imageUrl, alt: title, className: image.style }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: content.style,
        style: {
          backgroundColor: (_a = settings == null ? void 0 : settings.tscard) == null ? void 0 : _a.backgroundColor
        },
        children: [
          header && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            header.title && /* @__PURE__ */ jsxRuntimeExports.jsx(
              header.title.markup,
              {
                className: header.title.style,
                style: {
                  color: (_b = settings == null ? void 0 : settings.tscard) == null ? void 0 : _b.textColor
                },
                children: title
              }
            ),
            header.subtitle.visible && subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx(header.subtitle.markup, { className: header.subtitle.style, children: subtitle })
          ] }),
          body.visible && description && /* @__PURE__ */ jsxRuntimeExports.jsx(body.markup, { className: body.style, children: description }),
          footer && footer.social.visible && /* @__PURE__ */ jsxRuntimeExports.jsx(footer.markup, { className: footer.social.container.style, children: /* @__PURE__ */ jsxRuntimeExports.jsx(footer.social.markup, { className: footer.social.icon.style, children: socialIcons && socialIcons.map((icon, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: icon }, index)) }) })
        ]
      }
    )
  ] });
}
export {
  Card as default
};
