import { request } from "./generic.service";

const regUser = (user) =>
  request({ url: `auth/registration`, method: "post", data: user });

const loginUser = (user) =>
  request({ url: `auth/login`, method: "post", data: user });

export { regUser, loginUser };
