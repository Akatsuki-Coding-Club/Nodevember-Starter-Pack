var personsData = [
    {
      Name: "John Doe",
      Email: "john.doe@example.com",
      Mobile: "1234567890",
      Password: "password123"
    },
    {
      Name: "Jane Smith",
      Email: "jane.smith@example.com",
      Mobile: "9876543210",
      Password: "securepass"
    },
    {
      Name: "Alice Johnson",
      Email: "alice.johnson@example.com",
      Mobile: "5551112233",
      Password: "alicepass"
    },
    {
      Name: "Bob Williams",
      Email: "bob.williams@example.com",
      Mobile: "9998887777",
      Password: "bobpass"
    },
    {
      Name: "Eva Davis",
      Email: "eva.davis@example.com",
      Mobile: "4443332222",
      Password: "evapass"
    },
    {
      Name: "Michael Brown",
      Email: "michael.brown@example.com",
      Mobile: "7776665555",
      Password: "michaelpass"
    },
    {
      Name: "Olivia White",
      Email: "olivia.white@example.com",
      Mobile: "3332221111",
      Password: "oliviapass"
    },
    {
      Name: "Daniel Miller",
      Email: "daniel.miller@example.com",
      Mobile: "6665554444",
      Password: "danielpass"
    },
    {
      Name: "Sophia Wilson",
      Email: "sophia.wilson@example.com",
      Mobile: "2221110000",
      Password: "sophiapass"
    },
    {
      Name: "William Moore",
      Email: "william.moore@example.com",
      Mobile: "8887776666",
      Password: "williampass"
    }
  ];
  
  
  db.Users.insertMany(personsData);