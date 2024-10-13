import { c as createRoot, j as jsxRuntimeExports, r as reactExports, f as fetchData, C as CarouselView, S as StaticView } from "./assets/Frontend-YpMMAKOX.js";
const showcaseElements = document.querySelectorAll(".tsteam-showcase");
showcaseElements.forEach((element) => {
  const id = element.getAttribute("data-id");
  createRoot(element).render(
    /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Frontend,
      {
        id
      }
    ) })
  );
});
function Frontend({ id }) {
  const [teamMembers, setTeamMembers] = reactExports.useState([]);
  const [settings, setSettings] = reactExports.useState({});
  reactExports.useEffect(() => {
    if (id) {
      fetchData(`tsteam/team_showcase/fetch/single`, (response) => {
        if (response && response.success) {
          setTeamMembers(response.data.meta_data.team_members);
          const showcaseSettings = JSON.parse(response.data.meta_data.showcase_settings);
          setSettings(showcaseSettings);
        } else {
          console.error("Error fetching post data:", response);
        }
      }, { post_id: id });
    } else {
      console.error("No post_id found");
    }
  }, [id]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: settings.view === "carousel" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
    CarouselView,
    {
      team_members: teamMembers,
      settings
    }
  ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
    StaticView,
    {
      team_members: teamMembers,
      settings
    }
  ) });
}
