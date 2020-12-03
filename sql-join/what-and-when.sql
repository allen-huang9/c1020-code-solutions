select "releaseYear", "categories"."name" as "categories"
  from "categories"
  join "filmCategory" using ("categoryId")
  join "films" using ("filmId")
  where "title" = 'Boogie Amelie';
