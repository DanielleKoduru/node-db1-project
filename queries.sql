-- Database Queries

-- #1 Find all customers with postal code 1010
SELECT * FROM Customers
WHERE PostalCode = "1010";  

--Number of Recods: 3
12	Cactus Comidas para llevar	Patricio Simpson	Cerrito 333	Buenos Aires	1010	Argentina
54	Océano Atlántico Ltda.	Yvonne Moncada	Ing. Gustavo Moncada 8585 Piso 20-A	Buenos Aires	1010	Argentina
64	Rancho grande	Sergio Gutiérrez	Av. del Libertador 900	Buenos Aires	1010	Argentina

-- #2 Find the phone number for the supplier with the id 11
SELECT Phone FROM Suppliers
WHERE SupplierId = "11";

--Number of records: 1
(010) 9984510

-- #3 List first 10 orders placed, sorted descending by the order date
SELECT * FROM Orders order by OrderDate desc limit 10;

--Number of Records: 9
10443	66	8	1997-02-12	1
10442	20	3	1997-02-11	2
10440	71	4	1997-02-10	2
10441	55	3	1997-02-10	2
10439	51	6	1997-02-07	3
10438	79	3	1997-02-06	2
10436	7	3	1997-02-05	2
10437	87	8	1997-02-05	1
10435	16	8	1997-02-04	2
10433	60	3	1997-02-03	3

-- #4 Find all customers that live in London, Madrid, or Brazil
SELECT * FROM Customers 
where City in ('London', 'Madrid') or Country = 'Brazil';

--Number of Records: 18

-- #5 Add a customer record for "The Shire", the contact name is "Bilbo Baggins" the address is -"1 Hobbit-Hole" in "Bag End", postal code "111" and the country is "Middle Earth"
insert into Customers (CustomerName, ContactName, Address, City, PostalCode, Country) 
values ('The Shire', 'Bilbo Baggins', '1 Hobbit-Hole', 'Bag End', '111', 'Middle Earth');

--Rows Affected: 1

-- #6 Update Bilbo Baggins record so that the postal code changes to "11122"
UPDATE Customers SET PostalCode = '11122'
WHERE CustomerId = 92;

--Rows Affected: 1
92	The Shire	Bilbo Baggins	1 Hobbit-Hole	Bag End	11122	Middle Earth

-- (Stretch) Find a query to discover how many different cities are stored in the Customers table. Repeats should not be double counted

-- (Stretch) Find all suppliers who have names longer than 20 characters. You can use `length(SupplierName)` to get the length of the name
