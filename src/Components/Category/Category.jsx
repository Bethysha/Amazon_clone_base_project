import React from "react";
import { categoryInfo } from "./CategoryFullInfos";
import CategoryCard from "./CategoryCard";
import classes from "./Category.module.css";

function Category() {
  return (
    <section className={classes.category_container}>
      {categoryInfo.map((infos) => (
        <CategoryCard key={infos.imgLink} data={infos} />
      ))}
    </section>
  );
}

export default Category;
