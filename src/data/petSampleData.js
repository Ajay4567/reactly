export const petData = {
    basicInfo: {
        name: "Luna",
        breed: "Labrador",
        gender: "Female",
        age: "2 years 3 months",
        weight: "25 kg",
        profileImage: "/images/luna.jpg",
    },
    health: {
        vaccines: "Up to date",
        allergies: "Chicken",
        vet: "Dr. Smith",
    },
    feeding: [
        { time: "9:00 AM", food: "Royal Canin 100 g" },
        { time: "6:00 PM", food: "Royal Canin 100 g" },
    ],
    grooming: {
        nextBath: "Mar 30",
        nextNailTrim: "Apr 10",
    },
    gallery: ["/images/luna1.jpg", "/images/luna2.jpg"],
    notes: [
        { date: "Mar 28", entry: "Sneezed a few times." },
        { date: "Mar 26", entry: "Walked for 45 mins." },
    ],
};

export default petData;
