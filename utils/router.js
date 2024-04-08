import express from "express";

export const applyRoutes = (routes, app) => {
  routes.forEach((route) => {
    app.use(route);
  });
};
