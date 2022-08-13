    CREATE DATABASE test_express;
    DROP DATABASE test_express;

    \c test_express

    CREATE TABLE IF NOT EXISTS test(
        id SERIAL,
        testmsg VARCHAR(50) NOT NULL
    );
    DROP TABLE test;

    INSERT INTO test VALUES(1, 'test message');
       INSERT INTO test VALUES(2, 'new test message');

    SELECT * FROM test;


    CREATE TABLE IF NOT EXISTS testusers(
        id SERIAL,
        name VARCHAR(50) NOT NULL,
        email VARCHAR(50) NOT NULL UNIQUE,
        login NUMERIC(100) NOT NULL UNIQUE
    );
    DROP TABLE testusers;

     INSERT INTO testusers VALUES(1, 'Mendes','mendes@gmail.com',1234);
       INSERT INTO testusers VALUES(2, 'Mendes','mendesagain@outlook.com',123456);
         INSERT INTO testusers VALUES(3, 'Micah','micah@outlook.com',1234567);
           INSERT INTO testusers VALUES(4, 'Juan','juan@outlook.com',123);
             INSERT INTO testusers VALUES(4, 'Noah','noah@outlook.com',123);
                INSERT INTO testusers VALUES(6, 'Noah','noanh@outlook.com',1235);
    SELECT * FROM testusers;