export default {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    {
      name: "siteTitle",
      title: "Site Title",
      type: "string",
    },
    {
      name: "siteDescription",
      title: "Site Title",
      type: "string",
    },
    {
      name: "socialNetworks",
      title: "Social Networks",
      type: "array",
      of: [{ type: "socialNetwork" }],
    },
  ],
};
