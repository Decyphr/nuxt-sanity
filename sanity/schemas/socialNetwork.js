import { IoShareSocialOutline as icon } from "react-icons/io";

export default {
  name: "socialNetwork",
  title: "Social Network",
  type: "object",
  icon,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "link",
      title: "Link",
      type: "string",
    },
  ],
};
