SELECT SalesLT.SalesOrderDetail.OrderQty, SalesLT.SalesOrderHeader.OrderDate
FROM SalesLT.SalesOrderDetail
JOIN SalesLT.SalesOrderHeader ON SalesLT.SalesOrderDetail.SalesOrderID = SalesLT.SalesOrderHeader.SalesOrderId;