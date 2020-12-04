select "firstName", "lastName", sum("amount")
  from "customers"
  join "payments" using ("customerId")
  group by "customerId"
  order by sum("amount") desc;
