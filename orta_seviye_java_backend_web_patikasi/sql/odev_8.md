1. **test** veritabanınızda **employee** isimli sütun bilgileri id(INTEGER), name VARCHAR(50), birthday DATE, email VARCHAR(100) olan bir tablo oluşturalım.
2. Oluşturduğumuz **employee** tablosuna 'Mockaroo' servisini kullanarak 50 adet veri ekleyelim.
3. Sütunların her birine göre diğer sütunları güncelleyecek 5 adet **UPDATE** işlemi yapalım.
4. Sütunların her birine göre ilgili satırı silecek 5 adet **DELETE** işlemi yapalım.
---

```
CREATE TABLE employee (
	id INTEGER NOT NULL,
	name VARCHAR(50) NOT NULL,
	birthday DATE,
	email VARCHAR(100)
);

insert into employee (id, name, birthday, email) values (1, 'Arley', '1926-04-06', 'arenzo0@woothemes.com');
insert into employee (id, name, birthday, email) values (2, 'Billy', '1981-12-15', 'bdcosta1@opensource.org');
insert into employee (id, name, birthday, email) values (3, 'Jedidiah', '1946-04-07', 'jmindenhall2@alexa.com');
insert into employee (id, name, birthday, email) values (4, 'Trevar', '1949-01-01', null);
insert into employee (id, name, birthday, email) values (5, 'Nap', '1939-05-22', 'nmeikle4@fc2.com');
insert into employee (id, name, birthday, email) values (6, 'Elwyn', '1913-10-16', 'ecorgenvin5@illinois.edu');
insert into employee (id, name, birthday, email) values (7, 'Marlin', '1972-10-08', 'msutliff6@utexas.edu');
insert into employee (id, name, birthday, email) values (8, 'Deonne', '1993-08-26', 'ddutnall7@msu.edu');
insert into employee (id, name, birthday, email) values (9, 'Nicki', '1952-01-19', 'ndenyer8@tamu.edu');
insert into employee (id, name, birthday, email) values (10, 'Shara', '1902-02-07', 'sgardiner9@army.mil');
insert into employee (id, name, birthday, email) values (11, 'Patrice', '1971-10-29', 'pmccaheya@cocolog-nifty.com');
insert into employee (id, name, birthday, email) values (12, 'Gonzales', null, 'gtogherb@skyrock.com');
insert into employee (id, name, birthday, email) values (13, 'Jarrett', '1992-04-17', 'jwalbrunc@goodreads.com');
insert into employee (id, name, birthday, email) values (14, 'Chad', '1967-02-22', null);
insert into employee (id, name, birthday, email) values (15, 'Ulrich', '1984-08-26', 'umcallistere@usnews.com');
insert into employee (id, name, birthday, email) values (16, 'Kalli', '1990-05-03', 'kokeshottf@wisc.edu');
insert into employee (id, name, birthday, email) values (17, 'Bastien', '1999-08-25', 'bdunrigeg@plala.or.jp');
insert into employee (id, name, birthday, email) values (18, 'Phyllida', '1964-11-04', 'psmallpieceh@slideshare.net');
insert into employee (id, name, birthday, email) values (19, 'Andy', '1909-09-30', null);
insert into employee (id, name, birthday, email) values (20, 'Muire', '1979-02-26', null);
insert into employee (id, name, birthday, email) values (21, 'Sky', '1981-04-13', 'smaccarterk@globo.com');
insert into employee (id, name, birthday, email) values (22, 'Edik', '1998-10-04', 'emcevonl@google.de');
insert into employee (id, name, birthday, email) values (23, 'Chan', '1993-12-26', 'cleacockm@fc2.com');
insert into employee (id, name, birthday, email) values (24, 'Eddy', '1994-06-17', 'esteffann@ebay.co.uk');
insert into employee (id, name, birthday, email) values (25, 'Carmencita', '1934-10-02', 'cchasiero@epa.gov');
insert into employee (id, name, birthday, email) values (26, 'Constancia', '1984-04-19', 'cbloxlandp@wired.com');
insert into employee (id, name, birthday, email) values (27, 'Ervin', '1920-05-09', 'echaliceq@dell.com');
insert into employee (id, name, birthday, email) values (28, 'Wandis', '1954-07-16', 'wpoynerr@linkedin.com');
insert into employee (id, name, birthday, email) values (29, 'Anastasia', '1910-07-20', 'ahannans@wordpress.com');
insert into employee (id, name, birthday, email) values (30, 'Danny', '1954-08-13', 'dluntt@wordpress.com');
insert into employee (id, name, birthday, email) values (31, 'Roze', '1975-09-19', 'rdreinanu@google.co.uk');
insert into employee (id, name, birthday, email) values (32, 'Normand', '1918-09-15', null);
insert into employee (id, name, birthday, email) values (33, 'Marina', '1918-12-23', 'mlamarw@ebay.com');
insert into employee (id, name, birthday, email) values (34, 'Bearnard', '1909-07-22', 'blilianx@cargocollective.com');
insert into employee (id, name, birthday, email) values (35, 'Tyrone', '1972-05-30', 'tgluyasy@berkeley.edu');
insert into employee (id, name, birthday, email) values (36, 'Pammy', '1947-06-25', 'pverduinz@wikispaces.com');
insert into employee (id, name, birthday, email) values (37, 'Amerigo', '1908-10-20', 'akoeppke10@paginegialle.it');
insert into employee (id, name, birthday, email) values (38, 'Frederigo', '1906-04-23', 'fthulborn11@skype.com');
insert into employee (id, name, birthday, email) values (39, 'Valentin', '1904-01-16', 'vbrevitt12@dailymail.co.uk');
insert into employee (id, name, birthday, email) values (40, 'Clay', '1991-06-29', 'cwatkiss13@paypal.com');
insert into employee (id, name, birthday, email) values (41, 'Cleveland', '1973-12-10', null);
insert into employee (id, name, birthday, email) values (42, 'Tallia', '1949-09-23', 'tgutch15@cdbaby.com');
insert into employee (id, name, birthday, email) values (43, 'Imogene', null, 'imcquilty16@booking.com');
insert into employee (id, name, birthday, email) values (44, 'Brianne', '1906-02-27', 'bbelderfield17@networkadvertising.org');
insert into employee (id, name, birthday, email) values (45, 'Torrence', '1982-04-11', 'tkellert18@ucsd.edu');
insert into employee (id, name, birthday, email) values (46, 'Tonnie', '1910-08-13', 'tsiddeley19@scribd.com');
insert into employee (id, name, birthday, email) values (47, 'Ellene', '1907-03-18', 'eilchuk1a@smugmug.com');
insert into employee (id, name, birthday, email) values (48, 'Davin', '1992-02-29', null);
insert into employee (id, name, birthday, email) values (49, 'Abbey', '1992-09-04', 'araffeorty1c@nytimes.com');
insert into employee (id, name, birthday, email) values (50, 'Vilhelmina', '1938-09-18', 'vbohlens1d@virginia.edu');

UPDATE employee
	SET name = 'Ali',
	birthday = '2000-17-12',
	email = 'ali@a.com'
	WHERE id = 1;

UPDATE employee
	SET name = 'Burak',
	email = 'burak@a.com'
	WHERE name = 'Billy';

UPDATE employee
	SET birthday = '1990-12-15'
	WHERE id = 10;

UPDATE employee
	SET email = 'info@a.com'
	WHERE email = 'ddutnall7@msu.edu';

UPDATE employee
	SET name = 'Üzeyir',
	email = 'uzeir@a.com'
	WHERE birthday = '1993-08-26';

DELETE FROM employee
	WHERE id = 5;

DELETE FROM employee
	WHERE name = 'Marlin';

DELETE FROM employee
	WHERE birthday = '1967-02-22';

DELETE FROM employee
	WHERE email = 'kokeshottf@wisc.edu';

DELETE FROM employee
	WHERE id = 36;
```

---