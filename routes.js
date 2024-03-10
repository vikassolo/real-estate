import express from "express";
import authenticateApiHandler from "./src/controllers/authentications/apiHandler.js";
import adminApiHandler from "./src/controllers/admin/manageVendors/apiHandler.js";
import catApiHandler from "./src/controllers/admin/manageCategory/apiHandler.js";
import subcategory from "./src/controllers/admin/manageSubCategory/apiHandler.js";

const router = (app) => {
  app.use(express.json());
  app.use("/api/account", authenticateApiHandler);
  app.use("/api/admin", adminApiHandler);
  app.use("/api/category", catApiHandler);
  app.use("/api/subcategory", subcategory);
};

export default router;
