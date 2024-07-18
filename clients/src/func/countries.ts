const countries = [
    {
      name: 'United States',
      cities: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose']
    },
    {
      name: 'Canada',
      cities: ['Toronto', 'Vancouver', 'Montreal', 'Calgary', 'Edmonton', 'Ottawa', 'Winnipeg', 'Quebec City', 'Hamilton', 'Kitchener']
    },
    {
      name: 'United Kingdom',
      cities: ['London', 'Birmingham', 'Manchester', 'Liverpool', 'Bristol', 'Sheffield', 'Glasgow', 'Leeds', 'Edinburgh', 'Cardiff']
    },
    {
      name: 'Australia',
      cities: ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide', 'Gold Coast', 'Canberra', 'Newcastle', 'Wollongong', 'Geelong']
    },
    {
      name: 'Germany',
      cities: ['Berlin', 'Hamburg', 'Munich', 'Cologne', 'Frankfurt', 'Stuttgart', 'Düsseldorf', 'Dortmund', 'Essen', 'Leipzig']
    },
    {
      name: 'France',
      cities: ['Paris', 'Marseille', 'Lyon', 'Toulouse', 'Nice', 'Nantes', 'Strasbourg', 'Montpellier', 'Bordeaux', 'Lille']
    },
    {
      name: 'Italy',
      cities: ['Rome', 'Milan', 'Naples', 'Turin', 'Palermo', 'Genoa', 'Bologna', 'Florence', 'Catania', 'Venice']
    },
    {
      name: 'Japan',
      cities: ['Tokyo', 'Osaka', 'Nagoya', 'Sapporo', 'Fukuoka', 'Kobe', 'Kyoto', 'Sendai', 'Hiroshima', 'Yokohama']
    },
    {
      name: 'China',
      cities: ['Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen', 'Chengdu', 'Chongqing', 'Wuhan', 'Xi\'an', 'Hangzhou', 'Nanjing']
    },
    {
      name: 'India',
      cities: ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Ahmedabad', 'Chennai', 'Kolkata', 'Surat', 'Pune', 'Jaipur']
    },
    {
      name: 'Brazil',
      cities: ['São Paulo', 'Rio de Janeiro', 'Salvador', 'Brasília', 'Fortaleza', 'Belo Horizonte', 'Manaus', 'Curitiba', 'Recife', 'Porto Alegre']
    },
    {
      name: 'Russia',
      cities: ['Moscow', 'Saint Petersburg', 'Novosibirsk', 'Yekaterinburg', 'Nizhny Novgorod', 'Kazan', 'Chelyabinsk', 'Omsk', 'Rostov-on-Don', 'Ufa']
    },
    {
      name: 'South Africa',
      cities: ['Johannesburg', 'Cape Town', 'Durban', 'Pretoria', 'Port Elizabeth', 'Bloemfontein', 'Nelspruit', 'Kimberley', 'Polokwane', 'East London']
    },
    {
      name: 'Mexico',
      cities: ['Mexico City', 'Guadalajara', 'Monterrey', 'Puebla', 'Toluca', 'Tijuana', 'León', 'Ciudad Juárez', 'Torreón', 'Querétaro']
    },
    {
      name: 'Argentina',
      cities: ['Buenos Aires', 'Córdoba', 'Rosario', 'Mendoza', 'La Plata', 'San Miguel de Tucumán', 'Mar del Plata', 'Salta', 'Santa Fe', 'Corrientes']
    },
    {
      name: 'Nigeria',
      cities: ['Lagos', 'Kano', 'Ibadan', 'Abuja', 'Port Harcourt', 'Benin City', 'Maiduguri', 'Zaria', 'Aba', 'Jos']
    },
    {
      name: 'Egypt',
      cities: ['Cairo', 'Alexandria', 'Giza', 'Shubra El Kheima', 'Port Said', 'Suez', 'Luxor', 'al-Mansura', 'Tanta', 'Asyut']
    },
    {
      name: 'Turkey',
      cities: ['Istanbul', 'Ankara', 'Izmir', 'Bursa', 'Adana', 'Gaziantep', 'Konya', 'Antalya', 'Kayseri', 'Mersin']
    },
    {
      name: 'Indonesia',
      cities: ['Jakarta', 'Surabaya', 'Bandung', 'Bekasi', 'Medan', 'Tangerang', 'Depok', 'Semarang', 'Palembang', 'Makassar']
    },
    {
      name: 'Saudi Arabia',
      cities: ['Riyadh', 'Jeddah', 'Mecca', 'Medina', 'Dammam', 'Khobar', 'Tabuk', 'Buraidah', 'Khamis Mushait', 'Abha']
    },
    {
        name: 'Vietnam',
        cities: ['Hanoi', 'Ho Chi Minh City', 'Da Nang', 'Hai Phong', 'Can Tho', 'Nha Trang', 'Hue', 'Vung Tau', 'Quy Nhon', 'Phan Thiet']
      },
      {
        name: 'Thailand',
        cities: ['Bangkok', 'Chiang Mai', 'Phuket', 'Pattaya', 'Hat Yai', 'Nakhon Ratchasima', 'Udon Thani', 'Khon Kaen', 'Hua Hin', 'Surat Thani']
      },
      {
        name: 'South Korea',
        cities: ['Seoul', 'Busan', 'Incheon', 'Daegu', 'Daejeon', 'Gwangju', 'Suwon', 'Ulsan', 'Changwon', 'Goyang']
      },
      {
        name: 'Malaysia',
        cities: ['Kuala Lumpur', 'George Town', 'Ipoh', 'Johor Bahru', 'Malacca', 'Kota Kinabalu', 'Kuching', 'Shah Alam', 'Petaling Jaya', 'Alor Setar']
      },
      {
        name: 'Singapore',
        cities: ['Singapore'] // Singapore là thành phố-quốc gia
      },
      {
        name: 'Philippines',
        cities: ['Manila', 'Quezon City', 'Davao City', 'Cebu City', 'Zamboanga City', 'Antipolo', 'Taguig', 'Pasig', 'Cagayan de Oro', 'Parañaque']
      },
      {
        name: 'Pakistan',
        cities: ['Karachi', 'Lahore', 'Faisalabad', 'Rawalpindi', 'Multan', 'Hyderabad', 'Gujranwala', 'Peshawar', 'Quetta', 'Islamabad']
      },
      {
        name: 'Bangladesh',
        cities: ['Dhaka', 'Chittagong', 'Khulna', 'Rajshahi', 'Sylhet', 'Barisal', 'Comilla', 'Rangpur', 'Narayanganj', 'Gazipur']
      },
      {
        name: 'Sri Lanka',
        cities: ['Colombo', 'Kandy', 'Galle', 'Jaffna', 'Negombo', 'Anuradhapura', 'Ratnapura', 'Trincomalee', 'Batticaloa', 'Matara']
      },
      {
        name: 'Nepal',
        cities: ['Kathmandu', 'Pokhara', 'Lalitpur', 'Biratnagar', 'Birgunj', 'Dharan', 'Bharatpur', 'Janakpur', 'Hetauda', 'Butwal']
      }
  ];
  
  export default countries;
  