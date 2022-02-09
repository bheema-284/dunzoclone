let rest_data = [
    {
        image: 'https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:w-250,h-250,cm-pad_resize_store_thumbnail/stores/dW1jV0QyWWVaNHpkOHZrRmRrZW9Zdz09-1596000055586-store_image.jpg',
        name: 'Murudis Lunch Home',
        type: 'South Indian Chitadripet',
        distance: '1.8',
    },
    {
        image: 'https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:w-250,h-250,cm-pad_resize_store_thumbnail/stores/62b15813-e43c-4031-af5b-364e6bb7fe4f-1574921823340-store_image.jpg',
        name: 'Kovai Pazhamudir Nilayam',
        type: 'Vepery',
        distance: '1.2 km',
    },
    {
        image: 'https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:w-250,h-250,cm-pad_resize_store_thumbnail/stores/aWJFZnY4RmFJYXdnUFg0NjNIejVzdz09-1606229029535-store_image.jpg',
        name: 'Rekha Mithai',
        type: 'South Indian Vepery',
        distance: '1 km',
    },
    {
        image: 'https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:w-250,h-250,cm-pad_resize_store_thumbnail/stores/Qzg0VlR6YmhSRVI2aldjUThUOHJNQT09-1590152615043-store_image.jpg',
        name: 'Hotel Shiva Sagar',
        type: 'South Indian Periyamet',
        distance: '1.7 km',
    },
    {
        image: 'https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:w-250,h-250,cm-pad_resize_store_thumbnail/stores/fdc21e5f-8d50-4d8b-b9e2-27378c45d374-1543489991066-store_image.jpg',
        name: 'Hotel Shri Krishna Prasad',
        type: 'South Indian George Town',
        distance: '1.7 km',
    },
    {
        image: 'https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:w-250,h-250,cm-pad_resize_store_thumbnail/stores/7eb386a0-8be7-4d68-bd67-243a015a3070-1561021822384-store_image.jpg',
        name: 'Hotel Sarvana Bhavan',
        type: 'South Indian Egmore',
        distance: '1.9 km',
    },
    {
        image: 'https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:w-250,h-250,cm-pad_resize_store_thumbnail/stores/aFlTTEN5RlAxRERSV2EwS3pTZnlKUT09-1591271379479-store_image.jpg',
        name: 'Sangheeta Veg Restaurant',
        type: 'South Indian Egmore',
        distance: '2.7 km',
    },
    {
        image: 'https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:w-250,h-250,cm-pad_resize_store_thumbnail/stores/682114f9-10a5-4d6f-bcbd-2eb48ddadbba-1574919773004-store_image.jpg',
        name: 'Kakada Ramprasad',
        type: 'Mithai George Town',
        distance: '2.6 km',
    },
    {
        image: 'https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:w-250,h-250,cm-pad_resize_store_thumbnail/stores/TnEvTUE2MTIzZGpRTzVSYXBvTjR5dz09-1578996123916-store_image.jpg',
        name: 'Ajnabi Mithai Pvt Ltd',
        type: 'Mithai Sowcarpet',
        distance: '3.3 km',
    },
    {
        image: 'https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:w-250,h-250,cm-pad_resize_store_thumbnail/stores/3dc2b6bb-7e85-4012-a22f-b15ecc5ce775-1566471859723-store_image.jpg',
        name: 'Hotel Prayag',
        type: 'North Indian Sowcarpet',
        distance: '2.5 km',
    },
    {
        image: 'https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:w-250,h-250,cm-pad_resize_store_thumbnail/stores/eb463690-6ddf-43ac-a2c6-4defc4b5ee61-1616742380623-store_image.jpeg',
        name: "Mamro's Mithai Vatika",
        type: 'Sweet Sowcarpet',
        distance: '3 km',
    },
    {
        image: 'https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:w-250,h-250,cm-pad_resize_store_thumbnail/stores/d87f7fe3-f95f-4d8e-a86e-30c47efb708a-1604641214952-store_image.jpg',
        name: 'McRennet',
        type: 'Bakery Purusaiwalkam',
        distance: '2.6 km',
    },
    {
        image: 'https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:w-250,h-250,cm-pad_resize_store_thumbnail/stores/999c2dc7-fef4-4709-9d77-9ff758e92bd7-1615981164269-store_image.jpeg',
        name: 'Agarwal Bhavan',
        type: 'Sweet George Town',
        distance: '3.4 km',
    },
    {
        image: 'https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:w-250,h-250,cm-pad_resize_store_thumbnail/stores/5336ebba-dcf1-4461-bdd1-e64243fb589c-1574082309503-store_image.jpg',
        name: 'Hotel Pandian',
        type: 'South Indian Egmore',
        distance: '1.8 km',
    },
    {
        image: 'https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:w-250,h-250,cm-pad_resize_store_thumbnail/stores/e33a6e4f-a347-4184-8662-72374a41f271-1576844573341-store_image.jpg',
        name: 'Hotel Ramalinga Vilas',
        type: 'South Indian Choolai',
        distance: '2.6 km',
    },
    {
        image: 'https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:w-250,h-250,cm-pad_resize_store_thumbnail/stores/a2R1Q21MNENjZDk3MjVucFB4b2NOdz09-1587035948587-store_image.jpg',
        name: 'Shyam Bombay Halwa House',
        type: 'Sowcarpet',
        distance: '3 km',
    },
    {
        image: 'https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:w-250,h-250,cm-pad_resize_store_thumbnail/stores/RTJJTm9BeWtBcmE3ZTdSZVdtOW0rQT09-1573807053712-store_image.jpg',
        name: 'Sri Keshav Chat',
        type: 'Fast Food Choolai',
        distance: '1 km',
    },
    {
        image: 'https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:w-250,h-250,cm-pad_resize_store_thumbnail/stores/d1JneUU1OHAzMmJvbFRnelBKVzdPQT09-1620730173347-store_image.jpg',
        name: 'Grill Wagon',
        type: 'North Indian Egmore',
        distance: '1.4 km',
    },
    {
        image: 'https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:w-250,h-250,cm-pad_resize_store_thumbnail/stores/UXV0TDVxYnUxTTZyMFNSaDVFUmtSZz09-1620909348646-store_image.jpg',
        name: 'Shangai Express',
        type: 'Chinese Egmore',
        distance: '1.4 km',
    },
    {
        image: 'https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:w-250,h-250,cm-pad_resize_store_thumbnail/stores/ac0083dc-3246-40ec-ad5e-ce9bf5a0ccfb-1559299366862-store_image.jpg',
        name: 'Al Faham',
        type: 'North Indian Vepery',
        distance: '2.5 km',
    },  
];

export default rest_data;