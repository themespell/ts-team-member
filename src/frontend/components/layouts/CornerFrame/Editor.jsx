const register_controls = () => {
  return {
    controls: [
      {
        type: "divider",
        label: "CornerFrame Styles",
      },
      {
        type: "color",
        label: "Accent Color",
        name: "tscornerframe.color.accent",
      },
      {
        type: "color",
        label: "Overlay Color",
        name: "tscornerframe.color.overlay",
      },
      {
        type: "slider",
        label: "corner Frame Item Height",
        name: "tscornerframe.item.height",
        range: {
          min: 400,
          max: 600,
        },
        unit: "px",
      },
    ],
  };
};

export { register_controls };
