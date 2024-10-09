const layout = {
  name: "Card",
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
    style: "p-6 text-gray-900",
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
const Card = {
  layout
};
export {
  Card as default,
  layout
};
