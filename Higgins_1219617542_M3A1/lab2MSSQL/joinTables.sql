SELECT *
FROM SalesLT.SalesOrderHeader AS Header
JOIN SalesLT.SalesOrderDetail AS Detail ON Header.SalesOrderID = Detail.SalesOrderID;