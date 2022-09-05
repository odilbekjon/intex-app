SELECT * FROM intex_products WHERE product_id = 1;
UPDATE intex_products SET product_name = 'Металлический каркас' WHERE product_id = 1;
DELETE FROM intex_products WHERE product_id = 1;


TRUNCATE TABLE intex_products;
DROP TABLE intex_products;