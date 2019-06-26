import axios from "axios";

export const avatar_image =
  "https://www.chcf.org/wp-content/themes/chcf_theme/images/default-profile-pic.jpg";

export const post = (url, data = False) => axios.post(url, { ...data });

export const get = url => axios.get(url);

export const destroy = url => axios.delete(url);
