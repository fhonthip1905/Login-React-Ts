interface User {
    id: number;
    name: string;
    email: string;
    username: string;
    password: string;
  }
  
  // mock data ของผู้ใช้
  export const users: User[] = [
      {  
        id: 1,
        username: 'john',
        password: 'j123456',
        name: 'John Doe',
        email: 'john@gmail.com'
      },
      {  
        id: 2,
        username: 'hana',
        password: 'h123456',
        name: 'Hana Jone',
        email: 'hana@gmail.com'
      },
      {  
        id: 3,
        username: 'rosie',
        password: 'r123456',
        name: 'Rosie Walt',
        email: 'rosie@gmail.com'
      },
      {  
        id: 4,
        username: 'adel',
        password: 'a123456',
        name: 'Adel Walker',
        email: 'adel@gmail.com'
      },
    ];