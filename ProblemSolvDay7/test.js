CREATE TYPE user_role_type AS ENUM ('Admin', 'Customer');
CREATE TYPE vehicle_type_e AS ENUM ('car','bike','truck');
CREATE TYPE availability_status_e AS ENUM('available','rented','maintenance');

CREATE TYPE booking_status_e AS ENUM('pending','confirmed','completed','cancelled');

CREATE table Users(
  user_id SERIAL PRIMARY KEY,
  user_role user_role_type NOT NULL,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR (40) NOT NULL,
  phone_number VARCHAR(20)
)


INSERT INTO Users (user_role, name, email, password, phone_number) VALUES
('Admin', 'Super Admin', 'admin1@example.com', 'admin123', '01710000001'),
('Admin', 'System Admin', 'admin2@example.com', 'admin123', '01710000002'),
('Admin', 'Support Admin', 'admin3@example.com', 'admin123', '01710000003'),

('Customer', 'Rahim Uddin', 'rahim@example.com', 'pass123', '01711000004'),
('Customer', 'Karim Hossain', 'karim@example.com', 'pass123', '01711000005'),
('Customer', 'Sabbir Khan', 'sabbir@example.com', 'pass123', '01711000006'),
('Customer', 'Rakib Ahmed', 'rakib@example.com', 'pass123', '01711000007'),
('Customer', 'Nayeem Hasan', 'nayeem@example.com', 'pass123', '01711000008'),
('Customer', 'Fahim Islam', 'fahim@example.com', 'pass123', '01711000009'),
('Customer', 'Tanjil Rahman', 'tanjil@example.com', 'pass123', '01711000010'),
('Customer', 'Hasan Ali', 'hasan@example.com', 'pass123', '01711000011'),
('Customer', 'Mahmud Hasan', 'mahmud@example.com', 'pass123', '01711000012'),
('Customer', 'Imran Hossain', 'imran@example.com', 'pass123', '01711000013'),
('Customer', 'Shanto Mia', 'shanto@example.com', 'pass123', '01711000014'),
('Customer', 'Jahid Hasan', 'jahid@example.com', 'pass123', '01711000015'),
('Customer', 'Rasel Ahmed', 'rasel@example.com', 'pass123', '01711000016'),
('Customer', 'Naim Sheikh', 'naim@example.com', 'pass123', '01711000017'),
('Customer', 'Tamim Islam', 'tamim@example.com', 'pass123', '01711000018'),
('Customer', 'Arif Hossain', 'arif@example.com', 'pass123', '01711000019'),
('Customer', 'Sajid Khan', 'sajid@example.com', 'pass123', '01711000020');


  

CREATE TABLE Vehicles  (
  vehicle_id SERIAL PRIMARY KEY,
  vehicle_name VARCHAR(100) NOT NULL,
  vehicle_type vehicle_type_e NOT NULL ,
  model VARCHAR(100),
  registration_number VARCHAR(50) UNIQUE NOT NULL,
  rental_price_per_day DECIMAL(10,2) NOT NULL,
  availability_status availability_status_e
  
)

INSERT INTO Vehicles 
(vehicle_name, vehicle_type, model, registration_number, rental_price_per_day, availability_status)
VALUES
('Toyota Corolla', 'car', '2019', 'REG-1001', 3500.00, 'available'),
('Honda Civic', 'car', '2020', 'REG-1002', 4000.00, 'rented'),
('Hyundai Elantra', 'car', '2021', 'REG-1003', 3800.00, 'available'),
('Suzuki Swift', 'car', '2018', 'REG-1004', 3000.00, 'maintenance'),
('BMW X3', 'car', '2022', 'REG-1005', 9000.00, 'available'),

('Honda CBR', 'bike', '2019', 'REG-2001', 1200.00, 'available'),
('Yamaha R15', 'bike', '2020', 'REG-2002', 1500.00, 'rented'),
('Bajaj Pulsar', 'bike', '2018', 'REG-2003', 1000.00, 'available'),
('TVS Apache', 'bike', '2021', 'REG-2004', 1300.00, 'maintenance'),
('Royal Enfield', 'bike', '2022', 'REG-2005', 2000.00, 'available'),

('TATA Truck', 'truck', '2018', 'REG-3001', 7000.00, 'available'),
('Ashok Leyland', 'truck', '2019', 'REG-3002', 7500.00, 'rented'),
('Volvo Cargo', 'truck', '2021', 'REG-3003', 9000.00, 'available'),
('Isuzu Heavy', 'truck', '2020', 'REG-3004', 8000.00, 'maintenance'),
('Hino Truck', 'truck', '2019', 'REG-3005', 8500.00, 'available'),

('Nissan Sunny', 'car', '2017', 'REG-1006', 2800.00, 'available'),
('Audi A4', 'car', '2021', 'REG-1007', 9500.00, 'rented'),
('KTM Duke', 'bike', '2022', 'REG-2006', 2200.00, 'available'),
('Hero Splendor', 'bike', '2017', 'REG-2007', 900.00, 'available'),
('Ford Ranger', 'truck', '2022', 'REG-3006', 9500.00, 'available');

  

CREATE TABLE bookings(
  booking_id SERIAL PRIMARY KEY,
  
  user_id INTEGER NOT NULL,
  vehicle_id INTEGER NOT NULL,

  rent_start_date DATE NOT NULL,
  rent_end_date DATE NOT NULL,

  booking_status booking_status_e ,
  total_cost DECIMAL(10,2) NOT NULL,

  FOREIGN KEY(user_id) REFERENCES users(user_id),
  FOREIGN KEY (vehicle_id) REFERENCES vehicles(vehicle_id)
);
INSERT INTO bookings (user_id, vehicle_id, rent_start_date, rent_end_date, booking_status, total_cost)
VALUES (4, 1, '2025-12-23', '2025-12-25', 'pending', 10500);


SELECT 
    bookings.booking_id,
    users.name AS customer_name,
    vehicles.vehicle_name,
    bookings.rent_start_date,
  bookings.rent_end_date,
    bookings.booking_status
FROM bookings
JOIN users ON bookings.user_id = users.user_id
JOIN vehicles ON bookings.vehicle_id = vehicles.vehicle_id;
