select "countries"."name" as "countries",
  count("cities"."countryId") as "numberOfCities"
  from "cities"
  join "countries" using ("countryId")
  group by "countryId";
